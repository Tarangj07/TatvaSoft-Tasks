import React, { Component } from 'react'
import HOC from './HOC'

class UserList extends Component {
    render() {
        const { data } = this.props
        return (
            <>
                <h2>List of Users is as follows:</h2>
                <table align='center' style={{ borderCollapse: 'separate', borderSpacing: '25px' }}>
                    <thead style={{ fontWeight: 800, fontSize: 20 }}>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                        </tr>
                    </thead>
                    {data.map((user, index) => (
                        <tbody key={index}>
                            <tr style={{ margin: '0p 5px' }}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </>
        )
    }
}

export default HOC(UserList)