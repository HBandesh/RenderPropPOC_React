import React from 'react';

var fetchUrl = require("fetch").fetchUrl;

export class AvengerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    fetchAvengers = () => {
        fetchUrl("https://demo5413351.mockable.io/getAvengersList", (err, meta, body) => {
            this.setState({
                list: JSON.parse(body.toString()).avengers
            })
        })
    }

    componentDidMount = () => {
        this.fetchAvengers();
    }

    render() {
        return(
            <React.Fragment>
                {this.props.render(this.state.list)}
            </React.Fragment>
        )
    }
}