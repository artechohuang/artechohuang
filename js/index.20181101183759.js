(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){var a='data-src'; if($('.js .slide0').hasAttr('src')) { a='src'; } $('.js .slide0').attr(a, (dpi>1) ? 'images/69646ccagy1fd1phvpw65j22gi1w0hdt-2400.jpg' : 'images/69646ccagy1fd1phvpw65j22gi1w0hdt-1200.jpg');
var a='data-src'; if($('.js .slide1').hasAttr('src')) { a='src'; } $('.js .slide1').attr(a, (dpi>1) ? 'images/wechatimg680-3-2400.jpg' : 'images/wechatimg680-3-1200.jpg');
var a='data-src'; if($('.js .slide2').hasAttr('src')) { a='src'; } $('.js .slide2').attr(a, (dpi>1) ? 'images/wechatimg25-2400.jpg' : 'images/wechatimg25-1200.jpg');
var a='data-src'; if($('.js .slide3').hasAttr('src')) { a='src'; } $('.js .slide3').attr(a, (dpi>1) ? 'images/psb-2400.jpg' : 'images/psb-1200.jpg');
var a='data-src'; if($('.js .slide4').hasAttr('src')) { a='src'; } $('.js .slide4').attr(a, (dpi>1) ? 'images/1111-2400.jpg' : 'images/1111-1200.jpg');
var a='data-src'; if($('.js .slide5').hasAttr('src')) { a='src'; } $('.js .slide5').attr(a, 'images/wechatimg762-1200.jpg');
var a='data-src'; if($('.js .slide6').hasAttr('src')) { a='src'; } $('.js .slide6').attr(a, 'images/wechatimg763-1-1200.jpg');
var a='data-src'; if($('.js .slide7').hasAttr('src')) { a='src'; } $('.js .slide7').attr(a, 'images/wechatimg739-1200.jpeg');
var a='data-src'; if($('.js .slide8').hasAttr('src')) { a='src'; } $('.js .slide8').attr(a, (dpi>1) ? 'images/69646ccagy1fkc9wfo7n3j21yk1d41kx-2400.jpg' : 'images/69646ccagy1fkc9wfo7n3j21yk1d41kx-1200.jpg');
$('.js-2').attr('src', (dpi>1) ? 'images/echo-huang-780.png' : 'images/echo-huang-390.png');
$('.js-3').attr('src', (dpi>1) ? 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-46.png' : 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-23.png');
$('.js-4').attr('src', (dpi>1) ? 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-46-3.png' : 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-23-3.png');
$('.js-5').attr('src', (dpi>1) ? 'images/qqmail-copy-2-46.png' : 'images/qqmail-copy-2-23.png');
$('.js-6').attr('src', (dpi>1) ? 'images/qqmail-copy-2-46-3.png' : 'images/qqmail-copy-2-23-3.png');
$('.js-7').attr('src', (dpi>1) ? 'images/facebook29-copy-40.png' : 'images/facebook29-copy-20.png');
$('.js-8').attr('src', (dpi>1) ? 'images/facebook29-copy-40-3.png' : 'images/facebook29-copy-20-3.png');
$('.js-9').attr('src', (dpi>1) ? 'images/u-2260898377-2056122756-fm-26-gp-0-copy-40.png' : 'images/u-2260898377-2056122756-fm-26-gp-0-copy-20.png');
$('.js-10').attr('src', (dpi>1) ? 'images/u-2260898377-2056122756-fm-26-gp-0-copy-40-3.png' : 'images/u-2260898377-2056122756-fm-26-gp-0-copy-20-3.png');
$('.js-11').attr('src', (dpi>1) ? 'images/ge-ren-jian-jie-2400.jpg' : 'images/ge-ren-jian-jie-1200.jpg');
$('.js-12').attr('src', (dpi>1) ? 'images/the-complete-works--1658.png' : 'images/the-complete-works--829.png');
$('.js-13').attr('src', (dpi>1) ? 'images/hua1-1618.jpg' : 'images/hua1-809.jpg');
$('.js-14').attr('src', (dpi>1) ? 'images/xin-lang-wei-bo-290.png' : 'images/xin-lang-wei-bo-145.png');
$('.js-15').attr('src', (dpi>1) ? 'images/facebook-352.png' : 'images/facebook-176.png');
$('.js-16').attr('src', (dpi>1) ? 'images/instagram-380.png' : 'images/instagram-190.png');
$('.js-17').attr('src', (dpi>1) ? 'images/xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-46-3.png' : 'images/xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-23-3.png');
$('.js-18').attr('src', (dpi>1) ? 'images/qqmail-copy-46.png' : 'images/qqmail-copy-23.png');
$('.js-19').attr('src', (dpi>1) ? 'images/facebook29-40.png' : 'images/facebook29-20.png');
$('.js-20').attr('src', (dpi>1) ? 'images/instagram-2-40.png' : 'images/instagram-2-20.png');}else if($(window).width()>=960){var a='data-src'; if($('.js .slide0').hasAttr('src')) { a='src'; } $('.js .slide0').attr(a, (dpi>1) ? 'images/69646ccagy1fd1phvpw65j22gi1w0hdt-1920.jpg' : 'images/69646ccagy1fd1phvpw65j22gi1w0hdt-960-1.jpg');
var a='data-src'; if($('.js .slide1').hasAttr('src')) { a='src'; } $('.js .slide1').attr(a, (dpi>1) ? 'images/wechatimg680-3-1920.jpg' : 'images/wechatimg680-3-960-1.jpg');
var a='data-src'; if($('.js .slide2').hasAttr('src')) { a='src'; } $('.js .slide2').attr(a, (dpi>1) ? 'images/wechatimg25-1920.jpg' : 'images/wechatimg25-960-1.jpg');
var a='data-src'; if($('.js .slide3').hasAttr('src')) { a='src'; } $('.js .slide3').attr(a, (dpi>1) ? 'images/psb-1920.jpg' : 'images/psb-960-1.jpg');
var a='data-src'; if($('.js .slide4').hasAttr('src')) { a='src'; } $('.js .slide4').attr(a, (dpi>1) ? 'images/1111-1920.jpg' : 'images/1111-960-1.jpg');
var a='data-src'; if($('.js .slide5').hasAttr('src')) { a='src'; } $('.js .slide5').attr(a, (dpi>1) ? 'images/wechatimg762-1920.jpg' : 'images/wechatimg762-960-1.jpg');
var a='data-src'; if($('.js .slide6').hasAttr('src')) { a='src'; } $('.js .slide6').attr(a, (dpi>1) ? 'images/wechatimg763-1-1920.jpg' : 'images/wechatimg763-1-960-1.jpg');
var a='data-src'; if($('.js .slide7').hasAttr('src')) { a='src'; } $('.js .slide7').attr(a, (dpi>1) ? 'images/wechatimg739-1920.jpeg' : 'images/wechatimg739-960-1.jpeg');
var a='data-src'; if($('.js .slide8').hasAttr('src')) { a='src'; } $('.js .slide8').attr(a, (dpi>1) ? 'images/69646ccagy1fkc9wfo7n3j21yk1d41kx-1920.jpg' : 'images/69646ccagy1fkc9wfo7n3j21yk1d41kx-960-1.jpg');
$('.js-2').attr('src', (dpi>1) ? 'images/echo-huang-624.png' : 'images/echo-huang-312.png');
$('.js-3').attr('src', 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-139.png');
$('.js-4').attr('src', 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-139.png');
$('.js-5').attr('src', 'images/qqmail-copy-2-141.png');
$('.js-6').attr('src', 'images/qqmail-copy-2-141.png');
$('.js-7').attr('src', 'images/facebook29-copy-121.png');
$('.js-8').attr('src', 'images/facebook29-copy-121.png');
$('.js-9').attr('src', 'images/u-2260898377-2056122756-fm-26-gp-0-copy-121.png');
$('.js-10').attr('src', 'images/u-2260898377-2056122756-fm-26-gp-0-copy-121.png');
$('.js-11').attr('src', (dpi>1) ? 'images/ge-ren-jian-jie-1920.jpg' : 'images/ge-ren-jian-jie-960-1.jpg');
$('.js-12').attr('src', (dpi>1) ? 'images/the-complete-works--1326.png' : 'images/the-complete-works--663.png');
$('.js-13').attr('src', (dpi>1) ? 'images/hua1-1130.jpg' : 'images/hua1-565.jpg');
$('.js-14').attr('src', (dpi>1) ? 'images/xin-lang-wei-bo-266.png' : 'images/xin-lang-wei-bo-133.png');
$('.js-15').attr('src', (dpi>1) ? 'images/facebook-320.png' : 'images/facebook-160.png');
$('.js-16').attr('src', (dpi>1) ? 'images/instagram-320.png' : 'images/instagram-160-1.png');
$('.js-17').attr('src', 'images/xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-139.png');
$('.js-18').attr('src', 'images/qqmail-copy-141.png');
$('.js-19').attr('src', 'images/facebook29-121.png');
$('.js-20').attr('src', 'images/instagram-2-121.png');}else if($(window).width()>=768){var a='data-src'; if($('.js .slide0').hasAttr('src')) { a='src'; } $('.js .slide0').attr(a, (dpi>1) ? 'images/69646ccagy1fd1phvpw65j22gi1w0hdt-1536.jpg' : 'images/69646ccagy1fd1phvpw65j22gi1w0hdt-768.jpg');
var a='data-src'; if($('.js .slide1').hasAttr('src')) { a='src'; } $('.js .slide1').attr(a, (dpi>1) ? 'images/wechatimg680-3-1536.jpg' : 'images/wechatimg680-3-768.jpg');
var a='data-src'; if($('.js .slide2').hasAttr('src')) { a='src'; } $('.js .slide2').attr(a, (dpi>1) ? 'images/wechatimg25-1536.jpg' : 'images/wechatimg25-768.jpg');
var a='data-src'; if($('.js .slide3').hasAttr('src')) { a='src'; } $('.js .slide3').attr(a, (dpi>1) ? 'images/psb-1536.jpg' : 'images/psb-768.jpg');
var a='data-src'; if($('.js .slide4').hasAttr('src')) { a='src'; } $('.js .slide4').attr(a, (dpi>1) ? 'images/1111-1536.jpg' : 'images/1111-768.jpg');
var a='data-src'; if($('.js .slide5').hasAttr('src')) { a='src'; } $('.js .slide5').attr(a, (dpi>1) ? 'images/wechatimg762-1536.jpg' : 'images/wechatimg762-768.jpg');
var a='data-src'; if($('.js .slide6').hasAttr('src')) { a='src'; } $('.js .slide6').attr(a, (dpi>1) ? 'images/wechatimg763-1-1536.jpg' : 'images/wechatimg763-1-768.jpg');
var a='data-src'; if($('.js .slide7').hasAttr('src')) { a='src'; } $('.js .slide7').attr(a, (dpi>1) ? 'images/wechatimg739-1536.jpeg' : 'images/wechatimg739-768.jpeg');
var a='data-src'; if($('.js .slide8').hasAttr('src')) { a='src'; } $('.js .slide8').attr(a, (dpi>1) ? 'images/69646ccagy1fkc9wfo7n3j21yk1d41kx-1536.jpg' : 'images/69646ccagy1fkc9wfo7n3j21yk1d41kx-768.jpg');
$('.js-2').attr('src', (dpi>1) ? 'images/echo-huang-500.png' : 'images/echo-huang-250.png');
$('.js-3').attr('src', 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-112.png');
$('.js-4').attr('src', 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-112.png');
$('.js-5').attr('src', 'images/qqmail-copy-2-113.png');
$('.js-6').attr('src', 'images/qqmail-copy-2-113.png');
$('.js-7').attr('src', 'images/facebook29-copy-97.png');
$('.js-8').attr('src', 'images/facebook29-copy-97.png');
$('.js-9').attr('src', 'images/u-2260898377-2056122756-fm-26-gp-0-copy-97.png');
$('.js-10').attr('src', 'images/u-2260898377-2056122756-fm-26-gp-0-copy-97.png');
$('.js-11').attr('src', (dpi>1) ? 'images/ge-ren-jian-jie-1536.jpg' : 'images/ge-ren-jian-jie-768.jpg');
$('.js-12').attr('src', (dpi>1) ? 'images/the-complete-works--1062.png' : 'images/the-complete-works--531.png');
$('.js-13').attr('src', (dpi>1) ? 'images/hua1-904.jpg' : 'images/hua1-452.jpg');
$('.js-14').attr('src', (dpi>1) ? 'images/xin-lang-wei-bo-214.png' : 'images/xin-lang-wei-bo-107.png');
$('.js-15').attr('src', (dpi>1) ? 'images/facebook-256.png' : 'images/facebook-128.png');
$('.js-16').attr('src', (dpi>1) ? 'images/instagram-256.png' : 'images/instagram-128.png');
$('.js-17').attr('src', 'images/xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-112.png');
$('.js-18').attr('src', 'images/qqmail-copy-113.png');
$('.js-19').attr('src', 'images/facebook29-97.png');
$('.js-20').attr('src', 'images/instagram-2-97.png');}else if($(window).width()>=480){var a='data-src'; if($('.js .slide0').hasAttr('src')) { a='src'; } $('.js .slide0').attr(a, (dpi>1) ? 'images/69646ccagy1fd1phvpw65j22gi1w0hdt-960.jpg' : 'images/69646ccagy1fd1phvpw65j22gi1w0hdt-480.jpg');
var a='data-src'; if($('.js .slide1').hasAttr('src')) { a='src'; } $('.js .slide1').attr(a, (dpi>1) ? 'images/wechatimg680-3-960.jpg' : 'images/wechatimg680-3-480.jpg');
var a='data-src'; if($('.js .slide2').hasAttr('src')) { a='src'; } $('.js .slide2').attr(a, (dpi>1) ? 'images/wechatimg25-960.jpg' : 'images/wechatimg25-480.jpg');
var a='data-src'; if($('.js .slide3').hasAttr('src')) { a='src'; } $('.js .slide3').attr(a, (dpi>1) ? 'images/psb-960.jpg' : 'images/psb-480.jpg');
var a='data-src'; if($('.js .slide4').hasAttr('src')) { a='src'; } $('.js .slide4').attr(a, (dpi>1) ? 'images/1111-960.jpg' : 'images/1111-480.jpg');
var a='data-src'; if($('.js .slide5').hasAttr('src')) { a='src'; } $('.js .slide5').attr(a, (dpi>1) ? 'images/wechatimg762-960.jpg' : 'images/wechatimg762-480.jpg');
var a='data-src'; if($('.js .slide6').hasAttr('src')) { a='src'; } $('.js .slide6').attr(a, (dpi>1) ? 'images/wechatimg763-1-960.jpg' : 'images/wechatimg763-1-480.jpg');
var a='data-src'; if($('.js .slide7').hasAttr('src')) { a='src'; } $('.js .slide7').attr(a, (dpi>1) ? 'images/wechatimg739-960.jpeg' : 'images/wechatimg739-480.jpeg');
var a='data-src'; if($('.js .slide8').hasAttr('src')) { a='src'; } $('.js .slide8').attr(a, (dpi>1) ? 'images/69646ccagy1fkc9wfo7n3j21yk1d41kx-960.jpg' : 'images/69646ccagy1fkc9wfo7n3j21yk1d41kx-480.jpg');
$('.js-2').attr('src', (dpi>1) ? 'images/echo-huang-312.png' : 'images/echo-huang-156.png');
$('.js-3').attr('src', 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-70.png');
$('.js-4').attr('src', 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-70.png');
$('.js-5').attr('src', 'images/qqmail-copy-2-71.png');
$('.js-6').attr('src', 'images/qqmail-copy-2-71.png');
$('.js-7').attr('src', 'images/facebook29-copy-61.png');
$('.js-8').attr('src', 'images/facebook29-copy-61.png');
$('.js-9').attr('src', 'images/u-2260898377-2056122756-fm-26-gp-0-copy-61.png');
$('.js-10').attr('src', 'images/u-2260898377-2056122756-fm-26-gp-0-copy-61.png');
$('.js-11').attr('src', (dpi>1) ? 'images/ge-ren-jian-jie-960.jpg' : 'images/ge-ren-jian-jie-480.jpg');
$('.js-12').attr('src', (dpi>1) ? 'images/the-complete-works--664.png' : 'images/the-complete-works--332.png');
$('.js-13').attr('src', (dpi>1) ? 'images/hua1-566.jpg' : 'images/hua1-283.jpg');
$('.js-14').attr('src', (dpi>1) ? 'images/xin-lang-wei-bo-134.png' : 'images/xin-lang-wei-bo-67.png');
$('.js-15').attr('src', (dpi>1) ? 'images/facebook-160.png' : 'images/facebook-80.png');
$('.js-16').attr('src', (dpi>1) ? 'images/instagram-160.png' : 'images/instagram-80.png');
$('.js-17').attr('src', 'images/xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-70.png');
$('.js-18').attr('src', 'images/qqmail-copy-71.png');
$('.js-19').attr('src', 'images/facebook29-61.png');
$('.js-20').attr('src', 'images/instagram-2-61.png');}else{var a='data-src'; if($('.js .slide0').hasAttr('src')) { a='src'; } $('.js .slide0').attr(a, (dpi>1) ? 'images/69646ccagy1fd1phvpw65j22gi1w0hdt-640.jpg' : 'images/69646ccagy1fd1phvpw65j22gi1w0hdt-320.jpg');
var a='data-src'; if($('.js .slide1').hasAttr('src')) { a='src'; } $('.js .slide1').attr(a, (dpi>1) ? 'images/wechatimg680-3-640.jpg' : 'images/wechatimg680-3-320.jpg');
var a='data-src'; if($('.js .slide2').hasAttr('src')) { a='src'; } $('.js .slide2').attr(a, (dpi>1) ? 'images/wechatimg25-640.jpg' : 'images/wechatimg25-320.jpg');
var a='data-src'; if($('.js .slide3').hasAttr('src')) { a='src'; } $('.js .slide3').attr(a, (dpi>1) ? 'images/psb-640.jpg' : 'images/psb-320.jpg');
var a='data-src'; if($('.js .slide4').hasAttr('src')) { a='src'; } $('.js .slide4').attr(a, (dpi>1) ? 'images/1111-640.jpg' : 'images/1111-320.jpg');
var a='data-src'; if($('.js .slide5').hasAttr('src')) { a='src'; } $('.js .slide5').attr(a, (dpi>1) ? 'images/wechatimg762-640.jpg' : 'images/wechatimg762-320.jpg');
var a='data-src'; if($('.js .slide6').hasAttr('src')) { a='src'; } $('.js .slide6').attr(a, (dpi>1) ? 'images/wechatimg763-1-640.jpg' : 'images/wechatimg763-1-320.jpg');
var a='data-src'; if($('.js .slide7').hasAttr('src')) { a='src'; } $('.js .slide7').attr(a, (dpi>1) ? 'images/wechatimg739-640.jpeg' : 'images/wechatimg739-320.jpeg');
var a='data-src'; if($('.js .slide8').hasAttr('src')) { a='src'; } $('.js .slide8').attr(a, (dpi>1) ? 'images/69646ccagy1fkc9wfo7n3j21yk1d41kx-640.jpg' : 'images/69646ccagy1fkc9wfo7n3j21yk1d41kx-320.jpg');
$('.js-2').attr('src', (dpi>1) ? 'images/echo-huang-208.png' : 'images/echo-huang-104.png');
$('.js-3').attr('src', 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-47.png');
$('.js-4').attr('src', 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-47.png');
$('.js-5').attr('src', 'images/qqmail-copy-2-47.png');
$('.js-6').attr('src', 'images/qqmail-copy-2-47.png');
$('.js-7').attr('src', 'images/facebook29-copy-41.png');
$('.js-8').attr('src', 'images/facebook29-copy-41.png');
$('.js-9').attr('src', 'images/u-2260898377-2056122756-fm-26-gp-0-copy-41.png');
$('.js-10').attr('src', 'images/u-2260898377-2056122756-fm-26-gp-0-copy-41.png');
$('.js-11').attr('src', (dpi>1) ? 'images/ge-ren-jian-jie-640.jpg' : 'images/ge-ren-jian-jie-320.jpg');
$('.js-12').attr('src', (dpi>1) ? 'images/the-complete-works--444.png' : 'images/the-complete-works--222.png');
$('.js-13').attr('src', (dpi>1) ? 'images/hua1-378.jpg' : 'images/hua1-189.jpg');
$('.js-14').attr('src', (dpi>1) ? 'images/xin-lang-wei-bo-90.png' : 'images/xin-lang-wei-bo-45.png');
$('.js-15').attr('src', (dpi>1) ? 'images/facebook-108.png' : 'images/facebook-54.png');
$('.js-16').attr('src', (dpi>1) ? 'images/instagram-106.png' : 'images/instagram-53.png');
$('.js-17').attr('src', 'images/xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-47.png');
$('.js-18').attr('src', 'images/qqmail-copy-47.png');
$('.js-19').attr('src', 'images/facebook29-41.png');
$('.js-20').attr('src', 'images/instagram-2-41.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 1050,dots: false,arrows: false,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2450});
});