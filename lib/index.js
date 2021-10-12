"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(require("vue"));
const convert_1 = __importDefault(require("./convert"));
exports.default = (option) => {
    return vue_1.default.extend({
        name: 'markduck-root',
        props: {
            markdown: { type: String, required: true },
            childProps: {
                type: Object,
                default: undefined,
            },
        },
        render(h) {
            return convert_1.default(h, this.markdown, option, this.childProps);
        },
    });
};
