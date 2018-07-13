import * as React from 'react'
import {Container, Subscribe, Provider} from "unstated-x"
import uuid from 'uuid'
import {ClassType, cloneElement, ComponentClass} from "react";
import {Elements} from "./Elements";
import {ItemsContainer, Items, SelectedContainer, elementInstances} from "./containers";
import {render} from "react-dom";
import {renderElement} from "./helpers/createElement";
import styled from 'styled-components'

const EventsWrapper = styled.div`
	user-select: none;
	height: 100%;
	width: 100%;
	background-color: whitesmoke;
`

class Inspector extends React.Component<{}, {}> {

	render() {
		return (
			<Subscribe to={[SelectedContainer]}>
				{(selected) => {
					// console.log('selected...', selected.state.selected && selected.state.selected.inspector())

					const targetContainer = selected.state.selected
					console.log('target container...', targetContainer)
					return (
						targetContainer && <Subscribe to={[targetContainer]}>
							{(states) => {
								console.log('element state...', states)
								// const type = elementContainer.state.type
								// console.log('inspector...', targetContainer.inspector())
								return (

									<div>
										asas
									</div>
								)
							}}
						</Subscribe>
					)

				}}
			</Subscribe>
		)
	}
}

class Page extends React.Component {
	handleMouseDown = (e) => {
		// console.log('mouse down here!')
		// console.log('this...', e.currentTarget)
		// console.log('target', e.target)
		// console.log('current target', e.currentTarget)
		const target = e.target
		const getId = (target) => {
			return target.dataset.element
		}
		const id = getId(target)
		// console.log('id', id)
		const instance = elementInstances.get(id)
		const targetContainer = ItemsContainer.state[id]
		// console.log('target container ', targetContainer)
		// console.log('instance...', instance)
		SelectedContainer.setState({selected: targetContainer})
		// SelectedContainer.setState({selected: instance})
	}

	render() {
		return (
			<EventsWrapper
				onMouseDown={this.handleMouseDown}
			>{this.props.children}</EventsWrapper>
		)
	}
}

// const createElement2 = (id) => {
//     const container = app[id]
//     // console.log('container..,', container)
//     const type = container.state.type
//     // console.log('type...', type)
//     const Component = elements[type]
//     // console.log('component...', Component)
//     // console.log('inspector...', elements[type].load.inspector())
//
//     return (
// 	    <Subscribe to={[container]} key={container.state.id}>
// 		    {(data) => {
// 		    	// console.log('data...', data)
// 			    const children = data.state.children.map((item) => createElement2(item))
// 			    return <Component {...container.state.data} children={children} />
// 		    }}
// 	    </Subscribe>
//     )
// }

// export const enhanceElement = (Element) => {
// 	return class extends Element {
// 		render() {
// 			const instance = super.render()
// 			return cloneElement(instance, {})
// 		}
// 	}
// }

// export const renderElement = (id) => {
// 	const container = ItemsContainer.state[id]
// 	console.log('container...', container)
// 	const type = container.state.type
// 	console.log('type...', type)
// 	const Element = Elements[type]
//
// }

// const addElement = (parentId, type, data) => {
// 	const parentContainer = app[parentId]
// 	console.log('app', app)
// 	const nextId = Object.keys(app).length
// 	console.log('nextId', nextId)
// 	const newContainer = new Container({id: uuid(), type, children: [], data})
// 	app[nextId] = newContainer
// 	console.log('new app', app)
// 	const newChildren = [...parentContainer.state.children, nextId]
// 	console.log('new children...', newChildren)
//
// 	parentContainer.setState({children: newChildren})
// }

// const copyElement = (parentId, targetId) => {
// 	const parentContainer = app[parentId]
// 	const targetContainer = app[targetId]
// 	const nextId = Object.keys(app).length
// 	const {type, children, data} = targetContainer.state
// 	const newContainer = new Container({id: uuid(), type, children, data})
// 	app[nextId] = newContainer
// 	const newChildren = [...parentContainer.state.children, nextId]
// 	parentContainer.setState({children: newChildren})
// 	// const child = Object.values(app).filter((item: Container<{id: number, type: string, children: number[], data: object}>) => {
// 	// 	return item.state.type === type
// 	// })
// 	// console.log('child', child)
// }

const deleteElement = (targetId) => {

}

const undo = () => {

}


export default class FinalApp extends React.Component {
	state = {
		parentId: 0,
		type: 'Button',
		targetId: 1
	}

    render() {
        // console.log('app[0]', app[0])
	    const { parentId, type, targetId } = this.state
        return (
            <Provider>
                <div
                    style={{float: 'left', width: '800px', height: '1000px'}}
                >
	                <Page>
		                <Subscribe to={[ItemsContainer]}>
			                {(items:Items) => {
				                // console.log('items...', items.bodyKey)
				                return (
					                <div>
						                {renderElement(items.bodyKey)}
					                </div>
				                )
			                }}
		                </Subscribe>
	                </Page>
                </div>
	            {/*<div>*/}
		            {/*<input type="text" value={parentId} onChange={(e) => this.setState({parentId: e.target.value})}/>*/}
		            {/*<input type="text" value={type} onChange={(e) => this.setState({type: e.target.value})}/>*/}
		            {/*<button*/}
			            {/*onClick={() => addElement(parentId, type, {text: 'a new button', background: 'blue'})}*/}
		            {/*>add an element</button>*/}
	            {/*</div>*/}
	            {/*<div>*/}
		            {/*<input type="text" value={targetId} onChange={(e) => this.setState({targetId: e.target.value})}/>*/}
					{/*<button*/}
						{/*onClick={() => copyElement(0, targetId)}*/}
					{/*>copy an element</button>*/}
	            {/*</div>*/}

	            <div
	                style={{float: 'right', width: '400px', border: '1px solid black', height: '1000px'}}
	            >inspector
					<Inspector/>
	            </div>
            </Provider>
        )
    }
}

