import { CreateElement } from 'vue';
import { Plugin, Settings } from 'unified';
import { ComponentRegisterOption } from './rehype-vue';
declare type PluginOption = Plugin | [Plugin, Settings];
export declare type Option = {
    components?: ComponentRegisterOption;
    sanitizeScheme?: object;
    remarkPlugins?: PluginOption[];
    rehypePlugins?: PluginOption[];
};
declare const convert: (createElement: CreateElement, markdown: string, option: Option, childProps?: {
    [key: string]: any;
}) => any;
export default convert;
