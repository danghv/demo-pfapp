import * as React from "react";
import {enhanceElement} from "../helpers/enhanceElement";

class Section extends React.Component {
    static inspector() {
        return <h1>I am section inspector</h1>
    }
    render() {
        return (
            <div
                style={{border: 'green 1px dashed',
            minHeight: '50px',
            margin: '20px'}}
    >
        {this.props.children}
        </div>
    )
    }
}

export default enhanceElement(Section)