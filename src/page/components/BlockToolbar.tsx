import React, { CSSProperties } from 'react'

export enum BlockToolbarActionEnum {
    Edit = 'Edit',
    Duplicate = 'Duplicate',
    Delete = 'Delete',
    Hide = 'Hide',
}

export type BlockToolbarAction =
    | BlockToolbarActionEnum.Edit
    | BlockToolbarActionEnum.Duplicate
    | BlockToolbarActionEnum.Delete
    | BlockToolbarActionEnum.Hide

export type BlockToolbarActionList<T extends BlockToolbarAction> = {
    [P in T]?: Function
}

type BlockToolbarProps = {
    actions?: BlockToolbarActionList<BlockToolbarActionEnum>
}

export class BlockToolbar extends React.Component<BlockToolbarProps> {
    get actions() {
        return this.props.actions
    }

    triggerAction(actionType: BlockToolbarAction, args: any) {
        console.log('triggerAction', actionType)
        if (this.actions && actionType in this.actions) {
            const method = this.actions[actionType]
            if (method) {
                console.log('triggerAction', actionType, 'method found')
                method.bind(this)
                method(...args)
            }
        }
    }

    render() {
        const style: CSSProperties = {
            position: 'absolute',
            top: 0,
        }
        const attributes = {
            style,
        }

        return (
            <div {...attributes}>
                <button
                    onClick={(...args) =>
                        this.triggerAction(BlockToolbarActionEnum.Edit, args)
                    }
                >
                    edit
                </button>

                <button
                    onClick={(...args) =>
                        this.triggerAction(
                            BlockToolbarActionEnum.Duplicate,
                            args,
                        )
                    }
                >
                    duplicate
                </button>
                <button
                    onClick={(...args) =>
                        this.triggerAction(BlockToolbarActionEnum.Delete, args)
                    }
                >
                    delete
                </button>
                <button
                    onClick={(...args) =>
                        this.triggerAction(BlockToolbarActionEnum.Hide, args)
                    }
                >
                    hide
                </button>
            </div>
        )
    }
}
