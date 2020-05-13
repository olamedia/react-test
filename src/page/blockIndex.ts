import { Block } from './types/Block'
import { ArticleBlock } from './blocks/Article'
import { CoverBlock } from './blocks/Cover'

export const blockIndex: { [blockType: string]: typeof Block } = {
    Article: ArticleBlock,
    Cover: CoverBlock,
}
