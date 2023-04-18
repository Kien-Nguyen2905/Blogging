import { ActionDelete, ActionEdit, ActionView } from "components/action";
import { LabelStatus } from "components/label";
import { Table } from "components/table";
import {
  collection,
  doc,
  query,
  deleteDoc,
  where,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { db } from "firebase-app/firebase-config";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "contexts/auth-context";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

const CategoryManage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState(undefined);
  const [categorylist, setCategorylist] = useState({});
  useEffect(() => {
    async function fetch() {
      // async function getCategory() {
      //   const q = query(colRef);
      //   const querySnapshot = await getDocs(q);
      //   const result = [];
      //   querySnapshot.forEach((item) => {
      //     result.push({
      //       id: item.id,
      //       ...item.data(),
      //     });
      //   });
      //   setCategorylist(result);
      // }
      // getCategory();
      const colRef = collection(db, "categories");
      const newRef = filter
        ? query(
            colRef,
            where("name", ">=", filter),
            where("name", "<=", filter + "utf8")
          )
        : colRef;
      onSnapshot(newRef, (snapshot) => {
        let results = [];
        snapshot.forEach((item) => {
          results.push({
            id: item.id,
            ...item.data(),
          });
        });
        setCategorylist(results);
      });
      onSnapshot(colRef, (snapshot) => {
        const results = [];
        snapshot.forEach((item) => {
          results.push({
            id: item.id,
            ...item.data(),
          });
        });
        setCategorylist(results);
      });
    }
    fetch();
  }, [filter]);
  const handleDeleteCategory = async (docId) => {
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
  const handleInputFilter = debounce((e) => {
    setFilter(e.target.value);
  }, 500);
  return (
    <div>
      <DashboardHeading
        title="Categories"
        desc="Manage your category"
      ></DashboardHeading>
      <div className="flex justify-end mb-10">
        <input
          type="text"
          placeholder="Search category..."
          className="px-5 py-4 border border-gray-300 rounded-lg outline-none"
          onChange={handleInputFilter}
        />
      </div>
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
                    <ActionEdit
                      onClick={() =>
                        navigate(`/manage/update-category?id=${item.id}`)
                      }
                    ></ActionEdit>
                    <ActionDelete
                      onClick={() => handleDeleteCategory(item.id)}
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
