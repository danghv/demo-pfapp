import {ClassType, cloneElement} from "react";
import uuid from "uuid";
import {elementInstances} from "../containers";

export const enhanceElement = (Element: ClassType<any, any, any>): ClassType<any, any, any> => {
    return class extends Element {
        constructor(props){
            super(props)
        }
        id: string = this.props.id || uuid()

        componentDidMount() {
            super.componentDidMount && super.componentDidMount()
            // console.log('log more...')
            // console.log('props...', this.props)
            // console.log('id..', this.id)
            elementInstances.set(this.id, this)
        }
        render() {
            const instance = super.render()
            return cloneElement(instance, {'data-element': this.id})
        }
    }
}