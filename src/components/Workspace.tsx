import * as React from 'react'
import E1 from '../elements/E1'
import E2 from '../elements/E2/E2'
import { RefsContext } from '../stores/refs'
import {Subscribe} from "unstated-x"
import { E1Container } from "../stores/E1Container";
import { E2Container } from "../stores/E2Container";
import { appContainer } from "../stores/app";
import { Element1 } from "../demos/HOCs";


interface WorkspaceProps {
}

interface WorkspaceStates {

}

export default class Workspace extends React.Component<WorkspaceProps, WorkspaceStates> {
	state: WorkspaceStates = {}
    render() {
        return(
	        <div
		        style={{background: 'grey', float: 'left', width: '800px', height: '500px'}}
	        >
		        <h1>Workspace</h1>
		        <Subscribe to={[E1Container]}>
			        {(data: E1Container) => {
			        	console.log('E1 data...', data)
				        return (
				        	<E1
						        {...data.state}
						        handleMouseDown={() => data.handleMouseDown()}
					        />
				        )
			        }}
		        </Subscribe>

		        <Subscribe to={[E2Container]}>
			        {(E2data: E2Container) => {
				        console.log('E2 data...', E2data)
				        console.log('app data...', appContainer)
				        // appContainer.handleMouseDown(E2data)
				        return (
					        <E2
						        {...E2data.state}
						        showSomething={() => E2data.showSomething()}
						        handleMouseDown={() => E2data.handleMouseDownE2()}
						        handleOnChangeE2Input={e => E2data.handleOnChangeE2Input(e)}
						        handleOnChangeE2={e => E2data.handleOnChangeE2(e)}

					        />
				        )
			        }}
		        </Subscribe>



	        </div>
        )
    }
}