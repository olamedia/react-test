import {BlockNameType} from "./BlockIndex";

export interface BlockData {
    name: BlockNameType,
    data: { [key: string]: any }
    style?: { [key: string]: any }
}
