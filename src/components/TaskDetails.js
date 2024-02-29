import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const TaskDetails = () => {
    const {id} = useParams()
    const {data:tasks} = UseFetch('http://localhost:4000/tasks/' + id);
    const history = useHistory();

    const handleDelete = (e)=>{
        e.preventDefault()

        axios.delete('http://localhost:4000/tasks/' + id)
        .then(res=>{
            alert("task has been deleted");
            history.push("/");
        })
    }
    return ( 
        <div className="details">
           
            {tasks && (
                <article>
                    <h3>{tasks.title}</h3>
                    <p> Done by: {tasks.author}</p>
                    <div>{tasks.body}</div>
                    <button onClick={handleDelete} className="btn btn-danger mt-3" type="submit">Delete task</button>
                </article>
            )}
        </div>
     );
}
 
export default TaskDetails;