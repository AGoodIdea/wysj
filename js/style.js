/*监听事件的隐藏与显示*/

$(document).ready(function () {
    $(window).scroll(function () {
        var top =$(document).scrollTop();
        if(top>300){
            $("#navbar-example").show();
        }else{
            $("#navbar-example").hide();
        }
    })
});

/*监听*/
$('body').scrollspy({ target: '#navbar-example' });