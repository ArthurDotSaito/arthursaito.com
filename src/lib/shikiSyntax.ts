import { getHighlighter } from 'shiki';
import { visit } from 'unist-util-visit';
import { Root } from 'mdast';

let highlighter: any;

const setupShiki = async (options = {}) => {
  highlighter = await getHighlighter(options);
};

const remarkShiki = () => {
  return (tree: Root) => {
    if (!highlighter) {
      throw new Error('Shiki has not been initialized. Please call setupShiki first.');
    }

    visit(tree, 'code', (node: any) => {
      const language = typeof node.lang === 'string' ? node.lang : undefined;
      const html = highlighter.codeToHtml(node.value, language);

      node.type = 'html';
      node.value = html;
      node.children = undefined;
    });
  };
};

export { setupShiki, remarkShiki };
