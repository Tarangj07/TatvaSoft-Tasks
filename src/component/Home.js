import { Component } from "react";
// import { useState } from "react";
// import Title from "./Title";
// import HOC from "./HOC";
import UserList from "./UserList";

class Home extends Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         title: 'My home title',
    //         description: 'My home description'
    //     }
    // }

    userData = [
        {
            'id': 1,
            'name': 'Tarang'
        },
        {
            'id': 2,
            'name': 'Rishi'
        },
        {
            'id': 3,
            'name': 'Parth'
        }
    ]

    render() {
        return (
            <>
                <h1>This is Home Page</h1>
                {/* <button>Home</button>
                <Title state1={this.state}/> */}
                <UserList data={this.userData} />
            </>
        )

    }
}

export default Home;