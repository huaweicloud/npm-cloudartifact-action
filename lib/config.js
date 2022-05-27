"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeNpmConfig = exports.getNpmrcPath = exports.generateNpmConfig = void 0;
const core = __importStar(require("@actions/core"));
const fs = __importStar(require("fs"));
const os = __importStar(require("os"));
const path = __importStar(require("path"));
const context = __importStar(require("./context"));
/**
 * 更加用户输入生成npmrc配置
 * @param inputs
 */
function generateNpmConfig(inputs) {
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
exports.generateNpmConfig = generateNpmConfig;
/**
 * 返回用户npmrc配置路径
 * @returns
 */
function getNpmrcPath() {
    return path.join(os.homedir(), context.DEFAULT_NPMRC_FILE_NAME);
}
exports.getNpmrcPath = getNpmrcPath;
/**
 * npm配置写入~/.npmrc
 * @param npmrcPath
 * @param npmrcContent
 */
function writeNpmConfig(npmrcPath, npmrcContent) {
    fs.writeFileSync(npmrcPath, npmrcContent);
}
exports.writeNpmConfig = writeNpmConfig;
