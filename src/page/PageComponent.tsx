import React from "react";
import {BlockData} from "./types/BlockData";
import {blockIndex} from "./blockIndex";
import {BlockName} from "./types/BlockIndex";


export class PageComponent extends React.Component<any, any> {
    props: {
        mode?: 'edit'
    } = {
        mode: undefined
    }

    get isEditMode() {
        return this.props.mode === 'edit'
    }

    blocks(): BlockData[] {
        return [
            {
                name: BlockName.Article,
                data: {
                    text: 'Custom text'
                }
            },
            {
                name: BlockName.Article,
                data: {
                    header: 'Custom header2',
                    text: 'Custom text2'
                }
            },
            {
                name: BlockName.Article,
                data: {
                    header: 'Custom header3',
                    text: 'Custom text3'
                }
            }
        ]
    }

    block(blockData: BlockData) {
        const SpecificBlock = blockIndex[blockData.name];
        const attributes = {
            data: blockData.data
        };
        return <SpecificBlock {...attributes}/>;
    }

    renderBlocks(blocks: BlockData[]) {
        return <>
            {this.blocks().map(block => (
                <>
                    {this.block(block)}
                </>
            ))}
        </>
    }

    render() {
        return (
            <div>
                {this.renderBlocks(this.blocks())}
            </div>
        );
    }
}
