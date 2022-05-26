"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRegistryList = exports.checkInputs = void 0;
/**
 * 检查每个inputs 属性value是否合法
 * @param inputs
 * @returns
 */
function checkInputs(inputs) {
    return true;
}
exports.checkInputs = checkInputs;
/**
 * 检查registryList镜像列表参数是否合法
 * @param string[]
 * @returns boolean
 */
function checkRegistryList(registryList) {
    for (var i = 0; i < registryList.length; i++) {
        console.log(registryList[i]);
    }
    console.log("registryList[i]");
    return true;
}
exports.checkRegistryList = checkRegistryList;
