import { CoverBlockData } from '../blocks/Cover'
import { ArticleBlockData } from '../blocks/Article'
import { BlockKindType } from './BlockIndex'
import { CSSProperties } from 'react'

export type BaseBlockData<T extends BaseBlockData<any>> = {
    id: string // Unique block id
    kind: BlockKindType
    data: any
    style?: { [P in keyof T['data']]?: CSSProperties }
}

export type BlockData = ArticleBlockData | CoverBlockData
