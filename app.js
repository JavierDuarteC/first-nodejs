var React = require('react');
var ReactDOM = require('react-dom');
var Clock = require('./reloj.js');


// ReactDOM.render(
//     <div>Hola mundo cruel!</div>, document.getElementById('main')
// );

function tick() {
    const element = (
        <div>
            <h1>Hola, mundo cruel!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document
            .getElementById('main')
    );
}
setInterval(tick, 1000);

ReactDOM.render(<Clock />,
    document.getElementById('main1')
);