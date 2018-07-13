import * as React from 'react'
import {Container} from "unstated-x";

interface E5Props {
    selected: () => void
    data: Container<{text: string}>
	otherProps: {
    	onClick: () => void
	}
}

interface E5States {

}

export default class E5 extends React.Component<E5Props, E5States> {

    handleOnChange(state, e) {
        console.log('something changed')
        this.props.data.setState({text: e.target.value})
    }

    render() {
        // const {width, height, background, handleOnClick, textInput1, handleOnChangeInput1} = this.props
        const state = this.props.data
        const text = state.state.text
        console.log('data', state)
        return (
            <div
                // style={{width, height, background, margin: '12px'}}
	            style={{background: 'red'}}
                onClick={() => this.props.otherProps.onClick()}
            >
                <input
                    // type="text"
                    value={text}
                    onChange={(e) => this.handleOnChange(state, e)}
        />
	            <h1>E5</h1>
        </div>
    )
    }
}

