$('.logo').click ( function () {
	woopra.track('interaction', {
		category: "logo-MG16",
		action: "clic",
		url: document.location.href,
		title: document.title
	});
});

