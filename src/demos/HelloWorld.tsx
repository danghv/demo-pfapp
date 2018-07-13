import * as React from 'react'

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    job: string;
}

// function Hello({ name, enthusiasmLevel = 1, job }: Props) {
//     if (enthusiasmLevel <= 0) {
//         throw  new Error('You could be a little more enthusiastic.')
//     }
//
//     return (
//         <div>
//             Hello {name + getExclamationMarks(enthusiasmLevel)}
//             <h1>i am {job}</h1>
//         </div>
//     )
// }
// export default Hello
//
function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!')
}
export default class Hello extends React.Component<Props, object> {
    render() {
        const { name, enthusiasmLevel, job } = this.props
        if (enthusiasmLevel <= 0) {
            throw new Error('You are so rude!')
        }
        return (
            <div>
                <h1>Hello {name + Array(enthusiasmLevel + 1).join('!')}, i do {job}</h1>
                <button>+</button>
                <button>-</button>
            </div>

        )
    }
}