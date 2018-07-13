import * as React from 'react'

interface Props {
    draggable: boolean;
    handleDragStart: (Event) => void;
    handleDragOver: (Event) => void;
    handleDrop: (Event) => void;
}

interface States {

}

export default class DragItem1 extends React.Component<Props, States> {
    render() {
        const {draggable, handleDragStart, handleDragOver, handleDrop} = this.props
        return (
            <div
	            data-droppable
                style={{padding: '8px', margin: '8px', border: '1px solid black'}}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <h1
                    id={'drag-item-1'}
                    draggable={draggable}
                    onDragStart={handleDragStart}
                    style={{background: 'blue'}}>box 1</h1>
            </div>
        )
    }
}