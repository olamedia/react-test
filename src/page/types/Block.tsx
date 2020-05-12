import React, {CSSProperties} from "react";
import {BlockName, BlockNameType} from "./BlockIndex";

export abstract class Block extends React.Component<any, any> {
    name: BlockNameType = BlockName.Undefined
    elementStyles: { [elementName: string]: CSSProperties } = {}


    render() {
        return (
            <div>
                Implement render()
            </div>
        )
    }
}
