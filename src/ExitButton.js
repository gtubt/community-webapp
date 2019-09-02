import React from 'react';

export default class ExitButton extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.callbackLogout(true);
    }

    render() {
        return <button
            className="btn btn-light"
            onClick={this.handleClick}
        >
            Çıkış
        </button>
    }
}
