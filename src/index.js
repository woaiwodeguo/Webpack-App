import Vue from 'vue';
import App from './App.vue';
import router from './router/index';

import 'mint-ui/lib/style.css';
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
// 导入mui的样式表
import './lib/mui/css/mui.min.css'


new Vue({
    el:'#app',
    router,
    render: h=>h(App)
})
