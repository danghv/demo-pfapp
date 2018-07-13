import * as React from 'react'

interface ContextProps {

}

interface ContextStates {

}

export default class Context2 extends React.Component<ContextProps, ContextStates> {
    shouldComponentUpdate() {
        return false
    }
    render() {
        return (
            <div
                // style={{border: '1px solid blue'}}
            >
                {/*<h1>I am medium div</h1>*/}
                { this.props.children }
            </div>
        )
    }
}