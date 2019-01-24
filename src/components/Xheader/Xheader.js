import React, {
    Component
} from "react";
import "./Xheader.js";
import "../../assets/app.css";
import { connect } from 'react-redux';

class Xheader extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    // html
    render(){
        return (
            <div className="row mod-fund-wrap">
                <div className="row unlogin-panel clearfix"></div>
            </div>
        )
    }
    // js
}

export default connect((state)=>{
    return state
})(Xheader);