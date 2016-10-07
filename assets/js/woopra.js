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