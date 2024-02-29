import { Link } from "react-router-dom";

const TaskList = ({tasks,name}) => {

    return (
        <div className="TaskList">
            <h2>{ name }</h2>
            {tasks.map((task) => (
                <div className="preview" key={task.id}>
                    <Link to={`/Task-details/${task.id}`}>
                        <h3>{task.name}</h3>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default TaskList;