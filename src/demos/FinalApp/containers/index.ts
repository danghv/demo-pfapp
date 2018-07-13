import {Container} from "unstated-x";
import uuid from 'uuid'

interface ElementContainerState {
    id: string
    type: string
    children: Array<string | number>
    data: object
}



class Selected extends Container<{selected: Container<ElementContainerState>}>{
    state = {
        selected: null
    }
}

export const SelectedContainer = new Selected()

export class ElementContainer extends Container<ElementContainerState>{
    
}

export const defaultItems = () => {
    const bodyKey = uuid()
    const layoutKey = uuid()
    const sectionKey = uuid()
    const buttonKey = uuid()
    const paragraphKey = uuid()
    // console.log(bodyKey, layoutKey, sectionKey, buttonKey, paragraphKey)
    return {
        [bodyKey]: new ElementContainer({id: bodyKey, type: 'Body', children: [layoutKey], data: {}}),
        [layoutKey]: new ElementContainer({id: layoutKey, type: 'Layout', children: [sectionKey], data: {}}),
        [sectionKey]: new ElementContainer({id: sectionKey, type: 'Section', children: [buttonKey, paragraphKey], data: {}}),
        [buttonKey]: new ElementContainer({id: buttonKey, type: 'Button', children: [], data: {text: 'This is a button', background: 'red'}}),
        [paragraphKey]: new ElementContainer({id: paragraphKey, type: 'Paragraph', children: [], data: {text: 'This is a paragraph', color: 'green', fontSize: '16px'}})
    }
}

export class Items extends Container<{[id: string]: ElementContainer}>{
    get bodyKey() {
        return Object.keys(this.state).find((key) => this.state[key].state.type === 'Body')
    }
}

class App extends Container<{}> {
    state: {mode: string} = {
        mode: 'edit'
    }

    get mode() {
        return this.state.mode
    }
    set mode(mode) {
        this.setState({mode})
    }
}

export const ItemsContainer = new Items(defaultItems())

export const AppContainer = new App()

export const elementInstances = new Map()

window.ItemsContainer = ItemsContainer