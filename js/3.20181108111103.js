(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){var a='data-src'; if($('.js-317 .slide0').hasAttr('src')) { a='src'; } $('.js-317 .slide0').attr(a, (dpi>1) ? 'images/69646ccagy1fd1phvpw65j22gi1w0hdt-2400-1.jpg' : 'images/69646ccagy1fd1phvpw65j22gi1w0hdt-1200-1.jpg');
var a='data-src'; if($('.js-317 .slide1').hasAttr('src')) { a='src'; } $('.js-317 .slide1').attr(a, (dpi>1) ? 'images/psb-2400-1.jpg' : 'images/psb-1200-1.jpg');
var a='data-src'; if($('.js-317 .slide2').hasAttr('src')) { a='src'; } $('.js-317 .slide2').attr(a, (dpi>1) ? 'images/wechatimg24-2400.jpg' : 'images/wechatimg24-1200.jpg');
var a='data-src'; if($('.js-317 .slide3').hasAttr('src')) { a='src'; } $('.js-317 .slide3').attr(a, (dpi>1) ? 'images/wechatimg680-2-2400.jpg' : 'images/wechatimg680-2-1200.jpg');
var a='data-src'; if($('.js-317 .slide4').hasAttr('src')) { a='src'; } $('.js-317 .slide4').attr(a, (dpi>1) ? 'images/wechatimg739-2400.jpg' : 'images/wechatimg739-1200.jpg');
var a='data-src'; if($('.js-317 .slide5').hasAttr('src')) { a='src'; } $('.js-317 .slide5').attr(a, (dpi>1) ? 'images/211-2400.jpg' : 'images/211-1200.jpg');
var a='data-src'; if($('.js-317 .slide6').hasAttr('src')) { a='src'; } $('.js-317 .slide6').attr(a, (dpi>1) ? 'images/wechatimg49-2400-1.jpg' : 'images/wechatimg49-1200-1.jpg');
var a='data-src'; if($('.js-317 .slide7').hasAttr('src')) { a='src'; } $('.js-317 .slide7').attr(a, (dpi>1) ? 'images/311-2400.jpg' : 'images/311-1200.jpg');
var a='data-src'; if($('.js-317 .slide8').hasAttr('src')) { a='src'; } $('.js-317 .slide8').attr(a, (dpi>1) ? 'images/1-2400-1.jpg' : 'images/1-1200-1.jpg');
var a='data-src'; if($('.js-317 .slide9').hasAttr('src')) { a='src'; } $('.js-317 .slide9').attr(a, (dpi>1) ? 'images/rg-2400.jpg' : 'images/rg-1200.jpg');
var a='data-src'; if($('.js-317 .slide10').hasAttr('src')) { a='src'; } $('.js-317 .slide10').attr(a, (dpi>1) ? 'images/wechatimg23021313-2400.jpg' : 'images/wechatimg23021313-1200.jpg');
var a='data-src'; if($('.js-317 .slide11').hasAttr('src')) { a='src'; } $('.js-317 .slide11').attr(a, (dpi>1) ? 'images/wechatimg551-2-2400-1.jpg' : 'images/wechatimg551-2-1200-1.jpg');
$('.js-318').attr('src', (dpi>1) ? 'images/echo-huang-780.png' : 'images/echo-huang-390.png');
$('.js-319').attr('src', (dpi>1) ? 'images/echo-huang-780-2.png' : 'images/echo-huang-390-2.png');
$('.js-320').attr('src', (dpi>1) ? 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-46.png' : 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-23.png');
$('.js-321').attr('src', (dpi>1) ? 'images/facebook29-copy-38.png' : 'images/facebook29-copy-19.png');
$('.js-322').attr('src', (dpi>1) ? 'images/u-2260898377-2056122756-fm-26-gp-0-copy-40.png' : 'images/u-2260898377-2056122756-fm-26-gp-0-copy-20.png');
$('.js-323').attr('src', (dpi>1) ? 'images/u-2260898377-2056122756-fm-26-gp-0-copy-40-2.png' : 'images/u-2260898377-2056122756-fm-26-gp-0-copy-20-2.png');
$('.js-324').attr('src', (dpi>1) ? 'images/ju-xing-2400.png' : 'images/ju-xing-1200.png');
$('.js-325').attr('src', (dpi>1) ? 'images/the-complete-works--1760.png' : 'images/the-complete-works--880.png');
$('.js-326').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498.png' : 'images/rectangle-3-copy-9-249.png');
$('.js-327').attr('src', 'images/wechatimg159-202.jpg');
$('.js-328').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498-2.png' : 'images/rectangle-3-copy-9-249-2.png');
$('.js-329').attr('src', (dpi>1) ? 'images/2222222312321-400.jpg' : 'images/2222222312321-200.jpg');
$('.js-330').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498-3.png' : 'images/rectangle-3-copy-9-249-3.png');
$('.js-331').attr('src', (dpi>1) ? 'images/wechatimg230-398.jpg' : 'images/wechatimg230-199.jpg');
$('.js-332').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498-4.png' : 'images/rectangle-3-copy-9-249-4.png');
$('.js-333').attr('src', (dpi>1) ? 'images/69646ccagy1fm402d6wzyj22bp1minpd-404.jpg' : 'images/69646ccagy1fm402d6wzyj22bp1minpd-202.jpg');
$('.js-334').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498-5.png' : 'images/rectangle-3-copy-9-249-5.png');
$('.js-335').attr('src', (dpi>1) ? 'images/69646ccagy1fqg4hcsdmoj21ll1547wh-400.jpg' : 'images/69646ccagy1fqg4hcsdmoj21ll1547wh-200.jpg');
$('.js-336').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498-6.png' : 'images/rectangle-3-copy-9-249-6.png');
$('.js-337').attr('src', (dpi>1) ? 'images/1111-400.jpg' : 'images/1111-200.jpg');
$('.js-338').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498-7.png' : 'images/rectangle-3-copy-9-249-7.png');
$('.js-339').attr('src', (dpi>1) ? 'images/69646ccagy1fkc9wfo7n3j21yk1d41kx-404.jpg' : 'images/69646ccagy1fkc9wfo7n3j21yk1d41kx-202.jpg');
$('.js-340').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498-8.png' : 'images/rectangle-3-copy-9-249-8.png');
$('.js-341').attr('src', (dpi>1) ? 'images/239196646444661547-226.jpg' : 'images/239196646444661547-113.jpg');
$('.js-342').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498-9.png' : 'images/rectangle-3-copy-9-249-9.png');
$('.js-343').attr('src', (dpi>1) ? 'images/69646ccagy1fm402dtrqsj20hs0nt7bg-204.jpg' : 'images/69646ccagy1fm402dtrqsj20hs0nt7bg-102.jpg');
$('.js-344').attr('src', (dpi>1) ? 'images/xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-46.png' : 'images/xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-23.png');
$('.js-345').attr('src', (dpi>1) ? 'images/facebook29-38.png' : 'images/facebook29-19.png');
$('.js-346').attr('src', (dpi>1) ? 'images/instagram-2-40.png' : 'images/instagram-2-20.png');
$('.js-347').attr('src', (dpi>1) ? 'images/xin-lang-wei-bo-biao-zhi-tu-biao_-copy-4-140.png' : 'images/xin-lang-wei-bo-biao-zhi-tu-biao_-copy-4-70.png');
$('.js-348').attr('src', (dpi>1) ? 'images/facebook29-copy-3-176.png' : 'images/facebook29-copy-3-88.png');
$('.js-349').attr('src', (dpi>1) ? 'images/u-2260898377-2056122756-fm-26-gp-0-copy-5-184.png' : 'images/u-2260898377-2056122756-fm-26-gp-0-copy-5-92.png');}else{$('.js-318').attr('src', (dpi>1) ? 'images/echo-huang-318.png' : 'images/echo-huang-159.png');
$('.js-319').attr('src', (dpi>1) ? 'images/echo-huang-208.png' : 'images/echo-huang-104.png');
$('.js-320').attr('src', 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-47.png');
$('.js-321').attr('src', 'images/facebook29-copy-41.png');
$('.js-322').attr('src', 'images/u-2260898377-2056122756-fm-26-gp-0-copy-41.png');
$('.js-323').attr('src', 'images/u-2260898377-2056122756-fm-26-gp-0-copy-41.png');
$('.js-324').attr('src', (dpi>1) ? 'images/ju-xing-640.png' : 'images/ju-xing-320.png');
$('.js-325').attr('src', (dpi>1) ? 'images/the-complete-works--444.png' : 'images/the-complete-works--222.png');
$('.js-326').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-327').attr('src', (dpi>1) ? 'images/wechatimg159-106.jpg' : 'images/wechatimg159-53.jpg');
$('.js-328').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-329').attr('src', (dpi>1) ? 'images/2222222312321-108.jpg' : 'images/2222222312321-54.jpg');
$('.js-330').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-331').attr('src', (dpi>1) ? 'images/wechatimg230-106.jpg' : 'images/wechatimg230-53.jpg');
$('.js-332').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-333').attr('src', (dpi>1) ? 'images/69646ccagy1fm402d6wzyj22bp1minpd-106-1.jpg' : 'images/69646ccagy1fm402d6wzyj22bp1minpd-53-1.jpg');
$('.js-334').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-335').attr('src', (dpi>1) ? 'images/69646ccagy1fqg4hcsdmoj21ll1547wh-108-1.jpg' : 'images/69646ccagy1fqg4hcsdmoj21ll1547wh-54-1.jpg');
$('.js-336').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-337').attr('src', (dpi>1) ? 'images/1111-108.jpg' : 'images/1111-54.jpg');
$('.js-338').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-339').attr('src', (dpi>1) ? 'images/69646ccagy1fkc9wfo7n3j21yk1d41kx-106-1.jpg' : 'images/69646ccagy1fkc9wfo7n3j21yk1d41kx-53-1.jpg');
$('.js-340').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-341').attr('src', (dpi>1) ? 'images/239196646444661547-62-1.jpg' : 'images/239196646444661547-31-1.jpg');
$('.js-342').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-343').attr('src', (dpi>1) ? 'images/69646ccagy1fm402dtrqsj20hs0nt7bg-56-1.jpg' : 'images/69646ccagy1fm402dtrqsj20hs0nt7bg-28-1.jpg');
$('.js-344').attr('src', (dpi>1) ? 'images/xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-36.png' : 'images/xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-18.png');
$('.js-345').attr('src', (dpi>1) ? 'images/facebook29-32.png' : 'images/facebook29-16.png');
$('.js-346').attr('src', (dpi>1) ? 'images/instagram-2-32.png' : 'images/instagram-2-16.png');
$('.js-347').attr('src', (dpi>1) ? 'images/xin-lang-wei-bo-biao-zhi-tu-biao_-copy-4-106.png' : 'images/xin-lang-wei-bo-biao-zhi-tu-biao_-copy-4-53.png');
$('.js-348').attr('src', (dpi>1) ? 'images/facebook29-copy-3-106.png' : 'images/facebook29-copy-3-53.png');
$('.js-349').attr('src', (dpi>1) ? 'images/u-2260898377-2056122756-fm-26-gp-0-copy-5-106.png' : 'images/u-2260898377-2056122756-fm-26-gp-0-copy-5-53.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-317 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 1050,dots: false,arrows: false,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2450});
});