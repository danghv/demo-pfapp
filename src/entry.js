/**
 * Webpack entry for main application
 *
 * @author: Phong Vu
 */

import { render } from 'react-dom'
import * as React from 'react'
import Example from 'elements/Example'
// import Workspace from "./components/Workspace";
// import Inspector from "./components/Inspector";
import Layout from "./components/Layout";
import DemoContext from "./elements/DemoContext";
import DemoUnstated from "./elements/DemoUnstated";
import DragDrop from "./demos/DragDrog/DragDrop";
import App from "./demos/PageApp/App";
import DemoHOC from "./demos/HOCs";
// import NewApp from "./demos/NewApp";
import FinalApp from "./demos/FinalApp";
// import DemoReactTable from "./demos/React-Table";

// import HelloWorld from 'elements/HelloWorld'
// import Hello from 'elements/Hello'
// import HelloBobo from 'elements/HelloBobo'



render(
	<div>
		{/*This is a demo application*/}
		{/*<Example />*/}
		{/*<HelloWorld name={'shake'} job={'abc'} enthusiasmLevel={2}/>*/}
		{/*<Hello />*/}
		{/*<HelloBobo a={'11'} b={12}/>*/}
		{/*<DemoUnstated />*/}
		{/*<DemoContext />*/}
		{/*<DragDrop />*/}
		{/*<Layout/>*/}
		{/*<DemoHOC/>*/}
		{/*<App/>*/}
		{/*<NewApp />*/}
		<FinalApp/>
		{/*<DemoReactTable/>*/}
	</div>,
	document.getElementById('app')
)
