import React, {
    Component
} from "react";
import "../../assets/app.css";
// import iconTabbar from "../../assets/icon_tabbar.png";
import { Link } from "react-router-dom";

// v-if  
// v-show
// v-for
// v-model
class Xfooter extends Component {
    constructor(props){
        super(props);
        this.state = {
            tab:0,
            tabs:[{
                title:"首页",
                href:"home",
                className:"nav-home",
                dot:false
            },{
                title:"出借",
                href:"contact",
                className:"nav-invest",
                dot:false
            },{
                title:"我的",
                href:"my",
                className:"nav-user",
                dot:true
            }]            
        }
    }
    ing(n){
        return n+"ing"
    }
    toggleTab(index,e){
        this.setState({
            tab:index
        })
    }
    render(){
        return (

            <div className="ui-module-bottom_navBar container">
                <ul className="clearfix">
                    {(()=>{
                        return this.state.tabs.map((item,index)=>{
                            return(
                                <li className="col-md-8 item">
                                    <Link to={`/terran/${item.href}`} onClick={this.toggleTab.bind(this,index)} key={index} className={this.state.tab===index?"active":""} aria-current={this.state.tab===index?"page":""}>
                                        <span className={`nav-icon ${item.className}`}></span>
                                    </Link>
                                </li>
                            )
                        })
                    })()}
                </ul>
            </div>
        )
    }
}
export default Xfooter;
