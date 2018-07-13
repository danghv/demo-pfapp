import * as React from 'react'

interface Props {
    draggable: boolean;
    handleDragStart: (Event) => void;
}
interface States {

}

export default class DragItem2 extends React.Component<Props, States> {
    render() {
        const {draggable, handleDragStart} = this.props
        return (
            <div
	            data-droppable
                style={{padding: '8px', margin: '8px', border: '1px solid black'}}
            >
                <h1
                    id={'drag-item-2'}
                    draggable={draggable}
                    onDragStart={handleDragStart}
                    style={{background: 'green'}}>box 2</h1>
        </div>
    )
    }
}