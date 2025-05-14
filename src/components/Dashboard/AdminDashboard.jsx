import React from "react";
import Header from "../Other/Header";
import CreateTask from "../Other/CreateTask";
import AllTask from "../Other/AllTask";

function AdminDashboard(props) {
  return (
    <div className="min-h-screen w-full p-10 bg-black">
      <Header changeUser={props.changeUser} />
      <CreateTask/>
      <AllTask/>
    </div>
  );
}

export default AdminDashboard;
