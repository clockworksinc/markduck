"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(require("vue"));
const test_utils_1 = require("@vue/test-utils");
const index_1 = __importDefault(require("./index"));
const convert_1 = __importDefault(require("./convert"));
jest.mock('./convert');
test('make Markduck component', () => {
    const components = {
        img: vue_1.default.extend({ name: 'MyCustomImage' }),
        a: vue_1.default.extend({ name: 'MyCustomLink' }),
    };
    const remarkPlugins = [];
    const Markduck = index_1.default({
        components,
        remarkPlugins,
    });
    const wrapper = test_utils_1.shallowMount(Markduck, {
        propsData: {
            markdown: '# markdown contents',
        },
    });
    expect(wrapper.vm.$options.name).toBe('markduck-root');
    expect(convert_1.default).toHaveBeenCalledWith(expect.any(Function), '# markdown contents', { components, remarkPlugins });
});
