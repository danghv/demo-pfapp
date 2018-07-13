import * as React from 'react'
import Workspace from "./Workspace"
import Inspector from "./Inspector"
import { RefsContext } from '../stores/refs'
import { Provider } from "unstated-x"

interface LayoutProps {

}

interface LayoutStates {

}

export default class Layout extends React.Component {
	render() {
		return (
			<Provider>
				<div>
					<Workspace/>
					<Inspector/>
				</div>
			</Provider>
		)
	}
}