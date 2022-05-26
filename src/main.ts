import * as core from '@actions/core';

import * as utils from './utils'
import * as context from './context'


export async function run() {
  core.info('Generate .npmrc for npm Builds');
  utils.checkRegistryList(context.getInputs().registryList);
  
}

run().catch(core.setFailed);
