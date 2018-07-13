import * as React from 'react'

interface HelloBoboProps {
    a: Date;
    b: string;
}

interface HelloBoboState {
    x: string;
    y: string;
}

export default class HelloBobo extends React.Component<HelloBoboProps, HelloBoboState> {
    state: HelloBoboState = {x: 'sds', y: 'YYY'}

    render() {
        const {x, y} = this.state
        const {a, b} = this.props
        return (
            <div>
                <h1>Hello {x} and {y}</h1>
                <h1>{a} and {b}</h1>
            </div>
        )
    }
}