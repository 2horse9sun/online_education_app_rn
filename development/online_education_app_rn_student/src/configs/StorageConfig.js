// AWS S3 storage
const BASE_URL_S3 = "https://online-education-app.s3.eu-west-1.amazonaws.com/";

const BASE_URL_STORAGE = BASE_URL_S3;

// file directories
const FILE_DIR_IMAGE = "image/";
const FILE_DIR_COURSE_IMAGE = "course/image/";
const FILE_DIR_LESSON_IMAGE = "lesson/image/";
const FILE_DIR_LESSON_UPLOAD = "lesson/upload/";
const FILE_DIR_ASSIGNMENT_IMAGE = "assignment/image/";
const FILE_DIR_ASSIGNMENT_UPLOAD = "assignment/upload/";
const FILE_DIR_USER_AVATAR = "user/avatar/";

export default {
    storagePrefix: BASE_URL_STORAGE,
    imageStoragePrefix: `${BASE_URL_STORAGE}${FILE_DIR_IMAGE}`,
    courseImageStoragePrefix: `${BASE_URL_STORAGE}${FILE_DIR_COURSE_IMAGE}`,
    lessonImageStoragePrefix: `${BASE_URL_STORAGE}${FILE_DIR_LESSON_IMAGE}`,
    lessonUploadStoragePrefix: `${BASE_URL_STORAGE}${FILE_DIR_LESSON_UPLOAD}`,
    assignmentImageStoragePrefix: `${BASE_URL_STORAGE}${FILE_DIR_ASSIGNMENT_IMAGE}`,
    assignmentUploadStoragePrefix: `${BASE_URL_STORAGE}${FILE_DIR_ASSIGNMENT_UPLOAD}`,
    userAvatarStoragePrefix: `${BASE_URL_STORAGE}${FILE_DIR_USER_AVATAR}`,

    imageStorageDir: FILE_DIR_IMAGE,
    courseImageStorageDir: FILE_DIR_COURSE_IMAGE,
    lessonImageStorageDir: FILE_DIR_LESSON_IMAGE,
    lessonUploadStorageDir: FILE_DIR_LESSON_UPLOAD,
    assignmentImageStorageDir: FILE_DIR_ASSIGNMENT_IMAGE,
    assignmentUploadStorageDir: FILE_DIR_ASSIGNMENT_UPLOAD,
    userAvatarStorageDir: FILE_DIR_USER_AVATAR,

};