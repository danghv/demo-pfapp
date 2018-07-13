import * as React from "react";
import {enhanceElement} from "../helpers/enhanceElement";

class Layout extends React.Component {
    static inspector() {
        return <h1>I am layout inspector</h1>
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default enhanceElement(Layout)