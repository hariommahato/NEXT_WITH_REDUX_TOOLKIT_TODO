import React from "react";
import TasksList from "../../components/TasksList";
import { readTasks } from "../../redux/features/taskSlice";
import { wrapper } from "../../redux/store";
const Task = () => {
  return (
    <div>
      <TasksList />
    </div>
  );
};

export default Task;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      await store.dispatch(readTasks({ req, res }));
    }
);
