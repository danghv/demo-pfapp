import * as React from 'react'
import { StyleContext1 } from "./StyleProvider.js"

interface Context1Props {
	greeting: string;
	handleClick: any;
}

interface Context1States {

}

export default class Context1 extends React.Component<Context1Props, Context1States> {
    render() {
    	const { greeting, handleClick } = this.props
        return (
	        <div style={{float: 'left'}}>
		        <button
			        onClick={handleClick}
		        >click me</button>
		        <h1>{greeting}</h1>
	        </div>
        )
    }
}