(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){var a='data-src'; if($('.js-450 .slide0').hasAttr('src')) { a='src'; } $('.js-450 .slide0').attr(a, (dpi>1) ? 'images/69646ccagy1fd1phvpw65j22gi1w0hdt-2400-1.jpg' : 'images/69646ccagy1fd1phvpw65j22gi1w0hdt-1200-1.jpg');
var a='data-src'; if($('.js-450 .slide1').hasAttr('src')) { a='src'; } $('.js-450 .slide1').attr(a, (dpi>1) ? 'images/psb-2400-1.jpg' : 'images/psb-1200-1.jpg');
var a='data-src'; if($('.js-450 .slide2').hasAttr('src')) { a='src'; } $('.js-450 .slide2').attr(a, (dpi>1) ? 'images/wechatimg24-2400.jpg' : 'images/wechatimg24-1200.jpg');
var a='data-src'; if($('.js-450 .slide3').hasAttr('src')) { a='src'; } $('.js-450 .slide3').attr(a, (dpi>1) ? 'images/wechatimg680-2-2400.jpg' : 'images/wechatimg680-2-1200.jpg');
var a='data-src'; if($('.js-450 .slide4').hasAttr('src')) { a='src'; } $('.js-450 .slide4').attr(a, (dpi>1) ? 'images/wechatimg739-2400.jpg' : 'images/wechatimg739-1200.jpg');
var a='data-src'; if($('.js-450 .slide5').hasAttr('src')) { a='src'; } $('.js-450 .slide5').attr(a, (dpi>1) ? 'images/211-2400.jpg' : 'images/211-1200.jpg');
var a='data-src'; if($('.js-450 .slide6').hasAttr('src')) { a='src'; } $('.js-450 .slide6').attr(a, (dpi>1) ? 'images/wechatimg49-2400-1.jpg' : 'images/wechatimg49-1200-1.jpg');
var a='data-src'; if($('.js-450 .slide7').hasAttr('src')) { a='src'; } $('.js-450 .slide7').attr(a, (dpi>1) ? 'images/311-2400.jpg' : 'images/311-1200.jpg');
var a='data-src'; if($('.js-450 .slide8').hasAttr('src')) { a='src'; } $('.js-450 .slide8').attr(a, (dpi>1) ? 'images/1-2400-1.jpg' : 'images/1-1200-1.jpg');
var a='data-src'; if($('.js-450 .slide9').hasAttr('src')) { a='src'; } $('.js-450 .slide9').attr(a, (dpi>1) ? 'images/rg-2400.jpg' : 'images/rg-1200.jpg');
var a='data-src'; if($('.js-450 .slide10').hasAttr('src')) { a='src'; } $('.js-450 .slide10').attr(a, (dpi>1) ? 'images/wechatimg23021313-2400.jpg' : 'images/wechatimg23021313-1200.jpg');
var a='data-src'; if($('.js-450 .slide11').hasAttr('src')) { a='src'; } $('.js-450 .slide11').attr(a, (dpi>1) ? 'images/wechatimg551-2-2400-1.jpg' : 'images/wechatimg551-2-1200-1.jpg');
$('.js-451').attr('src', (dpi>1) ? 'images/echo-huang-780.png' : 'images/echo-huang-390.png');
$('.js-452').attr('src', (dpi>1) ? 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-46.png' : 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-23.png');
$('.js-453').attr('src', (dpi>1) ? 'images/facebook29-copy-38.png' : 'images/facebook29-copy-19.png');
$('.js-454').attr('src', (dpi>1) ? 'images/u-2260898377-2056122756-fm-26-gp-0-copy-40.png' : 'images/u-2260898377-2056122756-fm-26-gp-0-copy-20.png');
$('.js-455').attr('src', (dpi>1) ? 'images/u-2260898377-2056122756-fm-26-gp-0-copy-40.png' : 'images/u-2260898377-2056122756-fm-26-gp-0-copy-20.png');
$('.js-456').attr('src', (dpi>1) ? 'images/ju-xing-2400.png' : 'images/ju-xing-1200.png');
$('.js-457').attr('src', (dpi>1) ? 'images/the-complete-works--1760.png' : 'images/the-complete-works--880.png');
$('.js-458').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498.png' : 'images/rectangle-3-copy-9-249.png');
$('.js-459').attr('src', (dpi>1) ? 'images/533-212.jpg' : 'images/533-106.jpg');
$('.js-460').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498.png' : 'images/rectangle-3-copy-9-249.png');
$('.js-461').attr('src', (dpi>1) ? 'images/5353-400.jpg' : 'images/5353-200.jpg');
$('.js-462').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498.png' : 'images/rectangle-3-copy-9-249.png');
$('.js-463').attr('src', (dpi>1) ? 'images/534-224.jpg' : 'images/534-112.jpg');
$('.js-464').attr('src', (dpi>1) ? 'images/xin-lang-wei-bo-biao-zhi-tu-biao_-copy-4-140.png' : 'images/xin-lang-wei-bo-biao-zhi-tu-biao_-copy-4-70.png');
$('.js-465').attr('src', (dpi>1) ? 'images/facebook29-copy-3-176.png' : 'images/facebook29-copy-3-88.png');
$('.js-466').attr('src', (dpi>1) ? 'images/u-2260898377-2056122756-fm-26-gp-0-copy-5-184.png' : 'images/u-2260898377-2056122756-fm-26-gp-0-copy-5-92.png');
$('.js-467').attr('src', (dpi>1) ? 'images/xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-46.png' : 'images/xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-23.png');
$('.js-468').attr('src', (dpi>1) ? 'images/facebook29-38.png' : 'images/facebook29-19.png');
$('.js-469').attr('src', (dpi>1) ? 'images/instagram-2-40.png' : 'images/instagram-2-20.png');}else{$('.js-451').attr('src', (dpi>1) ? 'images/echo-huang-208.png' : 'images/echo-huang-104.png');
$('.js-452').attr('src', 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-47.png');
$('.js-453').attr('src', 'images/facebook29-copy-41.png');
$('.js-454').attr('src', 'images/u-2260898377-2056122756-fm-26-gp-0-copy-41.png');
$('.js-455').attr('src', 'images/u-2260898377-2056122756-fm-26-gp-0-copy-41.png');
$('.js-456').attr('src', (dpi>1) ? 'images/ju-xing-640.png' : 'images/ju-xing-320.png');
$('.js-457').attr('src', (dpi>1) ? 'images/the-complete-works--444.png' : 'images/the-complete-works--222.png');
$('.js-458').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-459').attr('src', (dpi>1) ? 'images/533-58.jpg' : 'images/533-29.jpg');
$('.js-460').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-461').attr('src', (dpi>1) ? 'images/5353-108.jpg' : 'images/5353-54.jpg');
$('.js-462').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-463').attr('src', (dpi>1) ? 'images/534-60.jpg' : 'images/534-30.jpg');
$('.js-464').attr('src', (dpi>1) ? 'images/xin-lang-wei-bo-biao-zhi-tu-biao_-copy-4-106.png' : 'images/xin-lang-wei-bo-biao-zhi-tu-biao_-copy-4-53.png');
$('.js-465').attr('src', (dpi>1) ? 'images/facebook29-copy-3-106.png' : 'images/facebook29-copy-3-53.png');
$('.js-466').attr('src', (dpi>1) ? 'images/u-2260898377-2056122756-fm-26-gp-0-copy-5-106.png' : 'images/u-2260898377-2056122756-fm-26-gp-0-copy-5-53.png');
$('.js-467').attr('src', 'images/xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-47.png');
$('.js-468').attr('src', 'images/facebook29-41.png');
$('.js-469').attr('src', 'images/instagram-2-41.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-450 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 1050,dots: false,arrows: false,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2450});
});