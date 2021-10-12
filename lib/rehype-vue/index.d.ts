import Vue, { VueConstructor, CreateElement, VNodeData } from 'vue';
declare type ComponentRegisterFunc = (nodaData: VNodeData) => VueConstructor<Vue> | undefined;
export declare type ComponentRegisterOption = {
    [keyof: string]: VueConstructor<Vue> | ComponentRegisterFunc;
};
export declare type UserRemarkVueOption = {
    createElement: CreateElement;
    components?: ComponentRegisterOption;
    sanitizeScheme?: object;
    childProps?: {
        [key: string]: any;
    };
};
export declare type RemarkVueOption = Required<UserRemarkVueOption>;
export default function remarkVue(_options: UserRemarkVueOption): void;
export {};
