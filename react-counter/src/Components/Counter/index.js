import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {countNumber: 0};
        this.increaseNumber = this.increaseNumber.bind(this);
        this.decreaseNumber = this.decreaseNumber.bind(this);
    }

    increaseNumber() {
        this.setState(prevState => ({
            countNumber: prevState.countNumber + 1
        }));
    }

    decreaseNumber() {
        this.setState(prevState => ({
            countNumber: prevState.countNumber - 1
        }));
    }
    render() {
        return(
            <div className='count'>
                <h1 className={(this.state.countNumber > 0) ? 'red' : 'blue'}>{this.state.countNumber}</h1>
                <div className='buttons'>
                    <button onClick={this.increaseNumber}>+</button>
                    <button onClick={this.decreaseNumber}>-</button>
                </div>
            </div>
        )
    }
}

export default Counter;