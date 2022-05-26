import * as context from './context';

/**
 * 检查每个inputs 属性value是否合法
 * @param inputs
 * @returns
 */
export function checkInputs(inputs: context.Inputs): boolean {
  
  return true;
}

/**
 * 检查registryList镜像列表参数是否合法
 * @param string[]
 * @returns boolean
 */
 export function checkRegistryList(registryList: string[]): boolean {
    for(var i = 0; i<registryList.length; i++) { 
      console.log(registryList[i])
        const registryReg = new RegExp(/^registry=.+/);
        const scopeRegistryReg = new RegExp(/^@.+:registry=.+/);
        if (!registryReg.test(registryList[i]) && !scopeRegistryReg.test(registryList[i])) {
            return false;
        }
    } 
    return true;
 }
