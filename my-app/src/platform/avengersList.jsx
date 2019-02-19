import React from 'react';

export class AvengerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    fetchAvengers = () => {
        fetch("https://demo5413351.mockable.io/getAvengersList").then((res)=> res.json()).then((resp)=> {
            this.setState({
                list: resp.avengers
           });
        });
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