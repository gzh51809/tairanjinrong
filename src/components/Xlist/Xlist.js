import React, {
    Component
} from "react";
import "./Xlist.js";
import "../../assets/app.css";
import img1 from "../../assets/0_1.png";
import img2 from "../../assets/0_2.png";
import img3 from "../../assets/0_3.png";
import img4 from "../../assets/0_4.png";
import img5 from "../../assets/0_5.png";
import { connect } from 'react-redux';
import{Link} from 'react-router-dom';
class Xlist extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    // html
    render(){
        return (
            <div className="row enter-list">
                <ul className="clearfix">
                    <li>
                        <Link to={'/home'}>
                            <div className="enter-icon">
                                <div className="ui-icon-item" style={{backgroundImage:'url('+img1+')'}}></div>
                            </div>
                            <span>小泰社区</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/home'}>
                            <div className="enter-icon">
                                <div className="ui-icon-item" style={{backgroundImage:'url('+img2+')'}}></div>
                            </div>
                            <span>新手必读</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/home'}>
                            <div className="enter-icon">
                                <div className="ui-icon-item" style={{backgroundImage:'url('+img3+')'}}></div>
                                </div>
                            <span>运营报告</span>
                        </Link>
                    </li>
                    <li><Link to={'/home'}>
                            <div className="enter-icon">
                                <div className="ui-icon-item" style={{backgroundImage:'url('+img4+')'}}></div>
                            </div>
                            <span>信息披露</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/home'}>
                            <div className="enter-icon">
                                <div className="ui-icon-item" style={{backgroundImage:'url('+img5+')'}}></div>
                            </div>
                            <span>小泰微课</span>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
    // js
}

export default connect((state)=>{
    return state
})(Xlist);