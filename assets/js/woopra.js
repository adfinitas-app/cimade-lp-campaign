$('.logo').click ( function () {
	woopra.track('interaction', {
		category: "logo-MG16",
		action: "clic",
		url: document.location.href,
		title: document.title
	});
});

$(".btn_share_fb").click(function(){
	woopra.track('interaction', {category:"fb-MG16",action:"clic",url:document.location.href,title: document.title});
});

$(".Femmes").click(function(){
	woopra.track('interaction', {category:actions-MG16,action:clic,url:document.location.href,title: document.title});
});

$(".Hébergement").click(function(){
	woopra.track('interaction', {category:actions-MG16,action:clic,url:document.location.href,title: document.title});
});

$(".Sensibilisation").click(function(){
	woopra.track('interaction', {category:actions-MG16,action:clic,url:document.location.href,title: document.title});
});

$(".Prison").click(function(){
	woopra.track('interaction', {category:actions-MG16,action:clic,url:document.location.href,title: document.title});
});

$(".Rétention").click(function(){
	woopra.track('interaction', {category:actions-MG16,action:clic,url:document.location.href,title: document.title});
});

$(".Malades").click(function(){
	woopra.track('interaction', {category:actions-MG16,action:clic,url:document.location.href,title: document.title});
});

$(".Outre-mer").click(function(){
	woopra.track('interaction', {category:actions-MG16,action:clic,url:document.location.href,title: document.title});
});