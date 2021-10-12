"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const unified_1 = __importDefault(require("unified"));
const rehype_raw_1 = __importDefault(require("rehype-raw"));
const remark_parse_1 = __importDefault(require("remark-parse"));
const remark_rehype_1 = __importDefault(require("remark-rehype"));
const remark_gfm_1 = __importDefault(require("remark-gfm"));
const rehype_vue_1 = __importDefault(require("./rehype-vue"));
const convert = (createElement, markdown, option, childProps) => {
    const remarkPlugins = (option === null || option === void 0 ? void 0 : option.remarkPlugins) || [];
    const rehypePlugins = (option === null || option === void 0 ? void 0 : option.rehypePlugins) || [];
    const remarkVueOption = {
        createElement,
        components: option.components,
        sanitizeScheme: option.sanitizeScheme,
        childProps,
    };
    // prettier-ignore
    const plugins = [
        remark_gfm_1.default,
        remark_parse_1.default,
        ...remarkPlugins,
        [remark_rehype_1.default, { allowDangerousHtml: true }],
        rehype_raw_1.default,
        ...rehypePlugins,
        [rehype_vue_1.default, remarkVueOption]
    ];
    const processor = plugins.reduce((pipe, plugin) => {
        if (Array.isArray(plugin)) {
            return pipe.use(plugin[0], plugin[1] || {});
        }
        return pipe.use(plugin);
    }, unified_1.default());
    const { result } = processor.processSync(markdown);
    return result;
};
exports.default = convert;
