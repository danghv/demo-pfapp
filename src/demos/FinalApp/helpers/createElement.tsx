import {Elements} from "../Elements";
import {ItemsContainer} from "../containers";
import { ElementContainer } from "../containers";
import {ReactNode} from "react";
import * as React from 'react'
import {Subscribe} from "unstated-x";

export const renderElement = (id: string): ReactNode => {
    const container: ElementContainer = ItemsContainer.state[id]
    // console.log('container...', container)
    const type = container.state.type
    const data = container.state
    // console.log('data...', data)
    // console.log('type...', type)
    const Element = Elements[type]
    return (
        <Subscribe to={[container]} key={id}>
            {(elData) => {
                // console.log('element data..', elData)
                return (
                    <Element {...{...data, container: container}}>{container.state.children.map(renderElement)}</Element>
                )
            }}
        </Subscribe>
    )
}