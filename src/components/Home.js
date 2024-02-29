import TaskList from "./TaskList";
import UseFetch from "./UseFetch";

const MyTask = () => {
    const {data} = UseFetch("http://localhost:4000/tasks");

    return (
        <div className="home">
            {data && <TaskList tasks= {data} title="All Tasks"/>}
        </div>

    );
}

export default MyTask;