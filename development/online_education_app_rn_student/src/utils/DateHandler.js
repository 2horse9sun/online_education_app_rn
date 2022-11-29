let dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
let timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };



export function formatDate(timestamp_from_db){
    return new Date(timestamp_from_db).toLocaleDateString("en-US", dateOptions);
}

export function formatTime(timestamp_from_db){
    return new Date(timestamp_from_db).toLocaleTimeString("en-US", timeOptions);
}