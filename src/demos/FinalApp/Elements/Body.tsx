import * as React from "react";
import {enhanceElement} from "../helpers/enhanceElement";

class Body extends React.Component {
    static inspector() {
        return <h1>I am body inspector</h1>
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default enhanceElement(Body)