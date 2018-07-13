import { Container } from "unstated-x";

interface CounterState {
    count: number;
    selected: object;
}

interface AppStates {
    selected: object;

}

interface E1States {
    type: string
    width: string
    height: string
    background: string
    text: string
}

interface E3States {
    type: string;
    width: string;
    height: string;
    background: string;
    textInput1: string;
}

interface E4States {
    type: string
    text: string
    width: string
    height: string
    background: string
}

interface E5States {
    type: string
    text: string
}

export class CounterContainer extends Container<CounterState> {
    state = {
        count: 0,
        selected: {}
    }

    increment() {
        this.setState({ count: this.state.count + 1 })
    }

    decrement() {
        this.setState({ count: this.state.count - 1 })
    }
    setSelected(param) {
        console.log('param: ', param)
        this.setState({selected: param})
    }
}

export class AppContainer extends Container<AppStates>{
    state = {
        selected: Container,
    }

    setSelected(container) {
        // console.log('a', a)
        this.setState({selected: container})
    }
}

export const selected = new AppContainer()

export class E1Container extends Container<E1States>{
    state = {
        type: 'E1',
        text: '',
        width: '250px',
        height: '100px',
        background: 'red',
    }

}

export class E3Container extends Container<E3States>{
    state = {
        type: 'E3',
        width: '250px',
        height: '100px',
        background: 'blue',
        textInput1: ''
    }
    setTextInput1(e) {
        this.setState({textInput1: e.target.value})
    }
}

export class E4Container extends Container<E4States>{
    state = {
        type: 'E4',
        text: '',
        width: '250px',
        height: '100px',
        background: 'yellow'
    }
}

export class E5Container extends Container<E5States>{
    state = {
        type: 'E5',
        text: ''
    }
}