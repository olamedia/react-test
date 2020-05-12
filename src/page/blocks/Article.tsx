import {Block} from "../types/Block";
import React, {CSSProperties} from "react";
import {BlockName} from "../types/BlockIndex";

export type ArticleData = {
    header?: string
    text: string
}

export class ArticleBlock extends Block{
    name: BlockName.Article = BlockName.Article
    elementStyles = {}
    props: {
        article: ArticleData
    } = {
        article: {
            text: 'No text'
        }
    }

    get article(){
        return this.props.article
    }

    // elements: {
    //     header
    //     text
    // }

    style(elementName: string): CSSProperties{
        return {
            backgroundColor: elementName === 'header' ? 'azure' : 'beige'
        }
    }

    render(){
        return <div>
            <h1 style={this.style('header')}>{this.article.header}</h1>
            <p style={this.style('text')}>{this.article.text}</p>
        </div>
    }
}
