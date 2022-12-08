import {get, post} from "../utils/Requester";
import APIConfig from "../configs/APIConfig";
import StorageConfig from "../configs/StorageConfig";
import {uploadFileToS3} from '../utils/FileHandler';

const studentAPIPrefix = APIConfig.studentAPIPrefix;


// APIs related to Student

export async function getStudentInfoByStudentId(student_id) {
    let res = await get(studentAPIPrefix + '/getStudentInfoByStudentId')({
        student_id
    });
    return res;
}
