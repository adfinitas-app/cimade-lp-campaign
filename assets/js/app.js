$(document).ready(function()
{
	AdaptHeader();

	/*CENTER*/
	function 	vertical_center(item)
	{
		var 	height;
		var 	total_height;
		var 	padding;

		height = $(item).height();
		total_height = $(item).parent().height();
		if (total_height - 1 < height)
			return (false);
		padding = (total_height - height) / 2 - 20;
		$(item).css({"padding-top" : padding});
		return (true);
	}

	/*INITIAL CENTER*/
	$(".content").each(function(){
		vertical_center(this);
	});

	/*RESIZE CENTER*/
	$(window).resize(function() {
		if($('#d-menu').hasClass('open')) {
			$("#d-menu").removeClass("open");
			$("#d-menu").slideToggle( "slow", function() {
			});
		}
		AdaptHeader();
		auto_height_adjust();
		auto_text_adjust();
		$(".content").each(function(){vertical_center(this);});
	});

	/*HOVER ACTION DIV*/
	$(".box_item").hover(function () {
		$(this).find(".img_text_container").first().stop().animate({opacity: 1, filter : "alpha(opacity=100)"}, 150, function(){});
	},function () {
		$(this).find(".img_text_container").first().stop().animate({opacity: 0, filter : "alpha(opacity=0);"}, 400, function(){});
	});

	/*HEIGHT ADJUST*/
	auto_height_adjust();
	function 	auto_height_adjust()
	{
		var 	count;

		count = 0;
		$(".box_resize").each(function(){
			var 	height;

			$(this).find(".box_item").first().css({"height" : "400px"});
			$(this).next().find(".box_item").first().css({"height" : "400px"});
			if ($(this).height() < $(this).next().height() && count % 2 == 0)
			{
				height = $(this).next().height() - $(this).height() + $(this).find(".box_item").height();
				$(this).find(".box_item").first().css({"height": height});
			}
			else if ($(this).height() < $(this).next().height() && count / 2 == 0)
			{
				height = $(this).height() - $(this).next().height() + $(this).next().find(".box_item").height();
				$(this).next().find(".box_item").first().css({"height": height});
			}
			count++;
		});
	}

	auto_text_adjust();
	function 	auto_text_adjust()
	{
		vertical_center($(".text_style_large"));
	}

	/*VIDEO PLAY*/
	//document.getElementById("bg_video").pause();
	/*$("#button_play").click(function()
	{
		$("#slide_video").fadeOut('slow', function(){
			$(this).remove();
			document.getElementById("bg_video").play();
		});
	});
	$('video').each(function() {
		var $img = $(this).find('img'),
		$vid = $(this).find('vid');

		$img.bind('click', function() { $vid[0].play() });

		$vid.bind('play', function() {
			$img.animate({opacity: 0}, 1000, 'linear', function() {
				if($vid[0].playing) {
					$img.css({visibility: 'hidden'});
				}
			});
		});

		$vid.bind('pause ended', function() {
			$img.css({visibility: 'visible'});
			$img.animate({opacity: 1}, 1000, 'linear');
		});

	});*/

	$("#link-accompagner").hover(function() {
		$("#text-accompagner").show();
		$("#text-observer").hide();
		$("#text-denoncer").hide();
		$("#text-actions").hide();
	});
	$("#link-observer").hover(function() {
		$("#text-observer").show();
		$("#text-actions").hide();
		$("#text-accompagner").hide();
		$("#text-denoncer").hide();
	});
	$("#link-denoncer").hover(function() {
		$("#text-denoncer").show();
		$("#text-observer").hide();
		$("#text-actions").hide();
		$("#text-accompagner").hide();
	});
	$("#link-actions").hover(function() {
		$("#text-actions").show();
		$("#text-observer").hide();
		$("#text-accompagner").hide();
		$("#text-denoncer").hide();
	});
});

