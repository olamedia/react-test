import {Block, BlockProps} from "../types/Block";
import React, {CSSProperties} from "react";
import {BlockKind} from "../types/BlockIndex";
import {BaseBlockData} from "../types/BlockData";

export interface ArticleBlockData extends BaseBlockData<ArticleBlockData> {
    kind: BlockKind.Article
    data: ArticleData
}

export type ArticleData = {
    header?: string
    text: string
}

interface ArticleBlockProps extends BlockProps {
    data: ArticleData
}

export class ArticleBlock extends Block<ArticleBlockProps> {
    kind: BlockKind.Article = BlockKind.Article
    elementStyles = {}

    get article() {
        return this.props.data
    }

    // elements: {
    //     header
    //     text
    // }

    style(elementName: keyof ArticleData): CSSProperties | undefined {
        return this.props.style && elementName in this.props.style ? this.props.style[elementName] : undefined
    }

    renderBlock() {
        return <div>
            <h1 style={this.style('header')}>{this.article.header}</h1>
            <p style={this.style('text')}>{this.article.text}</p>
        </div>
    }
}
