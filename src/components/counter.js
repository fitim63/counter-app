import React, {Component} from "react";


class Counter extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-1"><span className={this.getBadgeClasses()}> {this.formatCount()} </span>
                    </div>
                    <div className="col">
                        <button onClick={() => this.props.onIncrement(this.props.counter)}
                                className="btn btn-secondary btn-sm">+
                        </button>
                        <button onClick={() => this.props.onDecrement(this.props.counter)}
                                disabled={this.props.counter.value === 0} className="btn btn-secondary btn-sm m-2">-
                        </button>
                        <button onClick={() => this.props.onDelete(this.props.counter.id)}
                                className="btn btn-danger btn-sm">x
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        return classes += (this.props.counter.value === 0) ? "warning" : "primary";
    }
}


export default Counter;