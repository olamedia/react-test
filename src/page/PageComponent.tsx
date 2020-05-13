import React from 'react'
import { BlockData } from './types/BlockData'
import { blockIndex } from './blockIndex'
import { samplePageData } from '../data/SamplePageData'

type PageComponentProps = {
    mode?: 'edit'
}

export class PageComponent extends React.Component<PageComponentProps> {
    forceEditMode: boolean = false

    get mode() {
        return this.forceEditMode ? 'edit' : this.props.mode
    }

    get isEditMode() {
        return this.mode === 'edit'
    }

    toggleEdit() {
        this.forceEditMode = !this.forceEditMode
        console.log(
            'forceEditMode',
            this.forceEditMode,
            'mode=',
            this.mode,
            'isEditMode=',
            this.isEditMode,
        )
        this.forceUpdate()
    }

    blocks(): BlockData[] {
        return samplePageData
    }

    block(blockData: BlockData) {
        const { kind, data, style } = blockData
        const attributes = {
            data: data,
            style: style,
            mode: this.isEditMode ? 'edit' : undefined,
        }
        const SpecificBlock = blockIndex[kind]
        return <SpecificBlock {...attributes} />
    }

    renderBlocks(blocks: BlockData[]) {
        return (
            <>
                {blocks.map((block) => (
                    <React.Fragment key={block.id}>
                        {this.block(block)}
                    </React.Fragment>
                ))}
            </>
        )
    }

    render() {
        return (
            <div>
                <button onClick={() => this.toggleEdit()}>
                    TOGGLE EDIT MODE
                </button>
                {this.renderBlocks(this.blocks())}
            </div>
        )
    }
}
