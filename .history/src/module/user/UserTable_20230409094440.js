import React from "react";
import { Table } from "components/table";
import { useState } from "react";
import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { ActionEdit, ActionDelete } from "components/action";
import { db } from "firebase-app/firebase-config";
import { useNavigate } from "react-router-dom";
const UserTable = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "users");
    onSnapshot(colRef, (snapshot) => {
      const results = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setUserList(results);
    });
  }, []);
  console.log(userList);
  const renderUser = (user) => {
    return (
      <tr key={user.id}>
        <th>{user.id}</th>
        <th>{user?.fullname}</th>
        <th>Username</th>
        <th>{user?.email}</th>
        <th>Status</th>
        <th>Role</th>
        <th>
          <div className="flex gap-5 text-gray-400">
            <ActionEdit
              onClick={() => navigate(`/manage/update-category?id=${user.id}`)}
            ></ActionEdit>
            <ActionDelete
              onClick={() => handleDeleteCategory(item.id)}
            ></ActionDelete>
          </div>
        </th>
      </tr>
    );
  };
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Info</th>
            <th>Username</th>
            <th>Email address</th>
            <th>Status</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.length > 0 && userList.map((user) => renderUser(user))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserTable;
