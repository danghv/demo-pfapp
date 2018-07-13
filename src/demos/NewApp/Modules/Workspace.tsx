import * as React from 'react'
import E1 from '../Elements/E1/E1'
import E2 from '../Elements/E2/E2'
import E3 from '../Elements/E3/E3'
import {Container, Provider} from "unstated-x"
import RenderElements from "../Components/RenderElements";
import Iframe from "../Components/Iframe";
import uuid from 'uuid'

interface WorkspaceProps {

}

interface WorkspaceStates {
	items: Array<{id: number, type: string, children: Array<string|number>, data: object}>
}

export default class Workspace extends React.Component<WorkspaceProps, WorkspaceStates> {

	state: WorkspaceStates = {
		items: [
			{
				id: uuid(),
				type: 'E1',
				children: [],
				data: {
					text: 'xxx',
					text2: 'yyy'
				}
			},
			{
				id: uuid(),
				children: [],
				type: 'E3',
				data: {}
			},
			{
				id: uuid(),
				children: [],
				type: 'Section',
				data: {}
			}
		],
	}

	handleExport = () => {
		const iframe = document.querySelector('iframe').contentDocument
		console.log('iframe...', iframe)
		const page = iframe.querySelector('html').outerHTML
		console.log('page...', page)
	}

	// handleClick = (itemType) => {
	// 	const newItems = this.state.items
	// 	newItems.push({id: 1, type: itemType, data: {text: 'a', text2: 'b'}})
	// 	this.setState({items: newItems})
	// }
    render() {
        return (
            <div
                style={{width: '800px', height: '1000px', background: 'grey', float: 'left'}}
            >
                Workspace
                {/*<Provider>*/}
	                {/*<RenderElements items={this.state.items}/>*/}
	                {/*<button*/}
	                    {/*onClick={this.handleClick}*/}
	                {/*>Add</button>*/}
                {/*</Provider>*/}

	            <Iframe>
		            <Provider>
			            <RenderElements items={this.state.items}/>
			            {/*<input type="text" value={this.state.itemType} onChange={(e) => this.setState({itemType: e.target.value})}/>*/}
			            {/*<button*/}
				            {/*onClick={() => this.handleClick(this.state.itemType)}*/}
			            {/*>Add</button>*/}
		            </Provider>
	            </Iframe>
	            <button
	                onClick={this.handleExport}
	            >Export</button>

            </div>
        )
    }
}