import * as React from 'react'
import Workspace from "./Modules/Workspace";
import Inspector from "./Modules/Inspector";
import {Provider} from "unstated-x";

export default class NewApp extends React.Component {
    render() {
        return (
            <div>
                <Provider>
	                <Workspace/>
	                <Inspector/>
                </Provider>
            </div>
        )
    }
}