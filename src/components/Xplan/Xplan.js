import React, {
    Component
} from "react";
import "./Xplan.js";
import "../../assets/app.css";
import { connect } from 'react-redux';
import{Link} from 'react-router-dom';
class Xplan extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    // html
    render(){
        return (
            <div className="row trc-product-list-wrap">
                <div className=""></div>
                <div className="trc-product-list-container plan-list-wrap container">
                    <h3 className="mod-product-title row">
                        <span className="fs-16">出借计划推荐</span>
                        <span className="ptype-label">长期选择，持有2期后可转</span>
                    </h3>
                    <div className="list-container row">
                        <ul>
                            <li className="plan-pitem false  clearfix">
                                <Link className="block-link" to={'/home'}></Link>
                                <div className="row clearfix">
                                    <div className="pro-name col-md-24 clearfix">
                                        <span className="fs-14 c-999">u选计划24个月No.201811200007</span>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="pro-val">
                                            <span className="fs-26 c-f63">11<em className="fs-16">.10%</em></span>
                                        </div>
                                        <label className="pro-lab"><span> </span></label>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="pro-val">
                                            <span className="fs-18">24个月</span>
                                        </div>
                                        <div className="pro-lab nowrap">
                                            每月还息到期还本
                                        </div>
                                    </div>
                                    <div className="col-md-8 txtr">
                                        <div className="pro-val">
                                            <Link className="purchase-btn" to={'/home'}>抢购</Link>
                                        </div>
                                        <label className="pro-lab">剩余<em className="c-35">46.18万</em></label>
                                    </div>
                               </div>
                            </li>
                            <li className="plan-pitem false  clearfix">
                                <Link className="block-link" to={'/home'}></Link>
                                <div className="row clearfix">
                                    <div className="pro-name col-md-24 clearfix">
                                        <span className="fs-14 c-999">u选计划12个月No.201811200012</span>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="pro-val">
                                            <span className="fs-26 c-f63">10<em className="fs-16">.10%</em></span>
                                        </div>
                                        <label className="pro-lab"><span> </span></label>
                                    </div>  
                                    <div className="col-md-7">
                                        <div className="pro-val">
                                            <span className="fs-18">12个月</span>
                                        </div>
                                        <div className="pro-lab nowrap">
                                            每月还息到期还本
                                        </div>
                                    </div>
                                    <div className="col-md-8 txtr">
                                        <div className="pro-val">
                                            <Link className="purchase-btn" to={'/home'}>抢购</Link>
                                        </div>
                                        <label className="pro-lab">剩余<em className="c-35">107.53万</em></label>
                                    </div>
                               </div>
                            </li>
                            <li className="plan-pitem false  clearfix">
                                <Link className="block-link" to={'/home'}></Link>
                                <div className="row clearfix">
                                    <div className="pro-name col-md-24 clearfix">
                                        <span className="fs-14 c-999">u选计划12个月No.201811200017</span>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="pro-val">
                                            <span className="fs-26 c-f63">10<em className="fs-16">.10%</em></span>
                                        </div>
                                        <label className="pro-lab"><span> </span></label>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="pro-val">
                                            <span className="fs-18">12个月</span>
                                        </div>
                                        <div className="pro-lab nowrap">
                                            每月还息到期还本
                                        </div>
                                    </div>
                                    <div className="col-md-8 txtr">
                                        <div className="pro-val">
                                            <Link className="purchase-btn" to={'/home'}>抢购</Link>
                                        </div>
                                        <label className="pro-lab">剩余<em className="c-35">155.44万</em></label>
                                    </div>
                               </div>
                            </li>
                            <li className="plan-pitem false  clearfix">
                                <Link className="block-link" to={'/home'}></Link>
                                <div className="row clearfix">
                                    <div className="pro-name col-md-24 clearfix">
                                        <span className="fs-14 c-999">u选计划6个月No.201811200008</span>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="pro-val">
                                            <span className="fs-26 c-f63">7<em className="fs-16">.70%</em></span>
                                        </div>
                                        <label className="pro-lab"><span> </span></label>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="pro-val">
                                            <span className="fs-18">6个月</span>
                                        </div>
                                        <div className="pro-lab nowrap">
                                            每月还息到期还本
                                        </div>
                                    </div>
                                    <div className="col-md-8 txtr">
                                        <div className="pro-val">
                                            <Link className="purchase-btn" to={'/home'}>抢购</Link>
                                        </div>
                                        <label className="pro-lab">剩余<em className="c-35">4.60万</em></label>
                                    </div>
                               </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    // js
}

export default connect((state)=>{
    return state
})(Xplan);