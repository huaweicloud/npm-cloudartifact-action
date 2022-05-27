import * as main from '../src/main';
import * as utils from '../src/utils';
import * as context from '../src/context';
import * as config from '../src/config';

jest.mock('../src/context');
jest.mock('../src/config');

test('mock checkInputs return true', async () => {
    jest.spyOn(utils, 'checkInputs').mockReturnValue(true);
    await main.run();

    expect(context.getInputs).toHaveBeenCalled();
    expect(context.getInputs).toHaveBeenCalledTimes(1);

    expect(utils.checkInputs).toHaveBeenCalled();
    expect(utils.checkInputs).toHaveBeenCalledTimes(1);

    expect(config.generateNpmConfig).toHaveBeenCalled();
    expect(config.generateNpmConfig).toHaveBeenCalledTimes(1);
});

test('mock checkInputs return false', async () => {
    jest.spyOn(utils, 'checkInputs').mockReturnValue(false);
    await main.run();

    expect(context.getInputs).toHaveBeenCalled();
    expect(context.getInputs).toHaveBeenCalledTimes(1);

    expect(utils.checkInputs).toHaveBeenCalled();
    expect(utils.checkInputs).toHaveBeenCalledTimes(1);

    expect(config.generateNpmConfig).not.toHaveBeenCalled();
});
