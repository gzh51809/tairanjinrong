import React, {
	Component
} from 'react';

// import Xdheader from '../../components/Xdheader/Xdheader.jsx';
import { Route,Link} from "react-router-dom";
import Xiangmuzucheng from '../../components/Xiangmuzucheng/Xiangmuzucheng.js';
import Xiangmujieshao from '../../components/Xiangmujieshao/Xiangmujieshao.js';
import Xjilu from '../../components/Xjilu/Xjilu.js';
class Details extends Component {
	constructor(props){
		super(props);
		this.state = {
			xiangmu:[{
				title:"项目介绍",
				href:"/detail/xiangmujieshao"
			},{
				title:"项目组成",
				href:""
			},{
				title:"出借记录",
				href:""
			}],
			tab:0,
			list:{}
		};
		
	}
	
	huoqu(){
		var id=this.props.history.location.pathname.slice(-32)
		console.log(id)

		React.axios.get("proxy/trc_bjcg/plan/m/planDetails/"+id).then((response) => {
            console.log(response.data.data);
            let list = response.data.data
            console.log(list.PRODUCTDESCRIPTION[0])
            this.setState({
            	list
            })
            
        }).catch(function (error) {
            console.log(error);
        });

	}
	xuanze(index,e){
		this.setState({
			tab:index
		})
		if(index==0){
		this.props.history.push('/details/xiangmujieshao')
		}else if(index==1){
		this.props.history.push('/details/xiangmuzucheng')
		}else if(index==2){
		this.props.history.push('/details/jilu')
		}

		}
	
	render() {
		return(
				<div className="page-loan-detail">
					<div>
						<div className="mod-product-wrap">
							<div className="col-md-24 pro-base-info">
								<div className="pro-rate">
									<div className="rate"><span className="fs-40">{this.state.list.baseRate}<em className="fs-24">%</em></span></div><label className="c-bce2f7">预期年化</label></div>
								<div className="row attribute">
									<ul className="clearfix">
										<li className="col-md-12 txtc"><span>{this.state.list.availShare}.00</span><br/><label>剩余金额(元)</label></li>
										<li className="col-md-12 txtc"><span>24个月</span><br/><label>服务期限</label></li>
									</ul>
								</div>
								<div className="pro-progress">
									<div className="progress-inner transition" style={{width: "56%"}}><span className="location"><i className="text">已售56%</i></span></div>
								</div>
							</div>
							<div className="pro-quota">
								<div className="col-md-24 clearfix">
									<label className="col-md-14 txtl c-999 fs-14">项目价值<em className="c-333">500,000.00</em>元</label>
									<span className="col-md-10 txtr c-999 fs-12 nowrap"></span>
								</div>
							</div>
						</div>
						<div className="layer-brief-wrap">
							<div className="container">
								<h3 className="col-md-24 title">项目简介</h3>
								<ul className="col-md-24 list">
									<li className="row clearfix"><label className="col-md-8">项目名称</label><span className="col-md-16">u选计划24个月No.201811230021</span></li>
									<li className="row clearfix"><label className="col-md-8">出借条件</label><span className="col-md-16">出借额度不限</span></li>
									<li className="row clearfix"><label className="col-md-8">还款方式</label><span className="col-md-16">每月还息到期还本</span></li>
									<li className="row clearfix"><label className="col-md-8">转让条件</label><span className="col-md-16">持有2个月后可以转让(参加活动除外)</span></li>
									<li className="row clearfix"><label className="col-md-8">发布时间</label><span className="col-md-16">2018-11-23 14:13:50</span></li>
									<li className="row clearfix"><label className="col-md-8">募集期</label><span className="col-md-16">72小时</span></li>
									<li className="row clearfix"><label className="col-md-8">起息日期</label><span className="col-md-16">2018-11-26（含）之前</span></li>
									<li className="row clearfix"><label className="col-md-8">募集结束时间</label><span className="col-md-16">2018-11-26 14:13:50</span></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="products-info-wrap">
						<div >
							<div className=" swiper-subassembly">
								<div className="swiper-tab">
									<ul className="clearfix swiper-pagination-clickable swiper-pagination-bullets">
										
										{(()=>{
											return this.state.xiangmu.map((item,index)=>{
												return (
													<li className={this.state.tab===index?"bullet activity":"bullet"}  key={index} onClick={this.xuanze.bind(this,index)}>{item.title}</li>
												)
											})
										})()}
									</ul>
								</div>
								
								<Route path="/details/xiangmujieshao" component={Xiangmujieshao} />
                				<Route path="/details/xiangmuzucheng" component={Xiangmuzucheng} />
                				<Route path="/details/jilu" component={Xjilu} />
                				
							</div>
						</div>
					</div>
                	
                	
					
					
			
					<div className="suspend-nav-wrap">
						<div className="suspend-nav-container">
							<ul>
								<li className="nav-item transition home">
									<Link to="/terran/home"><span className="icon">首页</span></Link>
								</li>
								<li className="nav-item transition calculator">
									<a href="https://jrhelp.trc.com/calculator/trc_calculator_h5?yearRate=11.10&amp;repayMethod=1&amp;term=0&amp;termMonth=24">
										<span className="icon"></span>
									</a>
								</li>
								<li className="nav-item transition backtop" style={{display:" none"}}><span className="icon">顶部</span></li>
							</ul>
						</div>
					</div>
					<div className="container mod-purchase-bar">
						<div className="row orange-bar">
							<div className="col-md-24">
								<Link className="block-link" to="/Xshenfen"></Link><span>请先实名认证</span></div>
						</div>
					</div>
				</div>
		)
	}
	componentDidMount(){
    	 this.huoqu()
    }
}
export default Details;