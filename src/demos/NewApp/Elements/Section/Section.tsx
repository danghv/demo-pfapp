import * as React from 'react'
import {Container} from "unstated-x";
import {createElement} from "../../Components/createElement";
import { ElementContainer } from "../../stores/stores";

interface SectionProps {
    onClick: () => void
    // data: Container<{text: string, text2: string}>
    data: Container<{type: string, children: Array<string|number>, data: {text: string, text2: string}}>
}

interface SectionStates {
}

export class Section extends React.Component<SectionProps, SectionStates> {
    render() {
        // console.log('props...', this.props)
        // console.log('data props...', data)
        return (
            <div>
                aaa
            </div>
        )
    }
}

// export default createElement(Section, new ElementContainer({type: 'Section', children: [], data: {text: '', text2: ''}}))

