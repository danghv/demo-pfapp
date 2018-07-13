import * as React from 'react'

interface Context3Props {
    // color: string;
    // data: object;
	color: string;
	text: string;
}

interface Context3States {

}

export default class Context3 extends React.Component<Context3Props, Context3States> {

    render() {
    	console.log('props', this.props)
	    const { color, text } = this.props
        return (
	        <div style={{float: 'right'}}>
		        <h1 style={{color: color}}>{text}</h1>
	        </div>
        )
    }
}