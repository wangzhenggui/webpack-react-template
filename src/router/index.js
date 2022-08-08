/*
 * @Author: wangzhenggui jianjia.wzg@raycloud.com
 * @Date: 2022-08-08 17:02:45
 * @LastEditors: wangzhenggui jianjia.wzg@raycloud.com
 * @LastEditTime: 2022-08-08 17:03:39
 * @FilePath: /webpack-react-template/src/router/index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by wangzhenggui jianjia.wzg@raycloud.com, All Rights Reserved. 
 */
import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import Home from "../pages/Home.jsx";
import Count from "../pages/Count.jsx";
const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      <Link to="/">toHome</Link>&emsp;|&emsp;
      <Link to="/count">toCount</Link>
    </header>
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/count" exact component={Count} />
      </Switch>
    </main>
  </div>
);

export default PrimaryLayout;