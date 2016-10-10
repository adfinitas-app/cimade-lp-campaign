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
prehome.innerHTML = "<div class='prehome-container'><div id='logo-prehome' style='opacity: 0;' class='center reveal'><div class='title'><p class='red'>Réfugiés</p><p>Situation de crise</p></div></div><p id='text-prehome'style='opacity: 0;' class='reveal'>La situation des réfugiés vous préoccupe.<br />Laissez-nous vos coordonnées, notre équipe vous contactera pour vous en tenir informé(e).</p><form novalidate><input name='firstname' type='text' placeholder='Prénom' style='opacity:0;' class='input-prehome reveal' /><input name='lastname' type='text' placeholder='Nom' style='opacity:0;' class='input-prehome reveal' /><input name='email' type='text' placeholder='Email' style='opacity:0;' class='input-prehome reveal' /><input type='text' name='phone' placeholder='Téléphone' style='opacity:0;' class='input-prehome reveal' /></form style='opacity: 0;'><a style='opacity: 0;' id='button-prehome' href='#' class='button reveal'>Validez</a><p id='text-button' class='reveal' style='opacity:0;font-size: 12px;'>Nous garantissons la confidentialité de vos coordonnées.</p></div><a class='close' href='#'><img id='close-prehome' src='https://s3.amazonaws.com/heroku-adfinitas-campaign/lacimade-enrichissement/prehome/close.png' alt='close'></a>";
document.getElementsByTagName('body')[0].appendChild(prehome);

var style = document.createElement('style');
var css = "#prehome-15{position: fixed;width: 100%;top: 0px;z-index: 99999;min-height: 100%;padding: 0px 0px 60px;background-color: black;background-image: url('https://s3.amazonaws.com/heroku-adfinitas-campaign/lacimade-enrichissement/prehome/prehome-bg.png'); background-position: left;background-repeat: no-repeat;background-size:cover;} #prehome-15 .prehome-container {margin-left: 50%;} #prehome-15 .prehome-container {text-align: center;} #prehome-15 .button {background-color: #f2361a; text-transform: uppercase;padding: 10px 45px;font-size: 23px;color: white;font-weight:bold;} #prehome-15 p {font-weight: 300 ; color: white; font-size: 18px;margin: 50px;} /*body #prehome {font-size: 0.0001px;text-align: center;} #prehome:before {content: '';display: inline-block;vertical-align: middle;height: 100%;} #prehome .prehome-container {display: inline-block;font-size: 1rem;vertical-align: middle;}*//*#prehome .prehome-container {position: relative;display: inline-block;top: 50%;left: 50%;transform: translate(-50%, -50%);}*/#prehome-15 {display: flex;justify-content: center;}#prehome-15 .prehome-container {align-self: center;}@media only screen and (max-width: 700px){#prehome-15 .prehome-container {margin-left:0% !important;;}} #prehome-15 .close {position: absolute;top:5%;right:5%;background:0!important} .reveal {transition:opacity 0.5s linear;} #prehome-15 form input[type='text'] {display:block;border:0;margin:0 auto;margin-bottom:15px;width:325px;height:42px;padding:8px;} #prehome-15 form input[type='text']:last-child {margin-bottom: 55px;} #prehome-15 .title p {font-size:50px;margin: 10px 0px;font-family:'nudista-web';text-transform:uppercase;} #prehome-15 .red {color:#f2361a;margin-bottom:10px;} #text-prehome {font-weight: bold; !important;margin:50px; max-width:525px;} @media only screen and (max-width: 400px){#prehome-15 .title p {font-size: 35px !important;} #prehome-15 form input [type='text'] {width:intial;}} #prehome-15.hide {visibility: hidden;opacity: 0;transition: visibility 0s linear 1s, opacity 1s;}";
style.type = 'text/css';
style.appendChild(document.createTextNode(css));
document.getElementsByTagName('head')[0].appendChild(style);

window.setTimeout(showLogo, 1000);
window.setTimeout(showText, 2000);
window.setTimeout(showForm, 3000);
window.setTimeout(showButton, 4000);
function showLogo() {
  document.getElementById('logo-prehome').style.opacity = "1";
}
function showText() {
  document.getElementById('text-prehome').style.opacity = "1";
}
function showForm() {
  var elements = document.getElementsByClassName('input-prehome');
  elements[0].style.opacity = "1";
  elements[1].style.opacity = "1";
  elements[2].style.opacity = "1";
  elements[3].style.opacity = "1";
}
var closePre = document.getElementById("close-prehome");
closePre.addEventListener("click", closePrehome);
function showButton() {
  document.getElementById('button-prehome').style.opacity = "1";
  document.getElementById('text-button').style.opacity = "1";
}
/* Tracking interaction */
jQuery("#prehome-15 #button-prehome").click(function() {
  var firstname = $("input[name='firstname']").val();
  var lastname = $("input[name='lastname']").val();
  var email = $("input[name='email']").val();
  var phone = $("input[name='phone']").val();
  if (firstname.length == 0) {
    alert("Veuillez entrer un prénom valide");
    return;
  }
  if (lastname.length == 0) {
    alert("Veuillez entrer un nom valide");
    return;
  }
  if (email.length == 0 || isValidEmail(email) == false) {
    alert("Veuillez entrer un email valide");
    return;
  }
  if (phone.length == 0 || isNumeric(phone) == false) {
    alert("Veuillez entrer un numéro de téléphone valide");
    return;
  }
  woopra.identify({
    "firstname": firstname,
    "lastname": lastname,
    "email": email,
    "phone": phone
  });
  woopra.track('A01', {
    origine: "A.2",
    action: "clic",
    url: document.location.href,
    title: document.title,
    value: ""
  });
  if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
  }
  _cio.identify({
    "id": email,
    "email": email,
    "created_at" : Math.floor(Date.now() / 1000),
    "firstname": firstname,
    "lastname": lastname,
    "phone": phone
  });
  _cio.track("A01");

  // code 1000 mercis
  window._troq = window._troq || [];
  _troq.push(['tagid', '6559240-393784f20019f367cff60ec62e172d2a'],

    ['_rtgpg', 'completedform'],
    ['_rtgconversion', '1'],
    ['_rtgidform', 'nl'],
    ['_email', '']

    );

  (function() {
    if (window._troqck !== 1) {
      var a = document.createElement("script");
      a.type = "text/javascript";
      a.async = !0;
      a.src = "//mmtro.com/tro.js";
      var b = document.getElementsByTagName("script")[0];
      b.parentNode.insertBefore(a, b);
    }
  })();

  closePrehome();
});
/* Fin tracking interaction */