import React from "react";
import DashboardHeading from "module/dashboard/DashboardHeading";
import { Button } from "components/button";
import UserTable from "./UserTable";
const UserManage = () => {
  const handleInputFilter = (e) => {};
  return (
    <div>
      <DashboardHeading title="Users" desc="Manage your user">
        <Button kind="ghost" height="60px" to="/manage/add-user">
          Create new user
        </Button>
      </DashboardHeading>
      <div className="flex justify-end mb-10">
        <input
          type="text"
          placeholder="Search user..."
          className="px-5 py-4 border border-gray-300 rounded-lg outline-none"
          onChange={handleInputFilter}
        />
      </div>
      <UserTable></UserTable>
    </div>
  );
};

export default UserManage;
