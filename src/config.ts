import * as core from '@actions/core';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import * as context from './context';

/**
 * 更加用户输入生成npmrc配置
 * @param inputs
 */
export function generateNpmConfig(inputs: context.Inputs) {
    let npmrcContent = '';
    for (const entry of inputs.registryList) {
        npmrcContent = npmrcContent + entry + '\n';
    }
    for (const entry of inputs.authList) {
        npmrcContent = npmrcContent + entry + '\n';
    }

    if (npmrcContent == '') {
        core.info(`You did not enter any input, we will add the default npm registry.`);
        npmrcContent = context.DEFAULT_REGISTRY;
    }

    const npmrcPath = getNpmrcPath();
    core.info(`the .npmrc file path is ${npmrcPath}`);
    writeNpmConfig(npmrcPath, npmrcContent);
}

/**
 * 返回用户npmrc配置路径
 * @returns
 */
export function getNpmrcPath() {
    return path.join(os.homedir(), context.DEFAULT_NPMRC_FILE_NAME);
}

/**
 * npm配置写入~/.npmrc
 * @param npmrcPath
 * @param npmrcContent
 */
export function writeNpmConfig(npmrcPath: string, npmrcContent: string) {
    fs.writeFileSync(npmrcPath, npmrcContent);
}
