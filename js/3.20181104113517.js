(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){var a='data-src'; if($('.js-321 .slide0').hasAttr('src')) { a='src'; } $('.js-321 .slide0').attr(a, (dpi>1) ? 'images/69646ccagy1fd1phvpw65j22gi1w0hdt-2400-1.jpg' : 'images/69646ccagy1fd1phvpw65j22gi1w0hdt-1200-1.jpg');
var a='data-src'; if($('.js-321 .slide1').hasAttr('src')) { a='src'; } $('.js-321 .slide1').attr(a, (dpi>1) ? 'images/psb-2400-1.jpg' : 'images/psb-1200-1.jpg');
var a='data-src'; if($('.js-321 .slide2').hasAttr('src')) { a='src'; } $('.js-321 .slide2').attr(a, (dpi>1) ? 'images/wechatimg24-2400.jpg' : 'images/wechatimg24-1200.jpg');
var a='data-src'; if($('.js-321 .slide3').hasAttr('src')) { a='src'; } $('.js-321 .slide3').attr(a, (dpi>1) ? 'images/wechatimg680-2-2400.jpg' : 'images/wechatimg680-2-1200.jpg');
var a='data-src'; if($('.js-321 .slide4').hasAttr('src')) { a='src'; } $('.js-321 .slide4').attr(a, (dpi>1) ? 'images/wechatimg739-2400.jpg' : 'images/wechatimg739-1200.jpg');
var a='data-src'; if($('.js-321 .slide5').hasAttr('src')) { a='src'; } $('.js-321 .slide5').attr(a, (dpi>1) ? 'images/211-2400.jpg' : 'images/211-1200.jpg');
var a='data-src'; if($('.js-321 .slide6').hasAttr('src')) { a='src'; } $('.js-321 .slide6').attr(a, (dpi>1) ? 'images/wechatimg49-2400-1.jpg' : 'images/wechatimg49-1200-1.jpg');
var a='data-src'; if($('.js-321 .slide7').hasAttr('src')) { a='src'; } $('.js-321 .slide7').attr(a, (dpi>1) ? 'images/311-2400.jpg' : 'images/311-1200.jpg');
var a='data-src'; if($('.js-321 .slide8').hasAttr('src')) { a='src'; } $('.js-321 .slide8').attr(a, (dpi>1) ? 'images/1-2400-1.jpg' : 'images/1-1200-1.jpg');
var a='data-src'; if($('.js-321 .slide9').hasAttr('src')) { a='src'; } $('.js-321 .slide9').attr(a, (dpi>1) ? 'images/rg-2400.jpg' : 'images/rg-1200.jpg');
var a='data-src'; if($('.js-321 .slide10').hasAttr('src')) { a='src'; } $('.js-321 .slide10').attr(a, (dpi>1) ? 'images/wechatimg23021313-2400.jpg' : 'images/wechatimg23021313-1200.jpg');
var a='data-src'; if($('.js-321 .slide11').hasAttr('src')) { a='src'; } $('.js-321 .slide11').attr(a, (dpi>1) ? 'images/wechatimg551-2-2400-1.jpg' : 'images/wechatimg551-2-1200-1.jpg');
$('.js-322').attr('src', (dpi>1) ? 'images/echo-huang-780.png' : 'images/echo-huang-390.png');
$('.js-323').attr('src', (dpi>1) ? 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-46.png' : 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-23.png');
$('.js-324').attr('src', (dpi>1) ? 'images/facebook29-copy-38.png' : 'images/facebook29-copy-19.png');
$('.js-325').attr('src', (dpi>1) ? 'images/u-2260898377-2056122756-fm-26-gp-0-copy-40.png' : 'images/u-2260898377-2056122756-fm-26-gp-0-copy-20.png');
$('.js-326').attr('src', (dpi>1) ? 'images/u-2260898377-2056122756-fm-26-gp-0-copy-40.png' : 'images/u-2260898377-2056122756-fm-26-gp-0-copy-20.png');
$('.js-327').attr('src', (dpi>1) ? 'images/ju-xing-2400.png' : 'images/ju-xing-1200.png');
$('.js-328').attr('src', (dpi>1) ? 'images/the-complete-works--1760.png' : 'images/the-complete-works--880.png');
$('.js-329').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498.png' : 'images/rectangle-3-copy-9-249.png');
$('.js-330').attr('src', 'images/wechatimg159-202.jpg');
$('.js-331').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498.png' : 'images/rectangle-3-copy-9-249.png');
$('.js-332').attr('src', (dpi>1) ? 'images/2222222312321-400.jpg' : 'images/2222222312321-200.jpg');
$('.js-333').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498.png' : 'images/rectangle-3-copy-9-249.png');
$('.js-334').attr('src', (dpi>1) ? 'images/wechatimg230-398.jpg' : 'images/wechatimg230-199.jpg');
$('.js-335').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498.png' : 'images/rectangle-3-copy-9-249.png');
$('.js-336').attr('src', (dpi>1) ? 'images/69646ccagy1fm402d6wzyj22bp1minpd-404-1.jpg' : 'images/69646ccagy1fm402d6wzyj22bp1minpd-202-1.jpg');
$('.js-337').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498.png' : 'images/rectangle-3-copy-9-249.png');
$('.js-338').attr('src', (dpi>1) ? 'images/69646ccagy1fqg4hcsdmoj21ll1547wh-400-1.jpg' : 'images/69646ccagy1fqg4hcsdmoj21ll1547wh-200-1.jpg');
$('.js-339').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498.png' : 'images/rectangle-3-copy-9-249.png');
$('.js-340').attr('src', (dpi>1) ? 'images/1111-400.jpg' : 'images/1111-200.jpg');
$('.js-341').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498.png' : 'images/rectangle-3-copy-9-249.png');
$('.js-342').attr('src', (dpi>1) ? 'images/69646ccagy1fkc9wfo7n3j21yk1d41kx-404-1.jpg' : 'images/69646ccagy1fkc9wfo7n3j21yk1d41kx-202-1.jpg');
$('.js-343').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498.png' : 'images/rectangle-3-copy-9-249.png');
$('.js-344').attr('src', (dpi>1) ? 'images/239196646444661547-226-1.jpg' : 'images/239196646444661547-113-1.jpg');
$('.js-345').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498.png' : 'images/rectangle-3-copy-9-249.png');
$('.js-346').attr('src', (dpi>1) ? 'images/69646ccagy1fm402dtrqsj20hs0nt7bg-204-1.jpg' : 'images/69646ccagy1fm402dtrqsj20hs0nt7bg-102-1.jpg');
$('.js-347').attr('src', (dpi>1) ? 'images/xin-lang-wei-bo-biao-zhi-tu-biao_-copy-4-140.png' : 'images/xin-lang-wei-bo-biao-zhi-tu-biao_-copy-4-70.png');
$('.js-348').attr('src', (dpi>1) ? 'images/facebook29-copy-3-176.png' : 'images/facebook29-copy-3-88.png');
$('.js-349').attr('src', (dpi>1) ? 'images/u-2260898377-2056122756-fm-26-gp-0-copy-5-184.png' : 'images/u-2260898377-2056122756-fm-26-gp-0-copy-5-92.png');
$('.js-350').attr('src', (dpi>1) ? 'images/xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-46.png' : 'images/xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-23.png');
$('.js-351').attr('src', (dpi>1) ? 'images/facebook29-38.png' : 'images/facebook29-19.png');
$('.js-352').attr('src', (dpi>1) ? 'images/instagram-2-40.png' : 'images/instagram-2-20.png');}else if($(window).width()>=960){var a='data-src'; if($('.js-321 .slide0').hasAttr('src')) { a='src'; } $('.js-321 .slide0').attr(a, (dpi>1) ? 'images/69646ccagy1fd1phvpw65j22gi1w0hdt-1920-1.jpg' : 'images/69646ccagy1fd1phvpw65j22gi1w0hdt-960-3.jpg');
var a='data-src'; if($('.js-321 .slide1').hasAttr('src')) { a='src'; } $('.js-321 .slide1').attr(a, (dpi>1) ? 'images/psb-1920-1.jpg' : 'images/psb-960-3.jpg');
var a='data-src'; if($('.js-321 .slide2').hasAttr('src')) { a='src'; } $('.js-321 .slide2').attr(a, (dpi>1) ? 'images/wechatimg24-1920.jpg' : 'images/wechatimg24-960-1.jpg');
var a='data-src'; if($('.js-321 .slide3').hasAttr('src')) { a='src'; } $('.js-321 .slide3').attr(a, (dpi>1) ? 'images/wechatimg680-2-1920.jpg' : 'images/wechatimg680-2-960-1.jpg');
var a='data-src'; if($('.js-321 .slide4').hasAttr('src')) { a='src'; } $('.js-321 .slide4').attr(a, (dpi>1) ? 'images/wechatimg739-1920.jpg' : 'images/wechatimg739-960-1.jpg');
var a='data-src'; if($('.js-321 .slide5').hasAttr('src')) { a='src'; } $('.js-321 .slide5').attr(a, (dpi>1) ? 'images/211-1920.jpg' : 'images/211-960-1.jpg');
var a='data-src'; if($('.js-321 .slide6').hasAttr('src')) { a='src'; } $('.js-321 .slide6').attr(a, (dpi>1) ? 'images/wechatimg49-1920-1.jpg' : 'images/wechatimg49-960-3.jpg');
var a='data-src'; if($('.js-321 .slide7').hasAttr('src')) { a='src'; } $('.js-321 .slide7').attr(a, (dpi>1) ? 'images/311-1920.jpg' : 'images/311-960-1.jpg');
var a='data-src'; if($('.js-321 .slide8').hasAttr('src')) { a='src'; } $('.js-321 .slide8').attr(a, (dpi>1) ? 'images/1-1920-1.jpg' : 'images/1-960-3.jpg');
var a='data-src'; if($('.js-321 .slide9').hasAttr('src')) { a='src'; } $('.js-321 .slide9').attr(a, (dpi>1) ? 'images/rg-1920.jpg' : 'images/rg-960-1.jpg');
var a='data-src'; if($('.js-321 .slide10').hasAttr('src')) { a='src'; } $('.js-321 .slide10').attr(a, (dpi>1) ? 'images/wechatimg23021313-1920.jpg' : 'images/wechatimg23021313-960-1.jpg');
var a='data-src'; if($('.js-321 .slide11').hasAttr('src')) { a='src'; } $('.js-321 .slide11').attr(a, (dpi>1) ? 'images/wechatimg551-2-1920-1.jpg' : 'images/wechatimg551-2-960-3.jpg');
$('.js-322').attr('src', (dpi>1) ? 'images/echo-huang-624.png' : 'images/echo-huang-312.png');
$('.js-323').attr('src', 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-139.png');
$('.js-324').attr('src', 'images/facebook29-copy-121.png');
$('.js-325').attr('src', 'images/u-2260898377-2056122756-fm-26-gp-0-copy-121.png');
$('.js-326').attr('src', 'images/u-2260898377-2056122756-fm-26-gp-0-copy-121.png');
$('.js-327').attr('src', (dpi>1) ? 'images/ju-xing-1920.png' : 'images/ju-xing-960-1.png');
$('.js-328').attr('src', (dpi>1) ? 'images/the-complete-works--1326.png' : 'images/the-complete-works--663.png');
$('.js-329').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-390.png' : 'images/rectangle-3-copy-9-195.png');
$('.js-330').attr('src', (dpi>1) ? 'images/wechatimg159-320.jpg' : 'images/wechatimg159-160-1.jpg');
$('.js-331').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-390.png' : 'images/rectangle-3-copy-9-195.png');
$('.js-332').attr('src', (dpi>1) ? 'images/2222222312321-320.jpg' : 'images/2222222312321-160.jpg');
$('.js-333').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-390.png' : 'images/rectangle-3-copy-9-195.png');
$('.js-334').attr('src', (dpi>1) ? 'images/wechatimg230-318.jpg' : 'images/wechatimg230-159.jpg');
$('.js-335').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-390.png' : 'images/rectangle-3-copy-9-195.png');
$('.js-336').attr('src', (dpi>1) ? 'images/69646ccagy1fm402d6wzyj22bp1minpd-320-1.jpg' : 'images/69646ccagy1fm402d6wzyj22bp1minpd-160-1.jpg');
$('.js-337').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-390.png' : 'images/rectangle-3-copy-9-195.png');
$('.js-338').attr('src', (dpi>1) ? 'images/69646ccagy1fqg4hcsdmoj21ll1547wh-320-1.jpg' : 'images/69646ccagy1fqg4hcsdmoj21ll1547wh-160-3.jpg');
$('.js-339').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-390.png' : 'images/rectangle-3-copy-9-195.png');
$('.js-340').attr('src', (dpi>1) ? 'images/1111-320-1.jpg' : 'images/1111-160.jpg');
$('.js-341').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-390.png' : 'images/rectangle-3-copy-9-195.png');
$('.js-342').attr('src', (dpi>1) ? 'images/69646ccagy1fkc9wfo7n3j21yk1d41kx-320-2.jpg' : 'images/69646ccagy1fkc9wfo7n3j21yk1d41kx-160-1.jpg');
$('.js-343').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-390.png' : 'images/rectangle-3-copy-9-195.png');
$('.js-344').attr('src', (dpi>1) ? 'images/239196646444661547-182-1.jpg' : 'images/239196646444661547-91-1.jpg');
$('.js-345').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-390.png' : 'images/rectangle-3-copy-9-195.png');
$('.js-346').attr('src', (dpi>1) ? 'images/69646ccagy1fm402dtrqsj20hs0nt7bg-164-1.jpg' : 'images/69646ccagy1fm402dtrqsj20hs0nt7bg-82-1.jpg');
$('.js-347').attr('src', 'images/xin-lang-wei-bo-biao-zhi-tu-biao_-copy-4-160-1.png');
$('.js-348').attr('src', 'images/facebook29-copy-3-160-1.png');
$('.js-349').attr('src', 'images/u-2260898377-2056122756-fm-26-gp-0-copy-5-160.png');
$('.js-350').attr('src', 'images/xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-139.png');
$('.js-351').attr('src', 'images/facebook29-121.png');
$('.js-352').attr('src', 'images/instagram-2-121.png');}else if($(window).width()>=768){var a='data-src'; if($('.js-321 .slide0').hasAttr('src')) { a='src'; } $('.js-321 .slide0').attr(a, (dpi>1) ? 'images/69646ccagy1fd1phvpw65j22gi1w0hdt-1536-1.jpg' : 'images/69646ccagy1fd1phvpw65j22gi1w0hdt-768-1.jpg');
var a='data-src'; if($('.js-321 .slide1').hasAttr('src')) { a='src'; } $('.js-321 .slide1').attr(a, (dpi>1) ? 'images/psb-1536-1.jpg' : 'images/psb-768-1.jpg');
var a='data-src'; if($('.js-321 .slide2').hasAttr('src')) { a='src'; } $('.js-321 .slide2').attr(a, (dpi>1) ? 'images/wechatimg24-1536.jpg' : 'images/wechatimg24-768.jpg');
var a='data-src'; if($('.js-321 .slide3').hasAttr('src')) { a='src'; } $('.js-321 .slide3').attr(a, (dpi>1) ? 'images/wechatimg680-2-1536.jpg' : 'images/wechatimg680-2-768.jpg');
var a='data-src'; if($('.js-321 .slide4').hasAttr('src')) { a='src'; } $('.js-321 .slide4').attr(a, (dpi>1) ? 'images/wechatimg739-1536.jpg' : 'images/wechatimg739-768.jpg');
var a='data-src'; if($('.js-321 .slide5').hasAttr('src')) { a='src'; } $('.js-321 .slide5').attr(a, (dpi>1) ? 'images/211-1536.jpg' : 'images/211-768.jpg');
var a='data-src'; if($('.js-321 .slide6').hasAttr('src')) { a='src'; } $('.js-321 .slide6').attr(a, (dpi>1) ? 'images/wechatimg49-1536-1.jpg' : 'images/wechatimg49-768-1.jpg');
var a='data-src'; if($('.js-321 .slide7').hasAttr('src')) { a='src'; } $('.js-321 .slide7').attr(a, (dpi>1) ? 'images/311-1536.jpg' : 'images/311-768.jpg');
var a='data-src'; if($('.js-321 .slide8').hasAttr('src')) { a='src'; } $('.js-321 .slide8').attr(a, (dpi>1) ? 'images/1-1536-1.jpg' : 'images/1-768-1.jpg');
var a='data-src'; if($('.js-321 .slide9').hasAttr('src')) { a='src'; } $('.js-321 .slide9').attr(a, (dpi>1) ? 'images/rg-1536.jpg' : 'images/rg-768.jpg');
var a='data-src'; if($('.js-321 .slide10').hasAttr('src')) { a='src'; } $('.js-321 .slide10').attr(a, (dpi>1) ? 'images/wechatimg23021313-1536.jpg' : 'images/wechatimg23021313-768.jpg');
var a='data-src'; if($('.js-321 .slide11').hasAttr('src')) { a='src'; } $('.js-321 .slide11').attr(a, (dpi>1) ? 'images/wechatimg551-2-1536-1.jpg' : 'images/wechatimg551-2-768-1.jpg');
$('.js-322').attr('src', (dpi>1) ? 'images/echo-huang-500.png' : 'images/echo-huang-250.png');
$('.js-323').attr('src', 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-112.png');
$('.js-324').attr('src', 'images/facebook29-copy-97.png');
$('.js-325').attr('src', 'images/u-2260898377-2056122756-fm-26-gp-0-copy-97.png');
$('.js-326').attr('src', 'images/u-2260898377-2056122756-fm-26-gp-0-copy-97.png');
$('.js-327').attr('src', (dpi>1) ? 'images/ju-xing-1536.png' : 'images/ju-xing-768.png');
$('.js-328').attr('src', (dpi>1) ? 'images/the-complete-works--1062.png' : 'images/the-complete-works--531.png');
$('.js-329').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-312.png' : 'images/rectangle-3-copy-9-156.png');
$('.js-330').attr('src', (dpi>1) ? 'images/wechatimg159-256.jpg' : 'images/wechatimg159-128.jpg');
$('.js-331').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-312.png' : 'images/rectangle-3-copy-9-156.png');
$('.js-332').attr('src', (dpi>1) ? 'images/2222222312321-256.jpg' : 'images/2222222312321-128.jpg');
$('.js-333').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-312.png' : 'images/rectangle-3-copy-9-156.png');
$('.js-334').attr('src', (dpi>1) ? 'images/wechatimg230-256.jpg' : 'images/wechatimg230-128.jpg');
$('.js-335').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-312.png' : 'images/rectangle-3-copy-9-156.png');
$('.js-336').attr('src', (dpi>1) ? 'images/69646ccagy1fm402d6wzyj22bp1minpd-256-1.jpg' : 'images/69646ccagy1fm402d6wzyj22bp1minpd-128-1.jpg');
$('.js-337').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-312.png' : 'images/rectangle-3-copy-9-156.png');
$('.js-338').attr('src', (dpi>1) ? 'images/69646ccagy1fqg4hcsdmoj21ll1547wh-256-1.jpg' : 'images/69646ccagy1fqg4hcsdmoj21ll1547wh-128-1.jpg');
$('.js-339').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-312.png' : 'images/rectangle-3-copy-9-156.png');
$('.js-340').attr('src', (dpi>1) ? 'images/1111-256.jpg' : 'images/1111-128.jpg');
$('.js-341').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-312.png' : 'images/rectangle-3-copy-9-156.png');
$('.js-342').attr('src', (dpi>1) ? 'images/69646ccagy1fkc9wfo7n3j21yk1d41kx-256-1.jpg' : 'images/69646ccagy1fkc9wfo7n3j21yk1d41kx-128-1.jpg');
$('.js-343').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-312.png' : 'images/rectangle-3-copy-9-156.png');
$('.js-344').attr('src', (dpi>1) ? 'images/239196646444661547-146-1.jpg' : 'images/239196646444661547-73-1.jpg');
$('.js-345').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-312.png' : 'images/rectangle-3-copy-9-156.png');
$('.js-346').attr('src', (dpi>1) ? 'images/69646ccagy1fm402dtrqsj20hs0nt7bg-130-1.jpg' : 'images/69646ccagy1fm402dtrqsj20hs0nt7bg-65-1.jpg');
$('.js-347').attr('src', 'images/xin-lang-wei-bo-biao-zhi-tu-biao_-copy-4-128.png');
$('.js-348').attr('src', 'images/facebook29-copy-3-128.png');
$('.js-349').attr('src', (dpi>1) ? 'images/u-2260898377-2056122756-fm-26-gp-0-copy-5-256.png' : 'images/u-2260898377-2056122756-fm-26-gp-0-copy-5-128.png');
$('.js-350').attr('src', 'images/xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-112.png');
$('.js-351').attr('src', 'images/facebook29-97.png');
$('.js-352').attr('src', 'images/instagram-2-97.png');}else if($(window).width()>=480){var a='data-src'; if($('.js-321 .slide0').hasAttr('src')) { a='src'; } $('.js-321 .slide0').attr(a, (dpi>1) ? 'images/69646ccagy1fd1phvpw65j22gi1w0hdt-960-2.jpg' : 'images/69646ccagy1fd1phvpw65j22gi1w0hdt-480-1.jpg');
var a='data-src'; if($('.js-321 .slide1').hasAttr('src')) { a='src'; } $('.js-321 .slide1').attr(a, (dpi>1) ? 'images/psb-960-2.jpg' : 'images/psb-480-1.jpg');
var a='data-src'; if($('.js-321 .slide2').hasAttr('src')) { a='src'; } $('.js-321 .slide2').attr(a, (dpi>1) ? 'images/wechatimg24-960.jpg' : 'images/wechatimg24-480.jpg');
var a='data-src'; if($('.js-321 .slide3').hasAttr('src')) { a='src'; } $('.js-321 .slide3').attr(a, (dpi>1) ? 'images/wechatimg680-2-960.jpg' : 'images/wechatimg680-2-480.jpg');
var a='data-src'; if($('.js-321 .slide4').hasAttr('src')) { a='src'; } $('.js-321 .slide4').attr(a, (dpi>1) ? 'images/wechatimg739-960.jpg' : 'images/wechatimg739-480.jpg');
var a='data-src'; if($('.js-321 .slide5').hasAttr('src')) { a='src'; } $('.js-321 .slide5').attr(a, (dpi>1) ? 'images/211-960.jpg' : 'images/211-480.jpg');
var a='data-src'; if($('.js-321 .slide6').hasAttr('src')) { a='src'; } $('.js-321 .slide6').attr(a, (dpi>1) ? 'images/wechatimg49-960-2.jpg' : 'images/wechatimg49-480-1.jpg');
var a='data-src'; if($('.js-321 .slide7').hasAttr('src')) { a='src'; } $('.js-321 .slide7').attr(a, (dpi>1) ? 'images/311-960.jpg' : 'images/311-480.jpg');
var a='data-src'; if($('.js-321 .slide8').hasAttr('src')) { a='src'; } $('.js-321 .slide8').attr(a, (dpi>1) ? 'images/1-960-2.jpg' : 'images/1-480-1.jpg');
var a='data-src'; if($('.js-321 .slide9').hasAttr('src')) { a='src'; } $('.js-321 .slide9').attr(a, (dpi>1) ? 'images/rg-960.jpg' : 'images/rg-480.jpg');
var a='data-src'; if($('.js-321 .slide10').hasAttr('src')) { a='src'; } $('.js-321 .slide10').attr(a, (dpi>1) ? 'images/wechatimg23021313-960.jpg' : 'images/wechatimg23021313-480.jpg');
var a='data-src'; if($('.js-321 .slide11').hasAttr('src')) { a='src'; } $('.js-321 .slide11').attr(a, (dpi>1) ? 'images/wechatimg551-2-960-2.jpg' : 'images/wechatimg551-2-480-1.jpg');
$('.js-322').attr('src', (dpi>1) ? 'images/echo-huang-312.png' : 'images/echo-huang-156.png');
$('.js-323').attr('src', 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-70.png');
$('.js-324').attr('src', 'images/facebook29-copy-61.png');
$('.js-325').attr('src', 'images/u-2260898377-2056122756-fm-26-gp-0-copy-61.png');
$('.js-326').attr('src', 'images/u-2260898377-2056122756-fm-26-gp-0-copy-61.png');
$('.js-327').attr('src', (dpi>1) ? 'images/ju-xing-960.png' : 'images/ju-xing-480.png');
$('.js-328').attr('src', (dpi>1) ? 'images/the-complete-works--664.png' : 'images/the-complete-works--332.png');
$('.js-329').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-196.png' : 'images/rectangle-3-copy-9-98.png');
$('.js-330').attr('src', (dpi>1) ? 'images/wechatimg159-160.jpg' : 'images/wechatimg159-80.jpg');
$('.js-331').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-196.png' : 'images/rectangle-3-copy-9-98.png');
$('.js-332').attr('src', (dpi>1) ? 'images/2222222312321-160.jpg' : 'images/2222222312321-80.jpg');
$('.js-333').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-196.png' : 'images/rectangle-3-copy-9-98.png');
$('.js-334').attr('src', (dpi>1) ? 'images/wechatimg230-160.jpg' : 'images/wechatimg230-80.jpg');
$('.js-335').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-196.png' : 'images/rectangle-3-copy-9-98.png');
$('.js-336').attr('src', (dpi>1) ? 'images/69646ccagy1fm402d6wzyj22bp1minpd-160-1.jpg' : 'images/69646ccagy1fm402d6wzyj22bp1minpd-80-1.jpg');
$('.js-337').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-196.png' : 'images/rectangle-3-copy-9-98.png');
$('.js-338').attr('src', (dpi>1) ? 'images/69646ccagy1fqg4hcsdmoj21ll1547wh-160-2.jpg' : 'images/69646ccagy1fqg4hcsdmoj21ll1547wh-80-1.jpg');
$('.js-339').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-196.png' : 'images/rectangle-3-copy-9-98.png');
$('.js-340').attr('src', (dpi>1) ? 'images/1111-160.jpg' : 'images/1111-80.jpg');
$('.js-341').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-196.png' : 'images/rectangle-3-copy-9-98.png');
$('.js-342').attr('src', (dpi>1) ? 'images/69646ccagy1fkc9wfo7n3j21yk1d41kx-160-1.jpg' : 'images/69646ccagy1fkc9wfo7n3j21yk1d41kx-80-1.jpg');
$('.js-343').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-196.png' : 'images/rectangle-3-copy-9-98.png');
$('.js-344').attr('src', (dpi>1) ? 'images/239196646444661547-92-1.jpg' : 'images/239196646444661547-46-1.jpg');
$('.js-345').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-196.png' : 'images/rectangle-3-copy-9-98.png');
$('.js-346').attr('src', (dpi>1) ? 'images/69646ccagy1fm402dtrqsj20hs0nt7bg-82-1.jpg' : 'images/69646ccagy1fm402dtrqsj20hs0nt7bg-41-1.jpg');
$('.js-347').attr('src', (dpi>1) ? 'images/xin-lang-wei-bo-biao-zhi-tu-biao_-copy-4-160.png' : 'images/xin-lang-wei-bo-biao-zhi-tu-biao_-copy-4-80.png');
$('.js-348').attr('src', (dpi>1) ? 'images/facebook29-copy-3-160.png' : 'images/facebook29-copy-3-80.png');
$('.js-349').attr('src', (dpi>1) ? 'images/u-2260898377-2056122756-fm-26-gp-0-copy-5-160.png' : 'images/u-2260898377-2056122756-fm-26-gp-0-copy-5-80.png');
$('.js-350').attr('src', 'images/xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-70.png');
$('.js-351').attr('src', 'images/facebook29-61.png');
$('.js-352').attr('src', 'images/instagram-2-61.png');}else{var a='data-src'; if($('.js-321 .slide0').hasAttr('src')) { a='src'; } $('.js-321 .slide0').attr(a, (dpi>1) ? 'images/69646ccagy1fd1phvpw65j22gi1w0hdt-640-1.jpg' : 'images/69646ccagy1fd1phvpw65j22gi1w0hdt-320-1.jpg');
var a='data-src'; if($('.js-321 .slide1').hasAttr('src')) { a='src'; } $('.js-321 .slide1').attr(a, (dpi>1) ? 'images/psb-640-1.jpg' : 'images/psb-320-1.jpg');
var a='data-src'; if($('.js-321 .slide2').hasAttr('src')) { a='src'; } $('.js-321 .slide2').attr(a, (dpi>1) ? 'images/wechatimg24-640.jpg' : 'images/wechatimg24-320.jpg');
var a='data-src'; if($('.js-321 .slide3').hasAttr('src')) { a='src'; } $('.js-321 .slide3').attr(a, (dpi>1) ? 'images/wechatimg680-2-640.jpg' : 'images/wechatimg680-2-320.jpg');
var a='data-src'; if($('.js-321 .slide4').hasAttr('src')) { a='src'; } $('.js-321 .slide4').attr(a, (dpi>1) ? 'images/wechatimg739-640.jpg' : 'images/wechatimg739-320.jpg');
var a='data-src'; if($('.js-321 .slide5').hasAttr('src')) { a='src'; } $('.js-321 .slide5').attr(a, (dpi>1) ? 'images/211-640.jpg' : 'images/211-320.jpg');
var a='data-src'; if($('.js-321 .slide6').hasAttr('src')) { a='src'; } $('.js-321 .slide6').attr(a, (dpi>1) ? 'images/wechatimg49-640-1.jpg' : 'images/wechatimg49-320-2.jpg');
var a='data-src'; if($('.js-321 .slide7').hasAttr('src')) { a='src'; } $('.js-321 .slide7').attr(a, (dpi>1) ? 'images/311-640.jpg' : 'images/311-320.jpg');
var a='data-src'; if($('.js-321 .slide8').hasAttr('src')) { a='src'; } $('.js-321 .slide8').attr(a, (dpi>1) ? 'images/1-640-1.jpg' : 'images/1-320-2.jpg');
var a='data-src'; if($('.js-321 .slide9').hasAttr('src')) { a='src'; } $('.js-321 .slide9').attr(a, (dpi>1) ? 'images/rg-640.jpg' : 'images/rg-320.jpg');
var a='data-src'; if($('.js-321 .slide10').hasAttr('src')) { a='src'; } $('.js-321 .slide10').attr(a, (dpi>1) ? 'images/wechatimg23021313-640.jpg' : 'images/wechatimg23021313-320.jpg');
var a='data-src'; if($('.js-321 .slide11').hasAttr('src')) { a='src'; } $('.js-321 .slide11').attr(a, (dpi>1) ? 'images/wechatimg551-2-640-1.jpg' : 'images/wechatimg551-2-320-1.jpg');
$('.js-322').attr('src', (dpi>1) ? 'images/echo-huang-208.png' : 'images/echo-huang-104.png');
$('.js-323').attr('src', 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-47.png');
$('.js-324').attr('src', 'images/facebook29-copy-41.png');
$('.js-325').attr('src', 'images/u-2260898377-2056122756-fm-26-gp-0-copy-41.png');
$('.js-326').attr('src', 'images/u-2260898377-2056122756-fm-26-gp-0-copy-41.png');
$('.js-327').attr('src', (dpi>1) ? 'images/ju-xing-640.png' : 'images/ju-xing-320.png');
$('.js-328').attr('src', (dpi>1) ? 'images/the-complete-works--444.png' : 'images/the-complete-works--222.png');
$('.js-329').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-330').attr('src', (dpi>1) ? 'images/wechatimg159-106.jpg' : 'images/wechatimg159-53.jpg');
$('.js-331').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-332').attr('src', (dpi>1) ? 'images/2222222312321-108.jpg' : 'images/2222222312321-54.jpg');
$('.js-333').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-334').attr('src', (dpi>1) ? 'images/wechatimg230-106.jpg' : 'images/wechatimg230-53.jpg');
$('.js-335').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-336').attr('src', (dpi>1) ? 'images/69646ccagy1fm402d6wzyj22bp1minpd-106-1.jpg' : 'images/69646ccagy1fm402d6wzyj22bp1minpd-53-1.jpg');
$('.js-337').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-338').attr('src', (dpi>1) ? 'images/69646ccagy1fqg4hcsdmoj21ll1547wh-108-1.jpg' : 'images/69646ccagy1fqg4hcsdmoj21ll1547wh-54-1.jpg');
$('.js-339').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-340').attr('src', (dpi>1) ? 'images/1111-108.jpg' : 'images/1111-54.jpg');
$('.js-341').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-342').attr('src', (dpi>1) ? 'images/69646ccagy1fkc9wfo7n3j21yk1d41kx-106-1.jpg' : 'images/69646ccagy1fkc9wfo7n3j21yk1d41kx-53-1.jpg');
$('.js-343').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-344').attr('src', (dpi>1) ? 'images/239196646444661547-62-1.jpg' : 'images/239196646444661547-31-1.jpg');
$('.js-345').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-346').attr('src', (dpi>1) ? 'images/69646ccagy1fm402dtrqsj20hs0nt7bg-56-1.jpg' : 'images/69646ccagy1fm402dtrqsj20hs0nt7bg-28-1.jpg');
$('.js-347').attr('src', (dpi>1) ? 'images/xin-lang-wei-bo-biao-zhi-tu-biao_-copy-4-106.png' : 'images/xin-lang-wei-bo-biao-zhi-tu-biao_-copy-4-53.png');
$('.js-348').attr('src', (dpi>1) ? 'images/facebook29-copy-3-106.png' : 'images/facebook29-copy-3-53.png');
$('.js-349').attr('src', (dpi>1) ? 'images/u-2260898377-2056122756-fm-26-gp-0-copy-5-106.png' : 'images/u-2260898377-2056122756-fm-26-gp-0-copy-5-53.png');
$('.js-350').attr('src', 'images/xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-47.png');
$('.js-351').attr('src', 'images/facebook29-41.png');
$('.js-352').attr('src', 'images/instagram-2-41.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-321 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 1050,dots: false,arrows: false,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2450});
});