import * as React from 'react'

interface E2Props {
    width: number;
    height: number;
    background: string;
    text: string;
    handleMouseDown: any;
    handleOnChangeE2Input: any;
    handleOnChangeE2: any;
    showSomething: any;
    isShow: boolean;
}

interface E2States {

}

export default class E2 extends React.Component<E2Props, E2States> {

    render() {

        const {width, height, background, handleMouseDown, text, handleOnChangeE2, handleOnChangeE2Input, showSomething, isShow} = this.props
        return (
            <div
                style={{width, height, background}}
                onMouseDown={(e) => {
                	// console.log('this...', this)
	                return handleMouseDown(this)
                }}
            >
                <input
                    placeholder={'Save me...'}
                    value={text}
                    onChange={(e) => handleOnChangeE2Input(e)}
                />
	            <button
	                onClick={showSomething}
	            >Show something</button>
	            {isShow && <h1>The meaning of being lonely is...</h1>}
            </div>
        )
    }
}