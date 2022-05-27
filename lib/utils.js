"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBase64 = exports.checkAuthList = exports.checkRegistryList = exports.checkInputs = void 0;
/**
 * 检查每个inputs 属性value是否合法
 * @param inputs
 * @returns
 */
function checkInputs(inputs) {
    return checkRegistryList(inputs.registryList) && checkAuthList(inputs.authList);
}
exports.checkInputs = checkInputs;
/**
 * 检查registryList参数是否合法
 * @param string[]
 * @returns boolean
 */
function checkRegistryList(registryList) {
    for (let i = 0; i < registryList.length; i++) {
        const registryReg = new RegExp(/^registry=.+/);
        const scopeRegistryReg = new RegExp(/^@.+:registry=.+/);
        if (!registryReg.test(registryList[i]) && !scopeRegistryReg.test(registryList[i])) {
            return false;
        }
    }
    return true;
}
exports.checkRegistryList = checkRegistryList;
/**
 * 检查authList参数是否合法
 * @param string[]
 * @returns boolean
 */
function checkAuthList(authList) {
    for (let i = 0; i < authList.length; i++) {
        const authReg = new RegExp(/^_auth=.+/);
        const scopeAuthReg = new RegExp(/^\/\/.+:_auth=.+/);
        if (!authReg.test(authList[i]) && !scopeAuthReg.test(authList[i])) {
            return false;
        }
        const splitArray = authList[i].split('_auth=');
        if (!isBase64(splitArray[1])) {
            return false;
        }
    }
    return true;
}
exports.checkAuthList = checkAuthList;
/**
 * 判断字符是否是base64编码
 * @param base64String
 * @returns boolean
 */
function isBase64(base64String) {
    if (base64String === '' || base64String.trim() === '') {
        return false;
    }
    try {
        const preString = Buffer.from(base64String, 'base64').toString();
        return Buffer.from(preString).toString('base64') == base64String;
    }
    catch (err) {
        return false;
    }
}
exports.isBase64 = isBase64;
