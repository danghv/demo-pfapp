import {Container} from "unstated-x";

type ElementState = {
    id: number,
    type: string,
    children: Array<string|number>,
    data: object
}

export class ElementContainer extends Container<ElementState>{
    static inspector() {
        return 'i am inspector...'
    }
    static a() {
        console.log('a')
    }

}

export class SelectedContainer extends Container<{selected: ElementContainer}>{
    state = {
        selected: null
    }
}

export const selected = new SelectedContainer()