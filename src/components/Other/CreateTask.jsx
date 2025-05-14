import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
function CreateTask() {
  const [userData, setUserData] = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assign, setAssign] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [newTask, setNewTask] = useState({});
  const formHandler = (e) => {
    const data = userData;
    console.log(data)
    e.preventDefault();
    setTitle("");
    setDate("");
    setAssign("");
    setCategory("");
    setDescription("");
    setNewTask({
      title,
      date,
      assign,
      category,
      description,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });
   
    userData.forEach((elem) => {
      if (assign == elem.firstName) {
        elem.tasks.push(newTask);
        console.log(elem);
      }
    });
    setUserData(data)

  };
  return (
    <div className="mt-2 bg-black p-8 rounded shadow-md">
      <form
        onSubmit={(e) => formHandler(e)}
        className="flex flex-col lg:flex-row gap-8 w-full"
      >
        {/* Left Column */}
        <div className="lg:w-1/2 w-full flex flex-col gap-4">
          <div>
            <label className="block font-semibold mb-1 text-white">
              Task Title
            </label>
            <input
              type="text"
              placeholder="Make a UI Design"
              className="w-full border border-gray-500 rounded p-2 bg-transparent text-white placeholder-gray-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-white">Date</label>
            <input
              type="date"
              className="w-full border border-gray-500 rounded p-2 bg-transparent text-white"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-white">
              Assign to
            </label>
            <input
              type="text"
              placeholder="Employee name"
              className="w-full border border-gray-500 rounded p-2 bg-transparent text-white placeholder-gray-400"
              value={assign}
              onChange={(e) => setAssign(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-white">
              Category
            </label>
            <input
              type="text"
              placeholder="Design, Dev, etc"
              className="w-full border border-gray-500 rounded p-2 bg-transparent text-white placeholder-gray-400"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 w-full flex flex-col gap-4">
          <div>
            <label className="block font-semibold mb-1 text-white">
              Description
            </label>
            <textarea
              placeholder="Write task details..."
              rows="8"
              className="w-full border border-gray-500 rounded p-2 resize-none bg-transparent text-white placeholder-gray-400"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>

      {/* Submit Button */}
    </div>
  );
}

export default CreateTask;
