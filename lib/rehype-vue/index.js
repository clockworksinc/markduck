"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hast_util_sanitize_1 = __importDefault(require("hast-util-sanitize"));
const hast_to_hyperscript_1 = __importDefault(require("hast-to-hyperscript"));
const hast_util_table_cell_style_1 = __importDefault(require("@mapbox/hast-util-table-cell-style"));
const isFunc = (customComponent) => typeof customComponent === 'function';
function remarkVue(_options) {
    this.Compiler = compile;
    const options = {
        ..._options,
        components: (_options === null || _options === void 0 ? void 0 : _options.components) || {},
        sanitizeScheme: (_options === null || _options === void 0 ? void 0 : _options.sanitizeScheme) || null,
        childProps: (_options === null || _options === void 0 ? void 0 : _options.childProps) || {},
    };
    function hFactory(createElement) {
        return (name, nodeData, children) => {
            const compOrFunc = options.components[name];
            const custom = isFunc(compOrFunc) ? compOrFunc(nodeData) : compOrFunc;
            const component = custom || name;
            if (custom) {
                nodeData.props = {
                    ...nodeData.props,
                    ...options.childProps,
                };
            }
            return createElement(component, nodeData, children);
        };
    }
    function compile(node) {
        const hast = {
            type: 'root',
            properties: {},
            children: node.children,
        };
        const sanitized = options.sanitizeScheme ? hast_util_sanitize_1.default(hast, options.sanitizeScheme) : hast;
        const cellStyled = hast_util_table_cell_style_1.default(sanitized);
        return hast_to_hyperscript_1.default(hFactory(options.createElement), cellStyled);
    }
}
exports.default = remarkVue;
