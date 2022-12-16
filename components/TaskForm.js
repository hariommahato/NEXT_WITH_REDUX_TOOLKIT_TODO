import { useState } from "react";
import { useDispatch } from "react-redux";

import { createTask ,readTasks} from "../redux/features/taskSlice";


export default function TaskForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title,
    };

    await dispatch(createTask(formData)).then(() => {
      dispatch(readTasks());
      setTitle("");
    });
  };

  return (
    <>
      <h3>Create</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="New task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">OK</button>
      </form>
    </>
  );
}
