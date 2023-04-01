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
// console.log(heading);
// let a = heading.$$typeof;
// console.log(typeof a)
// console.log(typeof heading)
const root = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root.render(parent);
root2.render(parent);