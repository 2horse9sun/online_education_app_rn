import {get, post} from "../utils/Requester";
import APIConfig from "../configs/APIConfig";
import StorageConfig from "../configs/StorageConfig";
import {uploadFileToS3} from '../utils/FileHandler';

const lessonAPIPrefix = APIConfig.lessonAPIPrefix;
const lessonUploadStoragePrefix = StorageConfig.lessonUploadStoragePrefix;
const lessonUploadStorageDir = StorageConfig.lessonUploadStorageDir;


// APIs related to Lesson

export async function getAllLessonListByCourseId(course_id) {
    let res = await get(lessonAPIPrefix + '/getAllLessonListByCourseId')({
        course_id
    });
    return res;
}

export async function getLessonDetailByLessonId(lesson_id) {
    let res = await get(lessonAPIPrefix + '/getLessonDetailByLessonId')({
        lesson_id
    });
    if(res.errno !== 0){
        return res;
    }
    let lesson = res.data;
    let filesRes = await get(lessonAPIPrefix + '/getLessonFileByLessonId')({
        lesson_id: lesson.id
    });
    if(filesRes.errno !== 0){
        return res;
    }
    lesson.files = filesRes.data;
    // for(file of lesson.files){
    //     let fileUrlRes = await getFileFromS3(lessonUploadStorageDir, file.hashed_file_name);
    //     if(fileUrlRes.errno !== 0){
    //         return res;
    //     }
    //     file.fileUrl = fileUrlRes.fileUrl
    // }
    return res;
}

export async function addLesson(name, content, course_id, teacher_id, release_time, lessonFiles) {
    let res = await post(lessonAPIPrefix + '/addLesson')({
        name, 
        content, 
        course_id, 
        teacher_id, 
        release_time, 
        lessonFiles
    })();
    if(res.errno !== 0){
        return res;
    }
    const lesson_id = res.data.id;

    if(lessonFiles.length > 0){
        for(lessonFile of lessonFiles){
            res = await uploadFileToS3(lessonUploadStorageDir, lessonFile.name, lessonFile.fileCopyUri, lessonFile.type, lessonFile.size);
            if(res.errno !== 0){
                return res;
            }
            const hashedFileName = res.hashedFileName;
            res = await post(lessonAPIPrefix + '/uploadLessonFile')({
                lesson_id, 
                file_name: lessonFile.name, 
                hashed_file_name: hashedFileName, 
                file_type: lessonFile.type, 
                file_size: lessonFile.size, 
                owner_user_id: 0
            })();
            if(res.errno !== 0){
                return res;
            }
        }
        
    }
    return res;
}