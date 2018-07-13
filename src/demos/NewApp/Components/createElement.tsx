import * as React from "react";
import {Container, Subscribe} from "unstated-x";
import {selected} from "../stores/stores";


export function createElement(Element, container) {
	return class extends React.Component<{type: string, data: object, id: number}> {
		componentDidMount() {
			// console.log('i am from log something function')
			// console.log('props', this.props)
		}

		handleClick = () => {
			selected.setState({selected: container})
		}
		inspector() {
			return <h1>abc</h1>
		}

		handleDragStart = (e) => {
			console.log('start drag item...')
			console.log('event', e.target.id)
			e.dataTransfer.setData('element', e.target.id)
		}

		handleDrop = (e) => {
			e.preventDefault()
			e.stopPropagation()
			console.log('drop here!')
			const data = e.dataTransfer.getData('element')
			console.log('data...', document.querySelector('iframe').contentDocument.getElementById(data))
			const El = document.querySelector('iframe').contentDocument.getElementById(data)
			e.target.appendChild(El)
			// const droppable = e.target.closest('[data-droppable]')
			// if (droppable)
			// 	droppable.appendChild(document.getElementById(data))
		}

		handleDragOver = (e) => {
			e.preventDefault()
			console.log('start drag over...')

		}

		render() {
			return (
				<Subscribe to={[container]}>
					{(data) => {
						// console.log('data...', data)
						return (
							<Element
								data={data}
								onClick={this.handleClick}
								inspector={this.inspector}
								draggable={true}
								otherProps={{
									onDragStart: this.handleDragStart,
									onDrop: this.handleDrop,
									onDragOver: this.handleDragOver,
								}}
							/>
						)
					}}
				</Subscribe>
			)
		}
	}
}

