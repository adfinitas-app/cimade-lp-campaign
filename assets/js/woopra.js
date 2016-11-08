var iframe1 = document.querySelector('#video-demo');
var iframe2 = document.querySelector('.video-portrait');
var player1 = new Vimeo.Player(iframe1);
player1.on('play', function() {
	woopra.track('interaction', {category:"demo-MG16",action:"clic",url:document.location.href,title: document.title});
});
var player2 = new Vimeo.Player(iframe2);
player2.on('play', function() {
	if ($('.video-portrait').attr("src") == "https://player.vimeo.com/video/187147885") {
		woopra.track('interaction', {category:"video-elias-MG16",action:"clic",url:document.location.href,title: document.title});
	}
	else if ($('.video-portrait').attr("src") == "https://player.vimeo.com/video/188299089") {
		woopra.track('interaction', {category:"video-zeinabs-MG16",action:"clic",url:document.location.href,title: document.title});
	}
	else if ($('.video-portrait').attr("src") == "https://player.vimeo.com/video/190226396") {
		woopra.track('interaction', {category:"video-irena-MG16",action:"clic",url:document.location.href,title: document.title});
	}
});

$('.bouton-don-header').click(function(){
	woopra.track('interaction', {category:"don-MG16",action:"clic",url:document.location.href,title: document.title});
});

$('.logo').click(function(){
	woopra.track('interaction', {category: "logo-MG16",action: "clic",url: document.location.href,title: document.title});
});

$(".btn_share_fb").click(function(){
	woopra.track('interaction', {category:"fb-MG16",action:"clic",url:document.location.href,title: document.title});
});

$(".Femmes").click(function(){
	woopra.track('interaction', {category:"actions-MG16",action:"clic",url:document.location.href,title: document.title});
});

$(".Hébergement").click(function(){
	woopra.track('interaction', {category:"actions-MG16",action:"clic",url:document.location.href,title: document.title});
});

$(".Sensibilisation").click(function(){
	woopra.track('interaction', {category:"actions-MG16",action:"clic",url:document.location.href,title: document.title});
});

$(".Prison").click(function(){
	woopra.track('interaction', {category:"actions-MG16",action:"clic",url:document.location.href,title: document.title});
});

$(".Rétention").click(function(){
	woopra.track('interaction', {category:"actions-MG16",action:"clic",url:document.location.href,title: document.title});
});

$(".Malades").click(function(){
	woopra.track('interaction', {category:"actions-MG16",action:"clic",url:document.location.href,title: document.title});
});

$(".Outre-mer").click(function(){
	woopra.track('interaction', {category:"actions-MG16",action:"clic",url:document.location.href,title: document.title});
});