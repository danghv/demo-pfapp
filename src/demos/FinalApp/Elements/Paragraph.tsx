import * as React from "react";
import {enhanceElement} from "../helpers/enhanceElement";

class Paragraph extends React.Component<{data: {text: string, color: string, fontSize: string}}> {
    static inspector(container) {
        console.log('container paragraph', container)
        const {data} = container.state
        return (
            <div> Inspector paragraph
        <input type="text"
        value={data.text}
        onChange={(e) => {
            const dt = Object.assign({}, data)
            dt.text = e.target.value
            container.setState({data: dt})
        }}
        />
        <input type="text"
        value={data.color}
        onChange={(e) => {
            const dt = Object.assign({}, data)
            dt.color = e.target.value
            container.setState({data: dt})
        }}
        />
        <input type="text"
        value={data.fontSize}
        onChange={(e) => {
            const dt = Object.assign({}, data)
            dt.fontSize = e.target.value
            container.setState({data: dt})
        }}
        />
        </div>
    )
    }
    render() {
        const {text, color, fontSize} = this.props.data
        return (
            <p style={{color, fontSize}}>
        {text}
        </p>
    )
    }
}

export default enhanceElement(Paragraph)