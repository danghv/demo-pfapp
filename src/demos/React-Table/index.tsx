import * as React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

export default class DemoReactTable extends React.Component {
    render() {
        return (
            <div>react - table
                <ReactTable
                    data={[{name: 'P1', age: 14, friend: {name: 'Pxx', age: 12}}, {name: 'P2', age: 15, friend: {name: 'Pyyy', age: 123}}]}
                    columns={[{
                        Header: 'Name',
                        accessor: 'name' // String-based value accessors!
                    }, {
                        Header: 'Age',
                        accessor: 'age',
                        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
                    }, {
                        id: 'friendName', // Required because our accessor is not a string
                        Header: 'Friend Name',
                        accessor: d => d.friend.name // Custom value accessors!
                    }, {
                        Header: props => <span>Friend Age</span>, // Custom header components!
                        accessor: 'friend.age'
                    }]}
                />
            </div>
        )
    }
}