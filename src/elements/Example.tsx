import * as React from 'react'
import UIElement from "../interfaces/UIElement";
import HelloBobo from '../demos/HelloBobo'
import DemoContext from "./DemoContext";

interface Data {
    content?: string
}

export default class Example
    extends React.Component<Data, Data>
    implements UIElement
{
    static defaultProps = {}

    state: Data = {  }

    handleClick = (e: any) => {
        this.setState({
            content: 'New Content'
        })
    }


    render() {
        return (
            <div
	            // onClick={this.handleClick}
            >
	            {/*<HelloBobo a={new Date()} b={'7889'} />*/}
	            {/*{this.state.content}*/}
                <DemoContext />
            </div>
        )
    }
}
