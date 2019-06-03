import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Eror404 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

    }

    componentDidMount() {
        console.log('eror 404');

    }

    render() {
        return (
            <div className="eror">
                <div>eror 404</div>
                <Link to={'/'}>На главную</Link>    
            </div>
        )
    }

}

export default Eror404;