import { useState } from "react";

const Users = (props) => {
    const [count] = useState(0);
    const [count1] = useState(1);
    return (
        <div className="user-data">
            <i>{count}</i>
            <i>{count1}</i>
            <h1>Name: {props.name}</h1>
            <p>Location: Bellary</p>
            <p>Contact: 19309109312</p>
        </div>
    );
};

export default Users;