import * as context from './context';

/**
 * 检查每个inputs 属性value是否合法
 * @param inputs
 * @returns
 */
export function checkInputs(inputs: context.Inputs): boolean {
    return checkRegistryList(inputs.registryList) && checkAuthList(inputs.authList);
}

/**
 * 检查registryList镜像列表参数是否合法
 * @param string[]
 * @returns boolean
 */
export function checkRegistryList(registryList: string[]): boolean {
    for (let i = 0; i < registryList.length; i++) {
        const registryReg = new RegExp(/^registry=.+/);
        const scopeRegistryReg = new RegExp(/^@.+:registry=.+/);
        if (!registryReg.test(registryList[i]) && !scopeRegistryReg.test(registryList[i])) {
            return false;
        }
    }
    return true;
}

/**
 * 检查authList镜像列表参数是否合法
 * @param string[]
 * @returns boolean
 */
 export function checkAuthList(authList: string[]): boolean {
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

/**
 * 判断字符是否是base64编码
 * @param base64String 
 * @returns boolean
 */
export function isBase64(base64String: string) {
  if (base64String ==='' || base64String.trim() ===''){ return false; }
  try {
      const preString =  Buffer.from(base64String, 'base64').toString();
      return Buffer.from(preString).toString('base64') == base64String;
  } catch (err) {
      return false;
  }
}
