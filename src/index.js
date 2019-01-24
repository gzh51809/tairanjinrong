import React from 'react';
// axios
import axios from 'axios';


// 虚拟DOM
import ReactDOM from 'react-dom';


// 路由功能
import { HashRouter as Router, Route , Redirect} from "react-router-dom";

// 状态管理
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import './assets/app.css';
// 子组件 复用组件
// 页面组件 容器组件
import Terran from './pages/Terran/Terran.jsx';

import Detail from './pages/Detail/Detail.jsx';
import * as serviceWorker from './serviceWorker';
React.axios = axios;
//创建仓库
const store = createStore(function(state={
    name:"qq",
    skill:"ps",
    isShowActionSheet:false
}, action){
    const count = state.count
    switch (action.type) {
      case 'increase':
        return {
          ...state,
          count: count + 2
        }
      case 'multi':
        return Object.assign({}, state, {name: action.name});
      case 'editText':
        return {
            ...state,
            text:action.text
        }
      default:
        return state
    }
});

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/terran/" component={Terran} />
                <Route path="/detail/:id/:id" component={Detail} />
            </div>
        </Router>
        </Provider>
    , 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();