import * as React from 'react'
import {Container, Provider, Subscribe} from "unstated-x";
import Context3 from "./contexts/Context3";
import Context1 from "./contexts/Context1";

interface ContainerStates {
    color: string;
    test: string;
    number: number;
}

class TestContainer extends Container<ContainerStates>{
    state = {
        color: 'red',
        text: 'abc',
        number: 1
    }
    handleClick() {
        this.setState({color: 'blue', text: 'hello from the other side', number: 1})
    }
    handleMouseDOwn() {

    }
}
export default class DemoUnstated extends React.Component {
    render() {
        return (
            <Provider>
                <Subscribe to={[TestContainer]}>
                    {(data) => {
                        console.log('data...', data)
                        return (
                            <Context3 color={data.state.color} text={data.state.text}/>
                        )
                    }}
                </Subscribe>
                <Subscribe to={[TestContainer]}>
                    {(data) => (<Context1 greeting={data.state.text} handleClick={() => data.handleClick()}/>)}
                </Subscribe>
            </Provider>
        )
    }
}