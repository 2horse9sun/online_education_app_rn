const PROTOCOL_HTTP = "http://";
const PROTOCOL_HTTPS = "https://";
const HOSTNAME_LOCALHOST = "10.0.2.2"; // why not localhost: solve Android Network Fetch Fail without https
const PORT = "8000";
const API_PREFIX = "/api";
const BASE_URL_LOCALHOST = `${PROTOCOL_HTTP}${HOSTNAME_LOCALHOST}:${PORT}${API_PREFIX}`;

// AWS APP Runner
const APP_RUNNER_DOMAIN = "https://ag8mpmgcxn.eu-west-1.awsapprunner.com"
const BASE_URL_APP_RUNNER = `${APP_RUNNER_DOMAIN}${API_PREFIX}`;

// AWS EC2
const EC2_HOSTNAME = "ec2-34-245-23-103.eu-west-1.compute.amazonaws.com";
const BASE_URL_EC2 = `${PROTOCOL_HTTP}${EC2_HOSTNAME}:${PORT}${API_PREFIX}`;


//===================================================================
// const BASE_URL = BASE_URL_LOCALHOST;        // if backend run on localhost
// const BASE_URL = BASE_URL_APP_RUNNER;    // if backend run on AWS APP Runner
const BASE_URL = BASE_URL_EC2;    // if backend run on AWS APP Runner
//===================================================================


// API routes
const API_ROUTE_COURSE = "/course";
const API_ROUTE_LESSON = "/lesson";
const API_ROUTE_ASSIGNMENT = "/assignment";
const API_ROUTE_USER = "/user";
const API_ROUTE_STUDENT = "/student";



export default {
    APIPrefix: BASE_URL,
    courseAPIPrefix: `${BASE_URL}${API_ROUTE_COURSE}`, 
    lessonAPIPrefix: `${BASE_URL}${API_ROUTE_LESSON}`, 
    assignmentAPIPrefix: `${BASE_URL}${API_ROUTE_ASSIGNMENT}`, 
    userAPIPrefix: `${BASE_URL}${API_ROUTE_USER}`, 
    studentAPIPrefix: `${BASE_URL}${API_ROUTE_STUDENT}`

};