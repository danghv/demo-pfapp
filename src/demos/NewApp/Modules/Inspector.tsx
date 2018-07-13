import * as React from 'react'
import {Subscribe} from "unstated-x";
import {selected} from "../stores/stores";

export default class Inspector extends React.Component {
    render() {
        return (
            <div
                style={{width: '400px', height: '1000px', float: 'right'}}
            >
                Inspector
	            <Subscribe to={[selected]}>
		            {data => {
		            	if (data.state.selected === null) {
		            		return null
			            }
		            	console.log('data...', data)
			            const ElementContainer = data.state.selected
			            // console.log('inspector...',ElementContainer)
		            	return (
		            		<Subscribe to={[ElementContainer]}>
					            {element => {
					            	console.log('element...', element)
						            // console.log('a...', element)
					            	return (
					            		<div>
								            <input
									            value={element.state.data.text}
								                onChange={(e) => {
								                	const data = Object.assign({}, element.state.data)
									                data.text = e.target.value
									                element.setState({data})
								                }}
								            />
								            <input
									            value={element.state.data.text2 || ''}
									            onChange={(e) => {
										            const data = Object.assign({}, element.state.data)
										            data.text2 = e.target.value
										            element.setState({data})
									            }}
								            />
							            </div>
						            )
					            }}
				            </Subscribe>
			            )
		            }}
	            </Subscribe>
            </div>
        )
    }
}