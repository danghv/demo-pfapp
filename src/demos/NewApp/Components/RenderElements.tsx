import * as React from 'react'
import {Subscribe} from "unstated-x";
import {selected} from "../stores/stores";
import uuid from 'uuid'

const ElementsInfo = {
    E1: {
    	id: uuid(),
        type: 'E1',
        load: () => import('../Elements/E1/E1')
    },
    E2: {
    	id: uuid(),
        type: 'E2',
        load: () => import('../Elements/E2/E2')
    },
    E3: {
    	id: uuid(),
        type: 'E3',
        load: () => import('../Elements/E3/E3')
    },
    Section: {
    	id: uuid(),
        type: 'Section',
        load: () => import('../Elements/Section/Section')
    }
}

class ElementLoader extends React.Component<{type: string, data: object, id: number}> {
    state = {
        Instance: () => null
    }

    componentDidMount() {
        this.loadElement()
    }

    async loadElement() {
        const {type} = this.props
        const Instance = (await ElementsInfo[type].load()).default
        // console.log('instance...', Instance)
        this.setState({Instance})
    }
    render() {
        const {Instance} = this.state
	    // console.log('instance...', Instance)
        return (
            <Instance {...this.props}/>
        )
    }
}

interface RenderElementsProps {
    items: Array<{id: number, type: string, data: object}>
}

interface RenderElementsStates {
    // items: Array<{id: number, type: string, data: object}>
}

export default class RenderElements extends React.Component<RenderElementsProps, RenderElementsStates> {
    state: RenderElementsStates = {

    }

    render() {

        return (
            <React.Fragment>
                {this.props.items.map((item, index) => {
                    return <ElementLoader key={index} type={item.type} data={item.data} id={item.id}/>
                })}
            </React.Fragment>

        )
    }
}