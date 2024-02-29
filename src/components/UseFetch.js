import { useState, useEffect } from "react";
import axios from "axios";

const UseFetch = (url) => {
    const [data, setTasks] = useState(null);

    useEffect (() => {
        axios.get(url)
        .then(res => (setTasks(res.data)))

        .catch(err => console.log(err))
    }, [url]);

    return {data};
}

export default UseFetch;