import * as utils from '../src/utils';

// describe('test whether the registry list is vaild', () => {
//     const testCase = [
//         {arr: [], result: true},
//         {arr: ['registry=hh'], result: true},
//         {arr: ['registry='], result: false},
//         {arr: ['@test:registry='], result: false},
//         {arr: ['@test:registry=dsads'], result: true},
//         {arr: ['@:registry=dsads'], result: false},
//         {arr: ['@test:=dsads'], result: false},
//         {arr: ['sdsd'], result: false}
//     ];
//     testCase.forEach(item => {
//         const {arr, result} = item;
//         test(`registryList输入为(${arr}), json array判断结果：${result}`, async () => {
//             expect(utils.checkRegistryList(arr)).toBe(result);
//         });
//     });
// });

describe('test whether the string is base64', () => {
    const testCase = [
        {base64String: 'aXNCYXNlNjQ=', result: true},
        {base64String: '', result: false},
        {base64String: ' ', result: false},
        {base64String: 'hello', result: false},
    ];
    testCase.forEach(item => {
        const {base64String, result} = item;
        test(`字符输入为(${base64String}), base64字符判断结果：${result}`, async () => {
            expect(utils.isBase64(base64String)).toBe(result);
        });
    });
});
