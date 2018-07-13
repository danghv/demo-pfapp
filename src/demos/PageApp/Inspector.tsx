import * as React from 'react'
import {Subscribe} from "unstated-x";
import {AppContainer, CounterContainer, E1Container, E3Container, E4Container} from "./stores";

interface InspectorProps {
}

interface InspectorStates {

}

export default class Inspector extends React.Component<InspectorProps, InspectorStates> {
    state: InspectorStates = {}
    render() {
        return(
            <div
                style={{background: 'grey', float: 'right', width: '400px', height: '800px'}}
            >
                <h1>Inspector</h1>

                <Subscribe to={[CounterContainer]}>
                    {counter => (
                        <div>{counter.state.count}</div>
                    )}
                </Subscribe>
                <Subscribe to={[CounterContainer]}>
                    {data => {
                        // console.log('data: ', data)
                        return (
                            <div>{data.state.selected.show}</div>
                        )
                    }}
                </Subscribe>
                <Subscribe to={[AppContainer, E4Container, E3Container, E1Container]}>
                    {(selected: AppContainer, dataE4: E4Container, dataE3: E3Container, dataE1: E1Container) => {
                        // console.log('selected: ', selected)
                        // const select = selected.state.selected: Object
                        return (
                            <div
                                // style={{...selected.state.selected}}
                            >
                                aa
                            </div>
                        )
                    }}
                </Subscribe>
            </div>
        )
    }
}