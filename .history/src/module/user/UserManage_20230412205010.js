import React from "react";
import DashboardHeading from "module/dashboard/DashboardHeading";
import { Button } from "components/button";
import UserTable from "./UserTable";
const UserManage = () => {
  return (
    <div>
      <DashboardHeading title="Users" desc="Manage your user">
        <Button kind="ghost" height="60px" to="/manage/add-category">
          Create new user
        </Button>
      </DashboardHeading>
      <UserTable></UserTable>
    </div>
  );
};

export default UserManage;
