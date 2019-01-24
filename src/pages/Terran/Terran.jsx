import React, {
    Component
} from "react";
import "./Terran.jsx";
import "../../assets/webStatistics.css";

import Home from '../Home/Home.jsx';
import Contact from '../Contact/Contact.jsx';

import Xfooter from '../../components/Xfooter/Xfooter.js';
import { Route } from "react-router-dom";
class Terran extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="trc-product-list-wrap">
                <Route path="/terran/home" component={Home} />
                <Route path="/terran/contact" component={Contact} />
                <Xfooter/>
            </div>
        )
    }
}

export default Terran;