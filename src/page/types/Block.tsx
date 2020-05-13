import React, {CSSProperties} from "react";
import {BlockKind, BlockKindType} from "./BlockIndex";
import {BlockToolbar, BlockToolbarActionEnum, BlockToolbarActionList} from "../components/BlockToolbar";
import {ArticleBlockData} from "../blocks/Article";

export type BlockProps = {
    mode?: 'edit' | undefined
    style?: ArticleBlockData['style']
}

export abstract class Block<P> extends React.Component<P> {
    kind: BlockKindType = BlockKind.Undefined
    elementStyles: { [elementName: string]: CSSProperties } = {}

    abstract renderBlock(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined

    get mode() {
        return (this.props as BlockProps).mode
    }

    get isEditMode() {
        return this.mode === 'edit'
    }

    deleteBlock(...args: any) {
        console.log('DELETE BLOCK', this, args)
    }

    get toolbarActions(): BlockToolbarActionList<BlockToolbarActionEnum> {
        return {
            [BlockToolbarActionEnum.Delete]: (...args: any) => {
                this.deleteBlock(...args)
            }
        }
    }

    render() {
        const blockStyle: CSSProperties = {
            position: "relative"
        }
        return (
            <div style={blockStyle}>
                {this.isEditMode &&
                <BlockToolbar actions={this.toolbarActions}/>
                }
                {this.renderBlock()}
            </div>
        )
    }
}
