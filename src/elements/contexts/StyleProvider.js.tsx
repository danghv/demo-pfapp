import * as React from 'react'

export const StyleContext1 = React.createContext({
	color: '',
	text: '',
	greeting: '',
	xxx: () => {},
})
export const StyleContext2 = React.createContext({color1: 'red', color2: 'blue', color3: 'yellow'})