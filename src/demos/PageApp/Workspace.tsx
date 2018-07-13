// import * as React from 'react'
// import {Subscribe} from "unstated-x";
// import {AppContainer, CounterContainer, E1Container, E3Container, E4Container} from "./stores";
// import E1 from "../../elements/E1";
// import E3 from "../../elements/E3/E3";
// import E4 from "../../elements/E4/E4";
// import { Element1, Element3} from "../HOCs";
//
// interface WorkspaceProps {
// }
//
// interface WorkspaceStates {
//
// }
//
// export default class Workspace extends React.Component<WorkspaceProps, WorkspaceStates> {
//     state: WorkspaceStates = {}
//
//     render() {
//         return(
//             <div
//                 style={{ float: 'left', width: '800px', height: '500px'}}
//             >
//                 <h1>Workspace</h1>
// 	            <Subscribe to={[CounterContainer]}>
// 		            {(counter:CounterContainer) => (
// 			            <div>
// 				            <button onClick={() => counter.decrement()}>-</button>
// 				            <span>{counter.state.count}</span>
// 				            <button onClick={() => counter.increment()}>+</button>
// 				            <button onClick={() => counter.setSelected({show: 'show a'})}>show a</button>
// 				            <button onClick={() => counter.setSelected({show: 'show b'})}>show b</button>
// 			            </div>
// 		            )}
// 	            </Subscribe>
//
// 	            {/*<Subscribe to={[E1Container, AppContainer]}>*/}
// 		            {/*{(dataE1: E1Container, selected: AppContainer) => {*/}
// 			            {/*return (*/}
// 				            {/*<div>*/}
// 					            {/*<E1*/}
// 						            {/*handleOnClick={() => selected.setSelected(dataE1.state)}*/}
// 						            {/*handleOnChangeInput1={(e) => dataE1.setTextInput1(e)}*/}
// 						            {/*{...dataE1.state}/>*/}
// 				            {/*</div>*/}
// 			            {/*)*/}
// 		            {/*}}*/}
// 	            {/*</Subscribe>*/}
//
// 	            <Subscribe to={[E3Container, AppContainer]}>
// 		            {(dataE3: E3Container, selected: AppContainer) => {
// 			            // console.log('stores:...', dataE3, selected)
// 			            return (
// 				            <E3
// 					            handleOnClick={() => selected.setSelected((dataE3.state))}
// 					            handleOnChangeInput1={(e) => dataE3.setTextInput1(e)}
// 					            {...dataE3.state}/>
// 			            )
// 		            }}
// 	            </Subscribe>
//
// 	            <Subscribe to={[E4Container, AppContainer]}>
// 		            {(dataE4: E4Container, selected: AppContainer) => {
// 			            // console.log('data: ', dataE4)
// 			            return (
// 				            <E4
// 					            {...dataE4.state}
// 					            handleOnClick={() => selected.setSelected((dataE4.state))}
// 					            handleOnChangeInput1={(e) => dataE4.setTextInput1(e)}
// 				            />
// 			            )
// 		            }}
// 	            </Subscribe>
// 	            {/*<Element1 />*/}
// 	            {/*<Element3 />*/}
//             </div>
//     )
//     }
// }