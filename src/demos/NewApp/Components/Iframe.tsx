import * as React from 'react'
import {StyleSheetManager} from "styled-components"
import {createPortal} from "react-dom"

export default class Iframe extends React.Component<{}, {root: Element}> {
    frame: React.RefObject<HTMLIFrameElement> = React.createRef()
    get iframe() {
        return this.frame.current
    }
    get document() {
        return this.iframe.contentDocument
    }
    get window() {
        return this.iframe.contentWindow
    }
    state = {
        root: null

    }

    componentDidMount() {
        this.iframe.addEventListener('load', (e: Event) => {
            // console.log('loading...')
            const root = this.iframe.contentDocument.querySelector('html')
	        this.iframe.contentDocument.body.remove()
            // console.log('root', root)
	        this.setState({root})
        })
    }

    render() {
        return (
            <iframe
	            width={500}
	            height={500}
                ref={this.frame}
                srcDoc={`<!DOCTYPE html><html><head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous"></head></html>`}
            >
	            {this.state.root && createPortal(
	            	<StyleSheetManager target={this.iframe.contentDocument.head}>
			            <body>{this.props.children}</body>
		            </StyleSheetManager>,
		            this.state.root
	            )}
            </iframe>
        )
    }
}