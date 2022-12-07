import {get, post} from "../utils/Requester";
import APIConfig from "../configs/APIConfig";
import StorageConfig from "../configs/StorageConfig";
import {uploadFileToS3, getFileFromS3} from '../utils/FileHandler';

const assignmentAPIPrefix = APIConfig.assignmentAPIPrefix;
const assignmentUploadStoragePrefix = StorageConfig.assignmentUploadStoragePrefix;
const assignmentUploadStorageDir = StorageConfig.assignmentUploadStorageDir;


// APIs related to Assignment


export async function getAllAssignmentListByStudentIdAndCourseId(student_id, course_id) {
    let res = await get(assignmentAPIPrefix + '/getAllAssignmentListByStudentIdAndCourseId')({
        student_id,
        course_id
    });
    return res;
}

export async function getAssignmentDetailByStudentIdAndAssignmentId(student_id, assignment_id) {
    let res = await get(assignmentAPIPrefix + '/getAssignmentDetailByStudentIdAndAssignmentId')({
        student_id,
        assignment_id
    });
    if(res.errno !== 0){
        return res;
    }
    let assignment = res.data;
    let filesRes = await get(assignmentAPIPrefix + '/getAssignmentFileByAssignmentId')({
        assignment_id: assignment.id
    });
    if(filesRes.errno !== 0){
        return res;
    }
    assignment.files = filesRes.data;
    // for(file of assignment.files){
    //     let fileUrlRes = await getFileFromS3(assignmentUploadStorageDir, file.hashed_file_name);
    //     if(fileUrlRes.errno !== 0){
    //         return res;
    //     }
    //     file.fileUrl = fileUrlRes.fileUrl
    // }
    return res;
}

export async function getAllRecentAssignmentListByStudentId(student_id) {
    let res = await get(assignmentAPIPrefix + '/getAllRecentAssignmentListByStudentId')({
        student_id
    });
    if(res.errno !== 0){
        return res;
    }
    return res;
}

export async function getAllAssignmentListByStudentId(student_id) {
    let res = await get(assignmentAPIPrefix + '/getAllAssignmentListByStudentId')({
        student_id
    });
    if(res.errno !== 0){
        return res;
    }
    return res;
}


export async function addAssignment(title, content, course_id, owner_user_id, due_time, release_time, assignmentFiles) {
    let res = await post(assignmentAPIPrefix + '/addAssignment')({
        title, 
        content, 
        course_id, 
        owner_user_id, 
        due_time, 
        release_time
    })();
    if(res.errno !== 0){
        return res;
    }
    const assignment_id = res.data.id;

    if(assignmentFiles.length > 0){
        for(assignmentFile of assignmentFiles){
            res = await uploadFileToS3(assignmentUploadStorageDir, assignmentFile.name, assignmentFile.fileCopyUri, assignmentFile.type, assignmentFile.size);
            if(res.errno !== 0){
                return res;
            }
            const hashedFileName = res.hashedFileName;
            res = await post(assignmentAPIPrefix + '/uploadAssignmentFile')({
                assignment_id, 
                file_name: assignmentFile.name, 
                hashed_file_name: hashedFileName, 
                file_type: assignmentFile.type, 
                file_size: assignmentFile.size, 
                owner_user_id: 0
            })();
            if(res.errno !== 0){
                return res;
            }
        }
        
    }
    return res;
}