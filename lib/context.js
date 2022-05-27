"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_NPMRC_FILE_NAME = exports.DEFAULT_REGISTRY = exports.getInputs = void 0;
function getInputs() {
    // return {
    //     registryList: core.getMultilineInput('registry_list', {required: false}),
    //     authList: core.getMultilineInput('auth_list', {required: false})
    // };
    return {
        registryList: ['registry=https://mirrors.huaweicloud.com/repository/npm/',
            '@test:registry=https://devrepo.devcloud.cn-north-4.huaweicloud.com/artgalaxy/api/npm/cn-north-4_dfbdbf2e511e40fa88ba1d653358d65c_npm_0/',
            '@huawei:registry=https://devrepo.devcloud.cn-north-4.huaweicloud.com/artgalaxy/api/npm/cn-north-4_dfbdbf2e511e40fa88ba1d653358d65c_npm_0/',
            '@org:registry=https://devrepo.devcloud.cn-north-4.huaweicloud.com/artgalaxy/api/npm/cn-north-4_dfbdbf2e511e40fa88ba1d653358d65c_npm_0/'],
        authList: ['//devrepo.devcloud.cn-north-4.huaweicloud.com/artgalaxy/api/npm/cn-north-4_dfbdbf2e511e40fa88ba1d653358d65c_npm_0/:_auth=Y24tbm9ydGgtNF9kZmJkYmYyZTUxMWU0MGZhODhiYTFkNjUzMzU4ZDY1Y182NmFmNWY4ZDRiODQ0MTY3ODU4MTc2NDlkNjY3YTM5NjpqPTZELTFTcHdd']
    };
}
exports.getInputs = getInputs;
exports.DEFAULT_REGISTRY = 'registry=https://registry.npmjs.org';
exports.DEFAULT_NPMRC_FILE_NAME = '.npmrc';
