import React from "react";

class UsersClass extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            count2: 2
        }
    }
    render() {
        const {name} = this.props;
        return (
            <div className="user-data">
                <i>{this.state.count}</i>
                <i>{this.state.count2}</i>
                <h1>Name: {name}</h1>
                <p>Location: Bellary</p>
                <p>Contact: 19309109312</p>
            </div>
        );
    }
}

export default UsersClass;