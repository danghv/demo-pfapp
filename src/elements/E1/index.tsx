import * as React from 'react'
import {Container} from "unstated-x"


interface E1Props {
	data: Container<{
		type: string,
		text: string,
		width: string,
		height: string,
		background: string
	}>
	selected: () => void
}

interface E1States {

}

export default class E1 extends React.Component<E1Props, E1States> {

	handleOnChange(data, e) {
		data.setState({text: e.target.value})
	}

    render() {
	    const {data} = this.props
	    // console.log('data...', data)
	    return (
		    <div
			    // style={{width, height, background, margin: '12px'}}
			    style={{background: 'blue'}}
				onMouseDown={() => this.props.selected()}
		    >
			    <input
				    // type="text"
				    value={data.state.text}
				    onChange={(e) => this.handleOnChange(data, e)}
			    />
			    <h1>E1</h1>
		    </div>
	    )
    }
}

