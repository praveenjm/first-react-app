import Users from "./Users";
import UsersClass from "./UsersClass";
const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is the about page</h2>
            <Users name={"praveen (function)"} />
            
            <UsersClass name={"praveen class"} />
        </div>
    );
};

export default About;