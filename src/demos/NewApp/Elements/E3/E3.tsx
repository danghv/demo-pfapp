import * as React from 'react'
import {Container} from "unstated-x";
import {createElement} from "../../Components/createElement";
import { ElementContainer } from "../../stores/stores";

interface E3Props {
	data: Container<{type: string, children: Array<string|number>, data: {text: string}}>
	onClick: () => void
	draggable: boolean
	otherProps: {
		onDragStart: () => void,
		onDrop: () => void,
		onDragOver: () => void
	}
}

interface E3States {

}

class E3Container extends ElementContainer{
	static a() {
		console.log('aaaaabbbcc')
		return (<div><h1>i am aaaaaaa</h1></div>)
	}
}

class E3 extends React.Component<E3Props, E3States> {

    render() {
        // console.log('props', this.props)
        // console.log('inspector...', ElementContainer.inspector())
        // console.log('inspector...', ElementContainer.a())
	    const data = this.props.data
        return (
	        <button
		        type="button"
		        className={`btn btn-${data.state.data.text}`}
		        onClick={this.props.onClick}
		        draggable={this.props.draggable}
		        {...this.props.otherProps}
		        id={'E3'}
	        >Button</button>
        )
    }
}

// export default createElement(E3, new ElementContainer({type: 'E3', children: [], data: {text: 'primary'}}))
export default createElement(E3, new E3Container({type: 'E3', children: [], data: {text: 'primary'}}))
