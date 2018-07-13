import * as React from 'react'
import Workspace from "./Workspace";
import Inspector from "./Inspector";
import { Provider } from "unstated-x";


interface AppProps {
}

interface AppStates {

}

export default class App extends React.Component<AppProps, AppStates> {
    state: AppStates = {}
    render() {
        return(
            <Provider>
                <div>
                    <Workspace/>
                    <Inspector/>
                </div>
            </Provider>
    )
    }
}