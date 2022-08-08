/*
 * @Author: wangzhenggui jianjia.wzg@raycloud.com
 * @Date: 2022-08-08 16:56:38
 * @LastEditors: wangzhenggui jianjia.wzg@raycloud.com
 * @LastEditTime: 2022-08-08 17:02:23
 * @FilePath: /webpack-react-template/src/index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by wangzhenggui jianjia.wzg@raycloud.com, All Rights Reserved. 
 */
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <Router />
  </HashRouter>,
  document.getElementById("app")
);