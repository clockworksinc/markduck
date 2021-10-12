import Vue from 'vue';
import convert, { Option } from './convert';

export default (option?: Option) => {
  return Vue.extend({
    name: 'markduck-root',
    props: {
      markdown: { type: String, required: true },
      childProps: {
        type: Object as () => { [key: string]: any } | undefined,
        default: undefined,
      },
    },
    render(h): any {
      return convert(h, this.markdown, option, this.childProps);
    },
  });
};
