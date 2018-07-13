import * as React from "react";
import {enhanceElement} from "../helpers/enhanceElement";

class Button extends React.Component<{data: {text: string, background: string}}> {

    static inspector(container) {
        console.log('container button...', container)
        const {data} = container.state
        return (
            <div>I am button inspector
        <input
            value={data.text}
            onChange={(e) => {
                const dt = Object.assign({}, data)
                dt.text = e.target.value
                container.setState({data: dt})
            }}
        />
        <input
            value={data.background}
            onChange={(e) => {
                const dt = Object.assign({}, data)
                dt.background = e.target.value
                container.setState({data: dt})
            }}/>
        </div>
    )
    }

    componentDidMount() {
        // console.log('props...', this.props)
    }

    render() {
        const {text, background} = this.props.data
        return (
            <button style={{background}}>{text}</button>
    )
    }
}
export default enhanceElement(Button)