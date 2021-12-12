import Vue from 'vue';
import App from './App.vue';
import router from './router/index';

// 导入mui的样式表
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css'
// 导入mint-ui的样式表
import 'mint-ui/lib/style.css';
import { Button,Header,Swipe, SwipeItem} from 'mint-ui';
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);







new Vue({
    el:'#app',
    router,
    render: h=>h(App)
})
