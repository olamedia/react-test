import {Block} from "./types/Block";
import {ArticleBlock} from "./blocks/Article";

export const blockIndex: { [blockType: string]: typeof Block } = {
    Article: ArticleBlock
}
