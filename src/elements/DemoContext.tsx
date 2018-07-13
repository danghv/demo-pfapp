import * as React from 'react'
import Context1 from './contexts/Context1'
import Context2 from './contexts/Context2'
import Context3 from './contexts/Context3'
import ContextButton from './contexts/Button'
import { StyleContext1 } from "./contexts/StyleProvider.js"

interface ContextProps {
	// handleClick: any;
}

interface ContextStates {
    // styles: {color: string, background: string},
    // attributes: {width: number, height: number}
    // attributes: object;
	color: string;
	text: string;
	greeting: string;
    xxx: any;
}

export default class DemoContext extends React.Component<ContextProps, ContextStates> {
	state: ContextStates = {
		// attributes: {
		// 	color: '',
		// 	text: '',
		// 	greeting: ''
		// },
		color: '',
		text: '',
		greeting: '',
		xxx: () => this.setState({color: 'blue', text: 'you just fuck me up', greeting: 'hello'})
	}

    render() {
        return (
            <StyleContext1.Provider value={this.state}>

	            <StyleContext1.Consumer>
		            {({greeting, xxx}) => (<Context1 greeting={greeting} handleClick={xxx}/>)}
	            </StyleContext1.Consumer>

	            <StyleContext1.Consumer>
		            {data => (<Context3 color={data.color} text={data.text}/>)}
	            </StyleContext1.Consumer>
            </StyleContext1.Provider>
        )
    }
}