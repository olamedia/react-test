export enum BlockKind {
    Undefined = 'Undefined',
    Cover = 'Cover',
    Article = 'Article',
}

export type BlockKindType =
    | BlockKind.Undefined
    | BlockKind.Cover
    | BlockKind.Article
