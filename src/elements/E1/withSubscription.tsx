import * as React from 'react'
import E1 from './index'
import {Subscribe} from "unstated";

function withSubscription(Element, someData) {
    return class extends React.Component {
        render() {
            return (
                <Subscribe to={[someData]}>
                    {() => (<Element />)}
                </Subscribe>
            )
        }
    }
}