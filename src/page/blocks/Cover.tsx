import { Block, BlockProps } from '../types/Block'
import React, { CSSProperties } from 'react'
import { BlockKind } from '../types/BlockIndex'
import { BaseBlockData } from '../types/BlockData'

export interface CoverBlockData extends BaseBlockData<CoverBlockData> {
    kind: BlockKind.Cover
    data: CoverData
}

export type CoverData = {
    suptitle?: string
    title?: string
    description?: string
}

interface CoverBlockProps extends BlockProps {
    data: CoverData
}

export class CoverBlock extends Block<CoverBlockProps> {
    kind: BlockKind.Cover = BlockKind.Cover
    elementStyles = {}

    get data() {
        return this.props.data
    }

    // elements: {
    //     header
    //     text
    // }

    style(elementName: string): CSSProperties {
        return {}
    }

    renderBlock() {
        return (
            <div>
                <div className={'h3'} style={this.style('suptitle')}>
                    {this.data.suptitle}
                </div>
                <h1 style={this.style('title')}>{this.data.title}</h1>
                <p style={this.style('description')}>{this.data.description}</p>
            </div>
        )
    }
}
