import * as React from 'react'
import { RefsContext } from '../stores/refs'
import {Subscribe} from "unstated-x";
import { appContainer } from "../stores/app";


interface InspectorProps {

}

interface InspectorStates {

}

export default class Inspector extends React.Component<InspectorProps, InspectorStates> {

    render() {
    	console.log('app container........', appContainer)
        return (
	        <div style={{float: 'right', width: '300px', height: '700px', background: '#e8ebef'}}>
		        <h1>Inspector</h1>
			        {(appContainer) => {
			        	console.log('app container inspector...', appContainer)
				        return (
				        	<div>
						        <label>Width:
							        <input
								        name='width'
							        />
						        </label>
					        </div>
				        )
			        }}
	        </div>
        )
    }
}