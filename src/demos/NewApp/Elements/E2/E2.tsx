import * as React from 'react'
import {Container} from "unstated-x";
import {createElement} from "../../Components/createElement";
import { ElementContainer } from "../../stores/stores";

interface E2Props {
    data: Container<{type: string, children: Array<string|number>, data: {text: string, text2: string}}>
    // data: Container<{text: string, text2: string}>
	onClick: () => void
	draggable: boolean
	otherProps: {
		onDragStart: () => void,
		onDrop: () => void,
		onDragOver: () => void
	}
}

interface E2States {

}

class E2 extends React.Component<E2Props, E2States> {
    render() {
        // console.log('props', this.props)
	    const data = this.props.data
        return (
	        <div
		        onClick={this.props.onClick}
		        draggable={this.props.draggable}
		        {...this.props.otherProps}
		        id={'E2'}
	        >
		        <h1> E2</h1>
		        <input
		            value={data.state.data.text}
		            onChange={(e) => {
			            const dt = Object.assign({}, data.state.data)
			            dt.text = e.target.value
			            data.setState({data: dt})
		            }}
		        />
		        <input
			        value={data.state.data.text2}
			        onChange={(e) => {
				        const dt = Object.assign({}, data.state.data)
				        dt.text2 = e.target.value
				        data.setState({data: dt})
			        }}
		        />
	        </div>
        )
    }
}

export default createElement(E2, new ElementContainer({type: 'E2', children: [], data: {text: '', text2: ''}}))

