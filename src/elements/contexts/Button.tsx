import * as React from 'react'

interface ContextButtonProps {
    styles: Object,
    // ticktog: Function,
}

interface ContextButtonStates {

}

export default class ContextButton extends React.Component<ContextButtonProps, ContextButtonStates> {
    render() {
        return (
            <button
                // onClick={this.props.ticktog}
            >Click me!</button>
    )
    }
}