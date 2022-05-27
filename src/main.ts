import * as core from '@actions/core';

import * as utils from './utils';
import * as context from './context';
import * as config from './config';

export async function run() {
    core.info('Generate .npmrc for npm Builds');
    const inputs = context.getInputs();

    // 检查参数是否合法
    if (!utils.checkInputs(inputs)) {
        core.setFailed('parameter is not correct.');
        return;
    }

    // 生成.npmrc配置内容
    config.generateNpmConfig(inputs);
}

run().catch(core.setFailed);
