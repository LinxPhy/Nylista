


function timeAgo(timestamp : any) {
    const currentDate = new Date();
    const date = new Date(timestamp);

    //const elapsedMilliseconds = currentDate - date;
    const elapsedMilliseconds = currentDate.getTime() - date.getTime();
    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
    const elapsedMinutes = Math.floor(elapsedSeconds / 60);
    const elapsedHours = Math.floor(elapsedMinutes / 60);
    const elapsedDays = Math.floor(elapsedHours / 24);

    if (elapsedDays > 1) {
        return `${elapsedDays} d ago`;
    } else if (elapsedDays === 1) {
        return `1 d ago`;
    } else if (elapsedHours > 1) {
        return `${elapsedHours} h ago`;
    } else if (elapsedHours === 1) {
        return `1 h ago`;
    } else if (elapsedMinutes > 1) {
        return `${elapsedMinutes} m ago`;
    } else if (elapsedMinutes === 1) {
        return `1 m ago`;
    } else {
        return `just now`;
    }
}

export default timeAgo;
