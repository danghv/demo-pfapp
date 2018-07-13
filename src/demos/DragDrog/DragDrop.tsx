import * as React from 'react'
import DragItem1 from "./DragItem1";
import DragItem2 from "./DragItem2";
import DragItem3 from "./DragItem3";

interface DragDropProps {

}

interface DragDropStates {

}

export default class DragDrop extends React.Component<DragDropProps, DragDropStates> {
    handleDragStart = (e) => {
        console.log('start drag item...')
        e.dataTransfer.setData('text id', e.target.id)
    }

    handleDragOver = (e) => {
        e.preventDefault()
        console.log('start drag over...')

    }

    handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        console.log('drop here!')
        const data = e.dataTransfer.getData('text id')
	    const droppable = e.target.closest('[data-droppable]')
	    if (droppable)
		    droppable.appendChild(document.getElementById(data))
    }

    render() {
        return (
            <div>
                <DragItem1
                    draggable={true}
                    handleDragStart={this.handleDragStart}
                    handleDragOver={(e) => this.handleDragOver(e)}
                    handleDrop={this.handleDrop}
                />
                <DragItem2
                    draggable={true}
                    handleDragStart={this.handleDragStart}
                />
                <DragItem3
                    draggable={true}
                    handleDragStart={this.handleDragStart}
                    handleDragOver={(e) => this.handleDragOver(e)}
                    handleDrop={this.handleDrop}
                />
            </div>
        )
    }
}