import * as utils from '../src/utils';

describe('test whether the registry list is vaild', () => {
    const testCase = [
      {arr: [], result: true},
      {arr: ['registry=hh'], result: true},
      {arr: ['registry='], result: false},
      {arr: ['@test:registry='], result: false},
      {arr: ['@test:registry=dsads'], result: true},
      {arr: ['@:registry=dsads'], result: false},
      {arr: ['@test:=dsads'], result: false},
      {arr: ['sdsd'], result: false},
    ];
    testCase.forEach(item => {
      const {arr, result} = item;
      test(`registryList输入为(${arr}), json array判断结果：${result}`, async () => {
        expect(utils.checkRegistryList(arr)).toBe(result);
      });
    });
  });