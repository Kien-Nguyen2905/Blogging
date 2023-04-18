import { ActionDelete, ActionEdit, ActionView } from "components/action";
import { LabelStatus } from "components/label";
import { Table } from "components/table";
import { collection, getDoc, onSnapshot, query } from "firebase/firestore";
import { db } from "firebase-app/firebase-config";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CategoryManage = () => {
  const [categories, setCategories] = useState({});
  useEffect(() => {
    const Category = query(getDoc(collection(db, "categories")));
    onSnapshot(Category, (Snapshot) => {
      const result = [];
      Snapshot.forEach((item) => {
        result.push({
          id: item.id,
          ...item.data(),
        });
      });
    });
  }, []);
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
          <tr>
            <td>01</td>
            <td>Frontend Developer</td>
            <td>
              <em className="text-gray-400">frontend-developer</em>
            </td>
            <td>
              <LabelStatus type="success">Approved</LabelStatus>
            </td>
            <td>
              <div className="flex gap-5 text-gray-400">
                <ActionView></ActionView>
                <ActionEdit></ActionEdit>
                <ActionDelete></ActionDelete>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default CategoryManage;
