import * as React from 'react'
import {Container} from "unstated-x";

interface E4Props {
	selected: () => void
	data: Container<{text: string}>
}

interface E4States {

}

export default class E4 extends React.Component<E4Props, E4States> {

	handleOnChange(state, e) {
		// console.log('something changed')
		this.props.data.setState({text: e.target.value})
	}

	render() {
		// const {width, height, background, handleOnClick, textInput1, handleOnChangeInput1} = this.props
		const state = this.props.data
		const text = state.state.text
		// console.log('data', state)
		return (
			<div
				// style={{width, height, background, margin: '12px'}}
				style={{background: 'green'}}
				onClick={() => this.props.selected()}
			>
				<input
					// type="text"
					value={text}
					onChange={(e) => this.handleOnChange(state, e)}
				/>
				<h1>E4</h1>
			</div>
		)
	}
}

