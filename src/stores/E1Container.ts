import {Container} from "unstated-x";
import {appContainer} from "./app";

interface E1States {
    width: number;
    height: number;
    background: string;
}

class E1Container extends Container<E1States>{
    state = {
        width: 100,
        height: 100,
        background: 'red'
    }

    handleMouseDown() {
        console.log('trigger mouse down E1...')
        console.log('this E1...', this.state)
        console.log('app container...', appContainer)
        console.log('app container andle...', appContainer.setSomething(this.state))
        appContainer.state.selected = this.state
        console.log('x E1', appContainer.state.selected)
    }

    handleOnChange(e) {
        const { width, height, background } = this.state
        const { value } = e.target
        if (e.target.name === 'width') {
            this.setState({width: value, height, background})
        }
        if (e.target.name === 'height') {
            this.setState({width, height: value, background})
        }
        if (e.target.name === 'background') {
            this.setState({width, height, background: value})
        }
    }


}

export { E1Container }