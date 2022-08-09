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
import { Suspense, lazy } from 'react';
import ReactDOM from "react-dom/client";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
const root = ReactDOM.createRoot(
  document.getElementById("app")
);

const HomeLazy = lazy(() => import('./pages/Home'))
const CountLazy = lazy(() => import('./pages/Count'))

root.render(
  <HashRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/home" element={<HomeLazy />} />
        <Route path="/count" element={<CountLazy />} />
      </Routes>
    </Suspense>
  </HashRouter>
);