import {Container} from "unstated-x";
import {getHashes} from "crypto";

interface AppStates {
    selected: object;
}

class AppContainer extends Container<AppStates>{
    state = {
        selected: {},
    }
    
    setSomething = (a) => {
        console.log('mouse down app...')
        this.setState({selected: a})
    }
}

// export {AppContainer}
export const appContainer = new AppContainer()