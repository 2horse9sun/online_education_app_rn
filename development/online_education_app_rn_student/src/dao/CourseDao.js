import {get, post} from "../utils/Requester";
import APIConfig from "../configs/APIConfig";
import StorageConfig from "../configs/StorageConfig";
import {uploadFileToS3} from '../utils/FileHandler';

const courseAPIPrefix = APIConfig.courseAPIPrefix;
const courseImageStoragePrefix = StorageConfig.courseImageStoragePrefix;
const courseImageStorageDir = StorageConfig.courseImageStorageDir;


// APIs related to Course


function buildCourseImageStorageUrl(name){
    return courseImageStoragePrefix + name;
}

export async function getCourseListByStudentId(student_id, page_size, page_number) {
    let res = await get(courseAPIPrefix + '/getCourseListByStudentId')({
        student_id,
        page_size,
        page_number
    });
    if(res.errno !== 0){
        return res;
    }
    for(course of res.data){
        let thumbnailRes = await get(courseAPIPrefix + '/getCourseThumbnailByCourseId')({
            course_id: course.id
        });
        if(thumbnailRes.errno !== 0){
            return res;
        }
        course.thumbnailUrl = buildCourseImageStorageUrl(thumbnailRes.data.hashed_file_name);
    }
    return res;
}

export async function getAllCourseListByStudentId(student_id) {
    let res = await get(courseAPIPrefix + '/getAllCourseListByStudentId')({
        student_id
    });
    if(res.errno !== 0){
        return res;
    }
    for(course of res.data){
        let thumbnailRes = await get(courseAPIPrefix + '/getCourseThumbnailByCourseId')({
            course_id: course.id
        });
        if(thumbnailRes.errno !== 0){
            return res;
        }
        course.thumbnailUrl = buildCourseImageStorageUrl(thumbnailRes.data.hashed_file_name);
    }
    return res;
}

export async function getCourseDetailByCourseId(course_id) {
    let res = await get(courseAPIPrefix + '/getCourseDetailByCourseId')({
        course_id
    });
    if(res.errno !== 0){
        return res;
    }
    let thumbnailRes = await get(courseAPIPrefix + '/getCourseThumbnailByCourseId')({
        course_id
    });
    if(thumbnailRes.errno !== 0){
        return res;
    }
    res.data.thumbnailUrl = buildCourseImageStorageUrl(thumbnailRes.data.hashed_file_name);
    return res;
}

export async function addCourse(name, content, start_date, end_date, thumbnailFile) {
    let res = await uploadFileToS3(courseImageStorageDir, thumbnailFile.name, thumbnailFile.fileCopyUri, thumbnailFile.type, thumbnailFile.size);
    if(res.errno !== 0){
        return res;
    }
    const hashedFileName = res.hashedFileName;
    res = await post(courseAPIPrefix + '/addCourse')({
        name,
        content,
        start_date,
        end_date
    })();
    if(res.errno !== 0){
        return res;
    }

    const course_id = res.data.id;
    res = await post(courseAPIPrefix + '/uploadCourseFile')({
        course_id, 
        file_name: `thumbnail.${thumbnailFile.name.split('.').pop()}`, 
        hashed_file_name: hashedFileName, 
        file_type: thumbnailFile.type, 
        file_size: thumbnailFile.size, 
        owner_user_id: 0
    })();

    return res;
}