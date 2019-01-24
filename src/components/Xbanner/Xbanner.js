import React, {
    Component
} from "react";
import "./Xbanner.js";
import "../../assets/app.css";
import { Carousel } from 'antd';
import "../../assets/antd.css";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import { connect } from 'react-redux';
import{Link} from 'react-router-dom';
class Xbanner extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    // html
    render(){
        return (
            <div className="trc-slide-banner-wrap row">
                <div className="swiper-container swiper-container-horizontal">
                    <Carousel autoplay>
                        <li className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2">
                            <Link  to={'/home'}>
                                <img src={banner1} title="前往APP发现更多，点我立即下载" alt="前往APP发现更多，点我立即下载"/>
                            </Link>
                        </li>
                        <li className="swiper-slide" data-swiper-slide-index="0">
                            <Link  to={'/home'}>
                                <img src={banner2} title="前往APP发现更多，点我立即下载" alt="前往APP发现更多，点我立即下载"/>
                            </Link>
                        </li>
                        <li className="swiper-slide" data-swiper-slide-index="1">
                            <Link  to={'/home'}>
                                <img src={banner3} title="前往APP发现更多，点我立即下载" alt="前往APP发现更多，点我立即下载"/>
                            </Link>
                        </li>
                    </Carousel>
                </div>
            </div>
        )
    }
    // js
    
}

export default connect((state)=>{
    return state
})(Xbanner);
