import { ActionDelete, ActionEdit, ActionView } from "components/action";
import { LabelStatus } from "components/label";
import { Table } from "components/table";
import { collection, getDocs, doc, deleteDoc, query } from "firebase/firestore";
import { db } from "firebase-app/firebase-config";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "contexts/auth-context";
const CategoryManage = () => {
  const [categorylist, setCategorylist] = useState({});
  useEffect(() => {
    async function getCategory() {
      const q = query(collection(db, "categories"));
      const querySnapshot = await getDocs(q);
      const result = [];
      querySnapshot.forEach((item) => {
        result.push({
          id: item.id,
          ...item.data(),
        });
      });
      setCategorylist(result);
    }
    getCategory();
  }, []);
  const { userInfo } = useAuth();
  const handleDeleteCategory = async (docId) => {
    if (userInfo?.role !== userRole.ADMIN) {
      Swal.fire("Failed", "You have no right to do this action", "warning");
      return;
    }
    const colRef = doc(db, "categories", docId);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteDoc(colRef);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div>
      <DashboardHeading
        title="Categories"
        desc="Manage your category"
      ></DashboardHeading>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categorylist.length > 0 &&
            categorylist.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <em className="text-gray-400">{item.slug}</em>
                </td>
                <td>
                  <LabelStatus type="success">Approved</LabelStatus>
                </td>
                <td>
                  <div className="flex gap-5 text-gray-400">
                    <ActionView></ActionView>
                    <ActionEdit></ActionEdit>
                    <ActionDelete
                      onClick={() => handleDeleteCategory(categorylist.id)}
                    ></ActionDelete>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};
export default CategoryManage;
