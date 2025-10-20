import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement('div', {id:"parent"}, [
    React.createElement('div', {className:"child1"},[
        React.createElement('h1', {}, "this is h1"), 
        React.createElement('h2', {}, "this is h2")
    ]),
    React.createElement('div', {className:"child2"},[
        React.createElement('h1', {}, "this is h1"), 
        React.createElement('h2', {}, "this is h2")
    ]) 
]);
const title = <h1>React Element</h1>
const ButtonComponent = () => (
  <button>New Button</button>
)
const ButtonNew = (<button>yes</button>);
const HeaderComponent = () => (
    // title;
    
    // <React.Fragment>
    <div>
        <div>

            
            {title}
            <h1>This is a React Component</h1>
            <h2>Hello</h2>
        </div>
        {ButtonNew}
        {ButtonComponent()}
        <ButtonComponent/>
        <ButtonComponent></ButtonComponent>
        <div>
            Other Component
        </div>
        <div>Other fragment</div>
        <div>Other fragment</div>
    </div>
    
    // </React.Fragment>
    
)
const jsxSyntax = <h1>Hello JSX</h1>
// console.log(heading);
// let a = heading.$$typeof;
// console.log(typeof a);
// console.log(typeof heading);
const root = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root.render(parent);
root2.render(<HeaderComponent/>);