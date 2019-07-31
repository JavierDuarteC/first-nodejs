var React = require('react')
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    };
    componentDidMount() {
        this.timerID = setInterval(
            () => {
                this.tick(),
                    1000
            }
        );
    };
    componentWillUnmount() {
        clearInterval(this.timerID);
    };
    tick() {
        this.setState({
            date: new Date()
        });
    };
    render() {
        const element = (this.state.date.toLocaleTimeString());
        return (
            element
        );
    };
}
module.exports = Clock;