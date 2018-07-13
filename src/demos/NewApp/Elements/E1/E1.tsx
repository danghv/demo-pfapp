import * as React from 'react'
import {Container} from "unstated-x";
import {createElement} from "../../Components/createElement";
import { ElementContainer } from "../../stores/stores";

interface E1Props {
	onClick: () => void
	// data: Container<{text: string, text2: string}>
	data: Container<{type: string, children: Array<string|number>, data: {text: string, text2: string}}>
	draggable: boolean
	otherProps: {
		onDragStart: () => void,
		onDrop: () => void,
		onDragOver: () => void
	}
}

interface E1States {
}

class E1 extends React.Component<E1Props, E1States> {
	inspector() {
		return <h1>aaa</h1>
	}
    render() {
		console.log('props...', this.props)
	    // console.log('inspector...', ElementContainer.inspector())
	    const dataE1 = this.props.data
	    const data = this.props.data.state.data
	    // console.log('data props...', data)
        return (
            <div
	            onClick={() => this.props.onClick()}
	            draggable={this.props.draggable}
	            {...this.props.otherProps}
	            id={'E1'}
            >
                <h1> E1</h1>
	            <input
	                value={dataE1.state.data.text}
	                onChange={(e) => dataE1.setState({data: {text: e.target.value, text2: dataE1.state.data.text2}})}
	            />
	            <input
		            value={data.text2}
		            onChange={(e) => dataE1.setState({data: {text2: e.target.value, text: dataE1.state.data.text}})}
	            />
            </div>
        )
    }
}

export default createElement(E1, new ElementContainer({type: 'E1', children: [], data: {text: '', text2: ''}}))

