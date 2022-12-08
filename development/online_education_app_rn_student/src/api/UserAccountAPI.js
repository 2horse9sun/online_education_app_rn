import {get, post} from "../utils/Requester";
import APIConfig from "../configs/APIConfig";
import StorageConfig from "../configs/StorageConfig";
import {uploadFileToS3} from '../utils/FileHandler';

const userAccountAPIPrefix = APIConfig.userAccountAPIPrefix;
const userAvatarStoragePrefix = StorageConfig.userAvatarStoragePrefix;
const userAvatarStorageDir = StorageConfig.userAvatarStorageDir;


// APIs related to User Account

function buildUserAvatarStorageUrl(avatar){
    return userAvatarStoragePrefix + avatar;
}

export async function getUserInfoByUserId(user_id) {
    let res = await get(userAccountAPIPrefix + '/getUserInfoByUserId')({
        user_id
    });
    if(res.errno !== 0){
        return res;
    }
    res.data.avatar = buildUserAvatarStorageUrl(res.data.avatar);
    return res;
}
