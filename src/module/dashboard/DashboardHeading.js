import React from "react";

const DashboardHeading = ({ children, title = "", desc = "" }) => {
  return (
    <div className="mb-10 flex flex-col gap-4">
      <h1 className="dashboard-heading">{title}</h1>
      <p className="dashboard-short-desc">{desc}</p>
      {children}
    </div>
  );
};

export default DashboardHeading;
