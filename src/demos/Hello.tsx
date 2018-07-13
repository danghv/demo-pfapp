import * as React from 'react'

interface States {
    name: string;
    enthusiasmLevel?: number;
}

export default class Hello extends React.Component<States, States> {
    state: States = {
        name: 'mr D',
        enthusiasmLevel: 1
    }
    render() {
        const { name, enthusiasmLevel } = this.state
        // console.log('props...', this.props)
        if (enthusiasmLevel <= 0) {
            throw new Error('You are so rude!')
        }
        return (
            <div>
                <h1>Hello {name + Array(enthusiasmLevel + 1).join('!')}</h1>
                <button
                    onClick={() => {
                        console.log('state...', enthusiasmLevel)
                        this.setState({enthusiasmLevel: this.state.enthusiasmLevel + 1})
                    }}
                >+</button>
                <button
                    onClick={() => this.setState({enthusiasmLevel: enthusiasmLevel - 1})}
                >-</button>
        </div>

            )
    }
}