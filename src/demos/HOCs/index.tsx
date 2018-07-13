import * as React from 'react'
import El1 from "../../elements/E1";
import El4 from "../../elements/E4/E4"
import El5 from "../../elements/E5/E5"
import {Container, Provider, Subscribe} from "unstated-x"
import {AppContainer, E1Container, E4Container, E5Container, selected} from '../PageApp/stores'

function createElement(Element, container) {
    return class extends React.Component {
        componentDidMount() {
            // console.log('i am from log something function')
        }

        handleClick() {
            console.log('this', this)
            selected.setSelected(this)
        }

        render() {
            return (
                <Subscribe to={[container]}>
                    {(data) => {
                        // console.log('data...', data)
                        return (
                            <Element
                                data={data}
                                otherProps={{
                                	onClick: this.handleClick
                                }}
                            />
                        )
                    }}
                </Subscribe>
            )
        }
    }
}
export const Element1 = createElement(El1, E1Container)
export const Element5 = createElement(El5, E5Container)
export const Element4 = createElement(El4, E4Container)

interface InspectorProps {
    selected: Container<{
        selected: {}
    }>
}
class Inspector extends React.Component<InspectorProps, {}> {
    render(){
        console.log('selected inspector...', this.props.selected.state)
        // console.log('state inspector...', this.props.selected.state)
        // console.log('state inspector selected...', this.props.selected.state.selected)
        // console.log('state inspector selected data...', this.props.selected.state.selected.data)
        const data = this.props.selected.state
        // if (!selected) {
        //     return null
        // }
        // console.log('selected state...', selected.state)
        // console.log('state inspector selected data state...', this.props.selected.state.selected.data.state)
        return (
            <div
                style={{float: 'right'}}
            >
                <h1>inspector</h1>
                <input
	                // value={data.text}
	                // onChange={(e) => {
	                // 	this.props.selected.setState({text: e.target.value})
	                // }}
                />
            </div>
        )
    }
}

export default class DemoHOC extends React.Component {

    render(){
        return (
            <Provider>
                <div style={{float: 'left'}}>
                    <Element5 />
                    <Element4 />
                </div>

                <Subscribe to={[selected]}>
                    {(selected) => {
                    	if (!selected.state.selected.data){
                    		return null
	                    }
	                    // console.log('////', selected.state.selected)
	                    const container = selected.state.selected.data
	                    return (
		                    <Subscribe to={[container]}>
			                    {(data) => {
			                    	console.log('data...', data)
				                    return (
					                    <div style={{float: 'right'}}>
						                    <Inspector selected={data} />
					                    </div>
				                    )
			                    }}
		                    </Subscribe>
	                    )
                    }}
                </Subscribe>

            </Provider>
        )
    }
}