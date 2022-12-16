import { useSelector } from 'react-redux';

import Task from './Task';
import TaskForm from './TaskForm';


export default function TasksList() {
    const { tasks } = useSelector((state) => state.task);


    return (
        <>
            <TaskForm />
            <div>
                <h3>Read</h3>
                {
                    tasks && tasks.length !== 0 ? (
                        tasks.map((task) => (
                            <Task
                                key={task._id}
                                task={task}
                            />
                        ))
                    ) : (
                        <p>No task!</p>
                    )
                }
            </div>
        </>
    );
}
