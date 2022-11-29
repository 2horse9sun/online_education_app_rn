import RNFS from "react-native-fs";
import {get, post} from "./Requester";

const MAX_UPLOAD_FILE_SIZE = 10 * 1024 * 1024;


function getGetObjectSignedUrl(dir, hashedFileName){
    return get('/s3/getGetObjectSignedUrl')({
        dir,
        hashedFileName
    });
}

function getPutObjectSignedUrl(dir, hashedFileName, fileType){
    return get('/s3/getPutObjectSignedUrl')({
        dir,
        hashedFileName,
        fileType
    });
}

export function getFileFromS3(dir, hashedFileName){
    return new Promise(async (resolve, reject) => {
        let res = await getGetObjectSignedUrl(dir, hashedFileName);
        if(res.errno !== 0){
            reject(res.error);
        }
        resolve({
            fileUrl: res.data.signedUrl,
            errno: 0
        });
    });
}


export function uploadFileToS3(dir, fileName, fileUrl, fileType){
    return new Promise(async (resolve, reject) => {
        if(file.size > MAX_UPLOAD_FILE_SIZE){
            reject("File Too Large");
        }
        const fileHash = await RNFS.hash(fileUrl, 'sha256');
        const hashedFileName = `${fileHash}.${fileName.split('.').pop()}`;
        let res = await getPutObjectSignedUrl(dir, hashedFileName, fileType);
        if(res.errno !== 0){
            reject(res.error);
        }
        const signedUrl = res.data.signedUrl;
        const fileContent = await fetch(fileUrl);
        const fileBlob = await fileContent.blob();
        res = await fetch(signedUrl, {
            method: "PUT",
            body: fileBlob,
            headers: {
                "Content-type": file.type
            }
        });
        console.log(res);
        if(res.ok !== true){
            reject(res.error);
        }
        resolve({
            hashedFileName,
            errno: 0
        });
    });
    
}