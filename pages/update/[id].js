import { readTask } from "../../redux/features/taskSlice";
import { wrapper } from "../../redux/store";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { readTasks } from "../../redux/features/taskSlice";
import { updateTask } from "../../redux/features/taskSlice";
import { useEffect, useState } from "react";

export default function UpdateId() {
  const [title, setTitle] = useState("");

  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();
  const { task, loading, success, message } = useSelector(
    (state) => state.task
  );
  useEffect(() => {
    if (task && task._id !== id) {
      dispatch(readTasks());
    } else {
      setTitle(task.title);
    }
  }, [id, task, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title,
    };

    dispatch(updateTask({ id, data })).then((result) => {
      if (!result.error) {
        router.push("/");
      } else {
        console.log(result);
      }
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">OK</button>
      </form>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params, req }) => {
      const id = params.id;
      await store.dispatch(readTask({ id, req }));
    }
);
