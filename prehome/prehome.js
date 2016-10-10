var _cio = _cio || [];
(function() {
    var a,b,c;a=function(f){return function(){_cio.push([f].
       concat(Array.prototype.slice.call(arguments,0)))}};b=["load","identify",
    "sidentify","track","page"];for(c=0;c<b.length;c++){_cio[b[c]]=a(b[c])};
    var t = document.createElement('script'),
    s = document.getElementsByTagName('script')[0];
    t.async = true;
    t.id    = 'cio-tracker';
    t.setAttribute('data-site-id', '793291f19fcf3f23caf6');
    t.src = 'https://assets.customer.io/assets/track.js';
    s.parentNode.insertBefore(t, s);
})();

function closePrehome() {
    document.getElementById('prehome-15').className += " hide";
}
$.getScript("https://use.typekit.net/jez4qkh.js", function(){
    try{
     Typekit.load({ async: true });
 } catch(e) {
     console.log("not loaded");
 }
});
function isValidEmail(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
};
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
var prehome = document.createElement('div');
prehome.setAttribute("id", "prehome-15");
prehome.setAttribute("class", "prehome");
prehome.innerHTML = "<div style='height: 100vh; width: 100%; position: relative'><div class='prehome-container' style='position: absolute; bottom: 0; width: 100%;'><a href='http://www.lacimade.org/?utm_source=LP-MG&utm_medium=LP&utm_campaign=MG16' target='_blank' style='text-align: center'><p><img id='pre_logo' class='logo' alt='Logo La Cimade' style='padding-top: 5px; padding-bottom: 10px; display: inline-block; opacity: 0;' src='https://s3.amazonaws.com/heroku-adfinitas-campaign/La-Cimade-lp-campaign-facebook/img_prehome_logo.png'></p></a><p><h1 class='pre_title' style='opacity:0;'>Movinggesture</h1><h2 class='pre_subtitle' style='opacity:0;'>Une campagne mobile interactive</h2><p class='pre_text' style='opacity:0;'>Découvrez le parcours d’Elias, Iréna et Zeinab.<br>Aidez les à franchir les obstacles et à poursuivre l’histoire.<br><a target='_blank' href='http://movinggesture.lacimade.org/?utm_source=PH-MG&utm_medium=PH&utm_campaign=MG16'><button id='btn_decouvre' style='opacity:0;'>Je découvre MovingGesture</button></a></p></p></div></div><a class='close' href='#'><img id='close-prehome' src='https://s3.amazonaws.com/heroku-adfinitas-campaign/lacimade-enrichissement/prehome/close.png' alt='close'></a>";
document.getElementsByTagName('body')[0].appendChild(prehome);

var style = document.createElement('style');
var css = "#prehome-15{position:fixed;width:100%;top:0;z-index:99999;min-height:100%;padding:0 0 60px;background-color:#000;background-image:url(https://s3.amazonaws.com/heroku-adfinitas-campaign/La-Cimade-lp-campaign-facebook/img_prehome_bg.png);background-position:left;background-repeat:no-repeat;background-size:cover;display:flex;justify-content:center}#prehome-15 .prehome-container{margin-left:0;text-align:center;align-self:center}#prehome-15 .button{background-color:#f2361a;text-transform:uppercase;padding:10px 45px;font-size:23px;color:#fff;font-weight:700}#prehome-15 p{font-weight:300;color:#fff;font-size:18px;margin:50px}@media only screen and (max-width:700px){#prehome-15 .prehome-container{margin-left:0!important}}#prehome-15 .close{position:absolute;top:5%;right:5%;background:0!important}.reveal{transition:opacity .5s linear}#prehome-15 form input[type=text]{display:block;border:0;margin:0 auto 15px;width:325px;height:42px;padding:8px}#prehome-15 form input[type=text]:last-child{margin-bottom:55px}#prehome-15 .title p{font-size:50px;margin:10px 0;font-family:nudista-web;text-transform:uppercase}#prehome-15 .red{color:#f2361a;margin-bottom:10px}#text-prehome{font-weight:700;margin:50px;max-width:525px}@media only screen and (max-width:400px){#prehome-15 .title p{font-size:35px!important}#prehome-15 form input [type=text]{width:intial}}#prehome-15.hide{visibility:hidden;opacity:0;transition:visibility 0s linear 1s,opacity 1s}@font-face{font-family:Audimat;src:url(/assets/fonts/AUdimat-Regular.otf) format('truetype');font-weight:400;font-style:normal}@font-face{font-family:'Audimat Bold';src:url(/assets/fonts/AUdimat-Bold.otf) format('truetype');font-weight:700;font-style:normal}@font-face{font-family:UniversLTStd;src:url(/assets/fonts/UniversLTStd.otf) format('truetype');font-weight:400;font-style:normal}@font-face{font-family:'UniversLTStd Bold';src:url(/assets/fonts/UniversLTStd-Bold.otf) format('truetype');font-weight:700;font-style:normal}.pre_title{font-family:'Audimat Bold';font-size:50px;color:#f0473f;text-transform:uppercase;text-align:center;line-height:1}#btn_decouvre,.pre_subtitle,.pre_text{color:#fff;text-align:center}.pre_subtitle{font-family:Audimat;font-size:27px;line-height:1;margin-bottom:20px}.pre_text{font-family:UniversLTStd;font-size:15px;line-height:1}#btn_decouvre{margin-top:30px;margin-bottom:20px;font-family:AUdimat;font-size:18px;border:2px solid #fff;padding:13px 18px;display:inline-block;-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;-ms-transition:all .2s ease-in-out}#btn_decouvre:hover{background-color:#fff;color:#000}";
style.type = 'text/css';
style.appendChild(document.createTextNode(css));
document.getElementsByTagName('head')[0].appendChild(style);

window.setTimeout(showLogo, 1000);
window.setTimeout(showText, 2000);
window.setTimeout(showButton, 3000);
function showLogo() {
    $("#pre_logo").animate({"opacity" : "1"}, "slow");
}
function showText() {
    $(".pre_title, .pre_subtitle, .pre_text").animate({"opacity" : "1"}, "slow");
}
function showButton() {
    $("#btn_decouvre").animate({"opacity" : "1"}, "slow");
}
var closePre = document.getElementById("close-prehome");
closePre.addEventListener("click", closePrehome);

/* Tracking interaction */
/* Tracking interaction */
$("#btn-decouvre").click(function(){
    woopra.track('interaction', {category:ph-MG16,action:clic,url:document.location.href,title: document.title});
});

jQuery("#prehome-15 #button-prehome").click(function() {
    woopra.track('interaction', {
        category: "actions-MG16",
        action: "clic",
        url:document.location.href,
        title: document.title
    });
    closePrehome();
});
/* Fin tracking interaction */
/* Fin tracking interaction */
