import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

function TaskList({ data }) {

  return (
    <div
      id="tasklist"
      className="h-[55%] py-5 w-full mt-10 flex justify-start items-center gap-5 flex-nowrap overflow-x-auto"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />; // fixed here
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
      })}

      {/* <AcceptTask/>
       <NewTask/>
       <CompleteTask/>
       <FailedTask/> */}
    </div>
  );
}

export default TaskList;
