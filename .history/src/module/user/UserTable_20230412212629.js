import React from "react";
import { Table } from "components/table";
import { useState } from "react";
import { useEffect } from "react";
import {
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { ActionEdit, ActionDelete } from "components/action";
import { LabelStatus } from "components/label";
import { db } from "firebase-app/firebase-config";
import { useNavigate } from "react-router-dom";
import { userRole, userStatus } from "utils/constants";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useAuth } from "contexts/auth-context";
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
  const renderUser = (user) => {
    return (
      <tr key={user.id}>
        <th title={user.id}>{user.id.slice(0, 5) + "...."}</th>
        <td className="whitespace-nowrap">
          <div className="flex items-center gap-x-3">
            <img
              src={user?.avatar}
              alt=""
              className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <h3>{user?.fullname}</h3>
              <time className="text-sm text-gray-300">
                {new Date(user?.createdAt?.seconds * 1000).toLocaleDateString(
                  "vi-VI"
                )}
              </time>
            </div>
          </div>
        </td>
        <th>{user?.username}</th>
        <th title={user.email}>{user?.email.slice(0, 15) + "..."}</th>
        <th>{renderStatus(Number(user?.status))}</th>
        <th>{renderRole(Number(user?.role))}</th>
        <th>
          <div className="flex gap-5 text-gray-400">
            <ActionEdit
              onClick={() => navigate(`/manage/update-user?id=${user.id}`)}
            ></ActionEdit>
            <ActionDelete onClick={() => handleDeleteUser(user)}></ActionDelete>
          </div>
        </th>
      </tr>
    );
  };
  const renderStatus = (status) => {
    switch (status) {
      case userStatus.ACTIVE:
        return <LabelStatus type="success">Active</LabelStatus>;
      case userStatus.PENDING:
        return <LabelStatus type="warning">Pending</LabelStatus>;
      case userStatus.BAN:
        return <LabelStatus type="danger">Rejected</LabelStatus>;
      default:
        break;
    }
  };
  const renderRole = (role) => {
    switch (role) {
      case userRole.ADMIN:
        return "Admin";
      case userRole.MOD:
        return "Mod";
      case userRole.USER:
        return "User";
      default:
        break;
    }
  };
  const { userInfo } = useAuth();
  const [user, setUser] = useState({});
  useEffect(() => {
    async function fetch() {
      if (!userInfo.email) return;
      const q = query(
        collection(db, "users"),
        where("email", "==", userInfo.email)
      );
      const docData = await getDocs(q);
      const results = [];
      docData.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setUser(results);
    }
    fetch();
  }, [userInfo.email]);
  console.log(user);
  const handleDeleteUser = async (user) => {
    if (user[0]?.role !== userRole.ADMIN) {
      Swal.fire("Failed", "You have no right to do this action", "warning");
      return;
    }
    const colRef = doc(db, "users", user.id);
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
        toast.success("Delete user successfully");
        Swal.fire("Deleted!", "The user has been deleted.", "success");
      }
    });
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
