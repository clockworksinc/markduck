"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convert_1 = __importDefault(require("./convert"));
test('convert', () => {
    const markdown = `
# title

plain text.

## sub title

- list1
- list2 with ![image](https://example.com/hoge.jpg)
- list3
`;
    const mockH = jest.fn().mockImplementation((...args) => args);
    const vnodes = convert_1.default(mockH, markdown, {});
    expect(vnodes).toEqual([
        'div',
        {},
        [
            ['h1', {}, ['title']],
            '\n',
            ['p', {}, ['plain text.']],
            '\n',
            ['h2', {}, ['sub title']],
            '\n',
            [
                'ul',
                {},
                [
                    '\n',
                    ['li', {}, ['list1']],
                    '\n',
                    ['li', {}, ['list2 with ', ['img', { alt: 'image', src: 'https://example.com/hoge.jpg' }, undefined]]],
                    '\n',
                    ['li', {}, ['list3']],
                    '\n',
                ],
            ],
        ],
    ]);
});
