import * as core from '@actions/core';

export interface Inputs {
    registryList: string[];
    authList: string[];
}

export function getInputs(): Inputs {
    return {
        registryList: core.getMultilineInput('registry_list', {required: false}),
        authList: core.getMultilineInput('auth_list', {required: false})
    };
}

export const DEFAULT_REGISTRY = 'registry=https://registry.npmjs.org';
export const DEFAULT_NPMRC_FILE_NAME = '.npmrc';
