import React from "react";
import {ArticleBlock, ArticleData} from "../blocks/Article";

export class PageComponent extends React.Component<any, any> {

    article(): ArticleData {
        return {
            text: 'Article text'
        }
    }

    render() {
        return (
            <div>
                Page
                <ArticleBlock article={this.article()}/>
            </div>
        );
    }
}
