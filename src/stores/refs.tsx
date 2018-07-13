import * as React from "react"

export const RefsContext = React.createContext({
	selected: null,
    element1: {
		width: '',
	    height: '',
	    background: '',
    },
	xxx: () => {},
    // handleMouseDown: () => {}
})