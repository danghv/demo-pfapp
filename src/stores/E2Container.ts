import {Container} from "unstated-x";
import {appContainer} from "./app";

interface E2States {
    width: number;
    height: number;
    background: string;
    text: string;
    isShow: boolean;
}

class E2Container extends Container<E2States>{
    state = {
        width: 100,
        height: 100,
        background: 'red',
        text: '',
        isShow: false
    }

    handleMouseDownE2 = () => {
        console.log('trigger mouse down E2...')
        console.log('this...', this.state)
        console.log('app container...', appContainer)
        appContainer.state.selected = this.state
        console.log('x', appContainer.state.selected)
    }

    handleOnChangeE2(e) {
        const { width, height, background, text } = this.state
        const { value } = e.target
        if (e.target.name === 'width') {
            this.setState({width: value, height, background, text})

        }
        if (e.target.name === 'height') {
            this.setState({width, height: value, background, text})
        }
        if (e.target.name === 'background') {
            this.setState({width, height, background: value, text})
        }
        if (e.target.name === 'text') {
            this.setState({width, height, background, text: value})
        }

    }

    handleOnChangeE2Input(e) {
        // console.log('trigger onchange E2 input')
        // console.log('event...', e)
        // console.log('state...', this.state)
        const { width, height, background, text } = this.state
        this.setState({width, height, background, text: e.target.value})
    }

    showSomething() {
        const { isShow } = this.state
        this.setState({isShow: !isShow})
    }


}

export { E2Container }