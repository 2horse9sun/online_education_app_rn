let dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
let timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
let yearOptions = { year: 'numeric'};



export function formatDate(timestamp_from_db){
    return new Date(timestamp_from_db).toLocaleDateString("en-US", dateOptions);
}

export function formatTime(timestamp_from_db){
    return new Date(timestamp_from_db).toLocaleTimeString("en-US", timeOptions);
}

export function formatYear(timestamp_from_db){
    return new Date(timestamp_from_db).toLocaleDateString("en-US", yearOptions);
}