function AdaptHeader() {
	var y = document.getElementById('header').clientHeight;
	var x = $(".text-header").css('height');
	$('.block-header-r').css({"height" : y, "padding-top" : ((y - parseInt(x)) / 2)});
	x = $(".portrait-header").css('height');
	$('.block-header').css({"height" : y, "padding-top" : "6px"});
	x = $(".button-don-header").css('height');
	$('.block-don').css({"height" : y, "padding-top" : ((y - parseInt(x)) / 2)});
    var $img = $('#logo');
    	$img.on('load', function(){
	    	$('#div-logo').css({"height" : y, "padding-top" : ((y - parseInt($(this).height())) / 2)});
	    });
} 

$("#button-burger").click(function() {
	if($('#d-menu').hasClass('open')) {
		$("#d-menu").removeClass("open");
	}
	$("#d-menu").slideToggle( "slow", function() {
		$("#d-menu").addClass("open");
	});
});

$(".close-d-menu").click(function() {
	$("#d-menu").removeClass("open");
	$("#d-menu").slideToggle( "slow", function() {
	});
});

$("body").click(function() {
	if($('#d-menu').hasClass('open')) {
		$("#d-menu").removeClass("open");
		$("#d-menu").slideToggle( "slow", function() {
		});
	}
});


var images = new Array();

function 	preload() {
	for (i = 0; i < preload.arguments.length; i++) {
		images[i] = new Image();
		images[i].src = preload.arguments[i];
	}
}

preload("https://s3.amazonaws.com/heroku-adfinitas-campaign/La-Cimade-lp-campaign-facebook/img_tease_elias.png",
	"https://s3.amazonaws.com/heroku-adfinitas-campaign/La-Cimade-lp-campaign-facebook/img_tease_irena.png",
	"https://s3.amazonaws.com/heroku-adfinitas-campaign/La-Cimade-lp-campaign-facebook/img_tease_zeinab.png"
	);

var description_teaser = ["Retrouvez le portrait d’Elias, 35 ans, syrien, bloqué à Calais.", 
"Retrouvez le portrait d’Iréna, 30 ans, ukrainienne, ne parvenant pas à faire renouveler son titre de séjour.",
"Retrouvez le portrait de Zeinab, 28 ans, de république démocratique du congo, en situation irrégulière depuis 5 ans."];

var titre_teaser = ["À PARTIR DU 18 OCTOBRE",
"À PARTIR DU 28 OCTOBRE",
"À PARTIR DU 7 NOVEMBRE"];

var bg_teaser = ["https://s3.amazonaws.com/heroku-adfinitas-campaign/La-Cimade-lp-campaign-facebook/img_tease_elias.png",
"https://s3.amazonaws.com/heroku-adfinitas-campaign/La-Cimade-lp-campaign-facebook/img_tease_irena.png",
"https://s3.amazonaws.com/heroku-adfinitas-campaign/La-Cimade-lp-campaign-facebook/img_tease_zeinab.png"];

$('.portrait-elias').click(function () {
	changeTeaser(0);
	scrollTo($('#contener-img-teaser'));
});

$('.portrait-irena').click(function () {
	changeTeaser(1);
	scrollTo($('#contener-img-teaser'));
});

$('.portrait-zeinab').click(function () {
	changeTeaser(2);
	scrollTo($('#contener-img-teaser'));
});

function changeTeaser(nb) {
	$('#contener-img-teaser').css("background-image", "url(" + bg_teaser[nb] + ")");  
	$('#titre-teaser').text(titre_teaser[nb]);
	$('#description-teaser').text(description_teaser[nb]);
}

function 	scrollTo(next){
	if ($(next).length != 0)
	{
		$('html, body').stop().animate({
			scrollTop: $(next).offset().top + 1
		}, 700, 'swing');
		return false;
	}
};

$('.scroll_actions').click(function(){
	scrollTo($("#actions"));
});

$('#container-button-video-demo').click(function () {
	$('#container-button-video-demo').hide();
	$('#video-container').show();
	$('#container-video-demo').show();
});











