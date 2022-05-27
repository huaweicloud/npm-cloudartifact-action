import * as config from '../src/config';
import * as fs from 'fs';
import {v4 as uuidv4} from 'uuid';

test('get npmrc Path', async () => {
    expect(config.getNpmrcPath()).toContain('.npmrc');
});

test('test write npm config', async () => {
    const content = 'hello';
    const path = 'test/.test-' + uuidv4();
    config.writeNpmConfig(path, content);
    expect(fs.readFileSync(path, 'utf-8')).toBe(content);
    fs.unlinkSync(path);
});

describe('test generate npm config', () => {
    const testCase = [
        {
            description: '不输入',
            inputs: {registryList: [], authList: []},
            result: 'registry=https://registry.npmjs.org'
        },
        {
            description: '输入多个registry',
            inputs: {
                registryList: ['registry=https://registry.npmjs.org', 'registry=https://xxx.xxxx'],
                authList: []
            },
            result: 'registry=https://registry.npmjs.org\nregistry=https://xxx.xxxx\n'
        },
        {
            description: '输入@scope registry和对应auth',
            inputs: {
                registryList: ['@test:registry=https://xxx.xxxx'],
                authList: ['//xxx.xxxx:_auth=aXNCYXNlNjQ=']
            },
            result: '@test:registry=https://xxx.xxxx\n//xxx.xxxx:_auth=aXNCYXNlNjQ=\n'
        },
        {
            description: '输入registry和对应auth',
            inputs: {registryList: ['registry=https://xxx.xxxx'], authList: ['_auth=aXNCYXNlNjQ=']},
            result: 'registry=https://xxx.xxxx\n_auth=aXNCYXNlNjQ=\n'
        },
        {
            description: '输入多个registry和auth',
            inputs: {
                registryList: ['registry=https://xxx1.xxxx1', 'registry=https://xxx2.xxxx2'],
                authList: ['_auth=aXNCYXNlNjQ=', '_auth=aXNCYXNlNjQ=']
            },
            result: 'registry=https://xxx1.xxxx1\nregistry=https://xxx2.xxxx2\n_auth=aXNCYXNlNjQ=\n_auth=aXNCYXNlNjQ=\n'
        },
        {
            description: '输入多个@scope的registry和auth',
            inputs: {
                registryList: [
                    '@test1:registry=https://xxx1.xxxx1',
                    '@test2:registry=https://xxx2.xxxx2'
                ],
                authList: ['//xxx1.xxxx1:_auth=aXNCYXNlNjQ=', '//xxx2.xxxx2:_auth=aXNCYXNlNjQ=']
            },
            result: '@test1:registry=https://xxx1.xxxx1\n@test2:registry=https://xxx2.xxxx2\n//xxx1.xxxx1:_auth=aXNCYXNlNjQ=\n//xxx2.xxxx2:_auth=aXNCYXNlNjQ=\n'
        },
        {
            description: '输入包含和不包含@scope的registry和auth',
            inputs: {
                registryList: ['registry=https://xxx1.xxxx1', '@test2:registry=https://xxx2.xxxx2'],
                authList: ['_auth=aXNCYXNlNjQ=', '//xxx2.xxxx2:_auth=aXNCYXNlNjQ=']
            },
            result: 'registry=https://xxx1.xxxx1\n@test2:registry=https://xxx2.xxxx2\n_auth=aXNCYXNlNjQ=\n//xxx2.xxxx2:_auth=aXNCYXNlNjQ=\n'
        }
    ];
    const configPath = config.getNpmrcPath();
    const tmpPath = './test/.npmrc-' + uuidv4();
    beforeAll(() => {
        if (fs.existsSync(configPath)) {
            fs.copyFileSync(configPath, tmpPath);
        }
    });
    afterAll(() => {
        if (fs.existsSync(tmpPath)) {
            fs.copyFileSync(tmpPath, configPath);
            fs.unlinkSync(tmpPath);
        }
    });

    testCase.forEach(item => {
        const {description, inputs, result} = item;
        test(`${description}`, async () => {
            config.generateNpmConfig(inputs);
            expect(fs.readFileSync(configPath, 'utf-8')).toBe(result);
        });
    });
});
