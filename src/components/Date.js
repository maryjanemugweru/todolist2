const GetDate = () => {
    const currentDate = new Date();
    const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = dayName[currentDate.getDay()];
    const date = currentDate.getDate();
    const month = monthName[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    return (
        <div className="date">
            <h1>{day}</h1>
            <h4>{month} {date}, {year}</h4>
        </div>
    );
}

export default GetDate;