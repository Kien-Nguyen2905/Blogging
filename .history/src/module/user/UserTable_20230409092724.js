import React from "react";
import { Table } from "components/table";
const UserTable = () => {
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
      </Table>
    </div>
  );
};

export default UserTable;
