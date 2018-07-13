import { Container } from "unstated-x"
import uuid from 'uuid'



const registry: { [key: number]: Container<{}>} = {
    0: new Container({
        id: uuid(),
        type: 'Body',
        data: {},
        children: []
    })
}

export default registry