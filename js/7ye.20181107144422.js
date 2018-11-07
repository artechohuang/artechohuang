(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js-540').attr('src', (dpi>1) ? 'images/echo-huang-780.png' : 'images/echo-huang-390.png');
$('.js-541').attr('src', (dpi>1) ? 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-46.png' : 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-23.png');
$('.js-542').attr('src', (dpi>1) ? 'images/facebook29-copy-38.png' : 'images/facebook29-copy-19.png');
$('.js-543').attr('src', (dpi>1) ? 'images/u-2260898377-2056122756-fm-26-gp-0-copy-40.png' : 'images/u-2260898377-2056122756-fm-26-gp-0-copy-20.png');
$('.js-544').attr('src', 'images/ju-xing-copy-2-1189.png');
$('.js-545').attr('src', 'images/zhi-xian-71.png');
$('.js-546').attr('src', 'images/ju-xing-copy-2-1200.png');
$('.js-547').attr('src', 'images/kuang-418.png');
$('.js-548').attr('src', 'images/pianting-1-copy-2-457.jpg');
$('.js-549').attr('src', (dpi>1) ? 'images/xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-46.png' : 'images/xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-23.png');
$('.js-550').attr('src', (dpi>1) ? 'images/facebook29-38.png' : 'images/facebook29-19.png');
$('.js-551').attr('src', (dpi>1) ? 'images/instagram-2-40.png' : 'images/instagram-2-20.png');}else{$('.js-540').attr('src', (dpi>1) ? 'images/echo-huang-318.png' : 'images/echo-huang-159.png');
$('.js-541').attr('src', (dpi>1) ? 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-38.png' : 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-19.png');
$('.js-542').attr('src', (dpi>1) ? 'images/facebook29-copy-34.png' : 'images/facebook29-copy-17.png');
$('.js-543').attr('src', (dpi>1) ? 'images/u-2260898377-2056122756-fm-26-gp-0-copy-34.png' : 'images/u-2260898377-2056122756-fm-26-gp-0-copy-17.png');
$('.js-544').attr('src', (dpi>1) ? 'images/ju-xing-copy-2-640.png' : 'images/ju-xing-copy-2-320.png');
$('.js-545').attr('src', (dpi>1) ? 'images/zhi-xian-26.png' : 'images/zhi-xian-13.png');
$('.js-546').attr('src', (dpi>1) ? 'images/ju-xing-copy-2-640-1.png' : 'images/ju-xing-copy-2-320-1.png');
$('.js-547').attr('src', 'images/kuang-241.png');
$('.js-548').attr('src', 'images/pianting-1-copy-2-204.jpg');
$('.js-549').attr('src', (dpi>1) ? 'images/xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-36.png' : 'images/xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-18.png');
$('.js-550').attr('src', (dpi>1) ? 'images/facebook29-32.png' : 'images/facebook29-16.png');
$('.js-551').attr('src', (dpi>1) ? 'images/instagram-2-32.png' : 'images/instagram-2-16.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});