import {get, post} from "../utils/Requester";
import APIConfig from "../configs/APIConfig";
import StorageConfig from "../configs/StorageConfig";

const courseAPIPrefix = APIConfig.courseAPIPrefix;
const courseImageStoragePrefix = StorageConfig.courseImageStoragePrefix;


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
        course.thumbnailUrl = buildCourseImageStorageUrl(course.thumbnail);
    }
    return res;
}