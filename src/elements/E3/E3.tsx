import * as React from 'react'

interface E3Props {
    width: string;
    height: string;
    background: string;
    textInput1: string;
    handleOnClick: () => void;
	handleOnChangeInput1: (Event) => void;
}

interface E3States {

}

export default class E3 extends React.Component<E3Props, E3States> {

    render() {
        const {width, height, background, handleOnClick, textInput1, handleOnChangeInput1} = this.props
        return (
            <div
                style={{width, height, background, margin: '12px'}}
                onClick={handleOnClick}
            >
	            <input
		            type="text"
		            value={textInput1}
		            onChange={handleOnChangeInput1}
	            />
            </div>
    )
    }
}

