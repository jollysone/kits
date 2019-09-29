import Vue from 'vue'
import App from './App'
import $ from 'jquery'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
});


let switcher = 'git';

$('.item').click(function() {
    switcher = $(this).attr('data');
    console.log($(this).attr('data'))
    $(this).addClass('current').siblings('.item').removeClass('current');
});


let data = [
    {
        'icon': 'git',
        'primary': 'github',
        'secondary': 'deve',
    },
    {
        'icon': 'git',
        'primary': 'gitlab',
        'secondary': 'test',
    },
    {
        'icon': 'git',
        'primary': 'gogs',
        'secondary': 'test-1',
    },
];


Vue.component('app', {
    template: '<App/>',
})
