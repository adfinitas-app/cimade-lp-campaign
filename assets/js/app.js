$(document).ready(function() {
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
		AdaptHeader();
		valignBlockPortait();

		if($('#d-menu').hasClass('open')) {
			$("#d-menu").removeClass("open");
			$("#d-menu").slideToggle( "slow", function() {
			});
		}
		auto_height_adjust();
		auto_text_adjust();
		set_box_height();
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

	function 	auto_text_adjust() {
		vertical_center($(".text_style_large"));
	}

	valignBlockPortait();
});

function	valignBlockPortait() {
	var margin = parseInt($('.container-video-portrait').css("padding-bottom").replace("px", ""));
	var x = $('#slide-portrait').height();
	var y = $('#container-video-portrait').height();

	$('#slide-portrait').css({"padding-top" : (x - y) / 4});

	y = $('#block-video-portrait').height();
	x = $('#block-portrait').height();

	if ($(window).width() > 1025) {
		if (margin < 370) {
			$('#block-portrait').css({"margin-top" : ((y - parseInt(x)))});
		}
		else {
			$('#block-portrait').css({"margin-top" : (y - parseInt(x)) - (margin - 370)});
		}
	}
	else
		$('#block-portrait').css({"margin-top" : "30px"});
}


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

var 	cur_act = 1;

var 	text_title = [["dénoncer", "observer", "analyser", "accompagner"], ["défendre", "denoncer", "accueillir", "analyser"]];

var 	largest_text = ["<p>Présente dans 8 centres de rétention, La Cimade offre un accompagnement juridique pour les étrangers interpellés, notamment à Calais. Elle dénonce régulièrement des privations de liberté abusives et illégales. </p><p>A Grande-Synthe, situé à 40 kilomètres de Calais, un campement humanitaire a été installé. La Cimade a mis en place une permanence juridique pour informer, orienter et soutenir les migrants dans leurs démarches administratives.</p>",
"<p>La cimade dénonce régulièrement les conditions indignes d’accès au travail  des migrants et particulièrement des femmes. Depuis 2009, La Cimade a renforcé ses actions de plaidoyer pour la reconnaissance des droits des travailleurs sans papier en France.</p>",
"<p>Présente dans 8 centres de rétention, La Cimade offre un accompagnement juridique pour les étrangers interpellés, notamment à Calais. Elle dénonce régulièrement des privations de liberté abusives et illégales. </p><p>A Grande-Synthe, situé à 40 kilomètres de Calais, un campement humanitaire a été installé. La Cimade a mis en place une permanence juridique pour informer, orienter et soutenir les migrants dans leurs démarches administratives.</p>"];

var 	text = [["<p>La Cimade dénonce par voie de presse et au travers de ces publications les violations des droits fondamentaux des migrants bloqués aux frontières de l’Union Européenne.</p>",
"<p>La Cimade conduit des missions d’observation aux frontières comme à Calais, Ceuta et Melilla, en Italie et en Sicile. Les informations récoltées durant ces missions nourrissent des actions de plaidoyers auprès des pouvoirs publics.</p>",
"<p>D’autre part, avec ses partenaires internationaux, la Cimade travaille à l’élaboration d’analyses et de revendications communes, portées devant les gouvernements et les opinions publiques.</p>",
"<p>Présente dans 8 centres de rétention, La Cimade offre un accompagnement juridique pour les étrangers interpellés, notamment à Calais. Elle dénonce régulièrement des privations de liberté abusives et illégales. </p><p>A Grande-Synthe, situé à 40 kilomètres de Calais, un campement humanitaire a été installé. La Cimade a mis en place une permanence juridique pour informer, orienter et soutenir les migrants dans leurs démarches administratives.</p>"],
["<p>La Cimade, dans ses permanences, défend les personnes victimes d’exploitation par le travail et d’autres formes de traites des êtres humains.</p>",
"<p>La cimade dénonce régulièrement les conditions indignes d’accès au travail  des migrants et particulièrement des femmes. Depuis 2009, La Cimade a renforcé ses actions de plaidoyer pour la reconnaissance des droits des travailleurs sans papier en France.</p>",
"<p>La Cimade a par ailleurs mis en place des permanences spécifiques pour les femmes migrantes.</p>",
"<p>La Cimade participe à des consultations organisées par les pouvoirs publics visant à améliorer les conditions des femmes étrangères.</p>"]];

function 		calc_box_height()
{
	var 		save;
	var 		height;

	save = $("#text_container").html();

	$("#text_container").html(largest_text[0]);
	height = $("#text_container").height();
	$("#text_container").html(save);
	return (height);
}

set_box_height();

function 		set_box_height()
{
	$("#text_container").css({"height" : "auto"});
	$("#text_container").css({"height" : calc_box_height()});
}

$("#title_1").hover(function()
{
	$("#cursor").stop().animate({"padding-top" : "3px"}, 100);
	$(this).parent().children().children().css({"color" : "#868aa1"});
	$(this).children().css({"color" : "white"});
	$("#text_container").html(text[cur_act][0]);
});

$("#title_2").hover(function()
{
	$("#cursor").stop().animate({"padding-top" : "32px"}, 100);
	$(this).parent().children().children().css({"color" : "#868aa1"});
	$(this).children().css({"color" : "white"});
	$("#text_container").html(text[cur_act][1]);
});
$("#title_3").hover(function()
{
	$("#cursor").stop().animate({"padding-top" : "60px"}, 100);
	$(this).parent().children().children().css({"color" : "#868aa1"});
	$(this).children().css({"color" : "white"});
	$("#text_container").html(text[cur_act][2]);
});
$("#title_4").hover(function()
{
	$("#cursor").stop().animate({"padding-top" : "88px"}, 100);
	$(this).parent().children().children().css({"color" : "#868aa1"});
	$(this).children().css({"color" : "white"});
	$("#text_container").html(text[cur_act][3]);
});

var 	cur_slide;

cur_slide = 0;
refresh_slide();

$("#cursor_left").click(function()
{
	var 	pos;

	pos = parseInt($('#slider').css('transform').split(',')[4]);
	if (cur_slide != 0)
	{
		pos += 200;
		$("#slider").css({"transform": "translateX(" + pos + "px)"});
		cur_slide--;
		select_bar();
	}
	refresh_slide();
	if (cur_slide == 0)
		$("#cursor_left").css("opacity","0.2");
	else
		$("#cursor_left").css("opacity","1");
});

$("#cursor_right").click(function()
{
	var 	pos;

	pos = parseInt($('#slider').css('transform').split(',')[4]);
	if (cur_slide != 3)
	{	
		pos -= 200;
		$("#slider").css({"transform": "translateX(" + pos + "px)"});
		cur_slide++;
		select_bar();
	}
	refresh_slide();
});

function 	select_bar()
{
	var 	count;

	count = 0;
	$(".slide").children().css({"color" : "#868aa1", "font-size" : "34px"});
	$(".slide").css({"border-bottom" : "none"});
	$(".slide").each(function(){
		if (count == cur_slide)
		{		
			$(this).children().css({"color" : "white", "font-size" : "36px"});
			$(this).css({ borderBottom: "3px solid white"});
		}
		count++;
	});
}

$("#title_1_s").click(function(){
	cur_slide = 0;
	$("#slider").css({"transform": "translateX(0px)"});
	select_bar();
	refresh_slide();
});

$("#title_2_s").click(function(){
	cur_slide = 1;
	$("#slider").css({"transform": "translateX(-200px)"});
	select_bar();
	refresh_slide();
});

$("#title_3_s").click(function(){
	cur_slide = 2;
	$("#slider").css({"transform": "translateX(-400px)"});
	select_bar();
	refresh_slide();
});

$("#title_4_s").click(function(){
	cur_slide = 3;
	$("#slider").css({"transform": "translateX(-600px)"});
	select_bar();
	refresh_slide();
});

function  	refresh_view()
{
	var 	a;

	a = 1;
	while (a <= 4)
	{
		$("#title_" + a + " > p").html(text_title[cur_act][a - 1]);
		$("#title_" + a + "_s > p").html(text_title[cur_act][a - 1]);
		a++;
	}
	$("#text_container").html(text[cur_act][cur_slide]);
	refresh_slide();
}

function 	refresh_slide()
{
	$("#slider")
	$("#text_container_s").html(text[cur_act][cur_slide]);
	$("#cursor_left").css("opacity","1");
	$("#cursor_right").css("opacity","1");
	if (cur_slide == 0)
		$("#cursor_left").css("opacity","0.2");
	else if (cur_slide == 3)
		$("#cursor_right").css("opacity","0.2");
}

function AdaptHeader() {
	var y = document.getElementById('header').clientHeight;
	var x = $(".text-header").css('height');
	$('.block-header-r').css({"height" : y, "padding-top" : ((y - parseInt(x)) / 2)});
	x = $(".portrait-header").css('height');
	$('.block-header').css({"height" : y, "padding-top" : "6px"});
	var x = $(".button-don-header").css('height');
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

preload("https://s3.amazonaws.com/heroku-adfinitas-campaign/La-Cimade-lp-campaign-facebook/img_tease_irena.png",
	"https://s3.amazonaws.com/heroku-adfinitas-campaign/La-Cimade-lp-campaign-facebook/bg-zeinab.jpg",
	"https://s3.amazonaws.com/heroku-adfinitas-campaign/La-Cimade-lp-campaign-facebook/portrait-e.png"
	);

var titre_portrait = ["Elias, 35 ans, syrien, bloqué à Calais.",
"Zeinab, 28 ans, de république démocratique du congo est en situation irrégulière depuis 5 ans."];

var description_portrait = ['<span style="font-weight: bold">Elias ne parvient pas à rejoindre l’Angleterre</span> où il désire effectuer sa demande d’asile et <span style="font-weight: bold">où résident déjà sa femme et ses enfants.</span> Pris dans une rafle en octobre 2015, <span style="font-weight: bold">Elias a été conduit dans en centre de rétention administrative</span> puis, libéré quelques jours plus tard, il est retourné à Calais pour tenter de nouveau le passage.</p>',
'Elle est obligée de travailler au noir pour survivre et <span style="font-weight:bold">est exploitée la plupart du temps</span>. Dépourvue de fiche de paies elle n’arrive pas à obtenir des papiers en tant que salariée.'];

var bg_portrait = ["https://s3.amazonaws.com/heroku-adfinitas-campaign/La-Cimade-lp-campaign-facebook/img_tease_elias.png",
"https://s3.amazonaws.com/heroku-adfinitas-campaign/La-Cimade-lp-campaign-facebook/bg-zeinab.jpg",
"https://s3.amazonaws.com/heroku-adfinitas-campaign/La-Cimade-lp-campaign-facebook/bg-irena.jpg"];

var vidlink_portrait = ["https://player.vimeo.com/video/187147885",
"https://player.vimeo.com/video/188299089"];

var description_teaser = ["Retrouvez le portrait d’Elias, 35 ans, syrien, bloqué à Calais.", 
"Retrouvez le portrait de Zeinab, 28 ans, de république démocratique du congo, en situation irrégulière depuis 5 ans.",
"Retrouvez le portrait d’Iréna, 30 ans, ukrainienne, ne parvenant pas à faire renouveler son titre de séjour.",];

var titre_teaser = ["À PARTIR DU 18 OCTOBRE",
"À PARTIR DU 28 OCTOBRE",
"À PARTIR DU 7 NOVEMBRE"];

var bg_teaser = ["https://s3.amazonaws.com/heroku-adfinitas-campaign/La-Cimade-lp-campaign-facebook/img_tease_elias.png",
"https://s3.amazonaws.com/heroku-adfinitas-campaign/La-Cimade-lp-campaign-facebook/img_tease_zeinab.png",
"https://s3.amazonaws.com/heroku-adfinitas-campaign/La-Cimade-lp-campaign-facebook/img_tease_irena.png"];

var portrait_other = ["https://s3.amazonaws.com/heroku-adfinitas-campaign/La-Cimade-lp-campaign-facebook/portrait-e.png",
"https://s3.amazonaws.com/heroku-adfinitas-campaign/La-Cimade-lp-campaign-facebook/portrait-z.png",
"https://s3.amazonaws.com/heroku-adfinitas-campaign/La-Cimade-lp-campaign-facebook/portrait-i.png"];

var name_portrait= ["Elias", "Zeinab", "Irena"];

$('.portrait-elias').click(function () {
	changePortrait(0);
	scrollTo($('#slide-portrait'));
});

$('.portrait-zeinab').click(function () {
	changePortrait(1);
	scrollTo($('#slide-portrait'));
});

$('.portrait-irena').click(function () {
	changeTeaser(2);
	$('#block-teaser').removeClass('large-offset-1 end');
	$('#block-teaser').addClass('large-offset-6');
	$('#contener-img-teaser').css("background-position","10% 30%");
	scrollTo($('#contener-img-teaser'));
});

function changeTeaser(nb) {
	$('#contener-img-teaser').css("background-image", "url(" + bg_teaser[nb] + ")");  
	$('#titre-teaser').text(titre_teaser[nb]);
	$('#description-teaser').text(description_teaser[nb]);
}

function changePortrait(nb) {
	cur_act = nb
	$('#slide-portrait').css("background-image", "url(" + bg_teaser[nb] + ")");  
	$('#titre-portrait').html(titre_portrait[nb]);
	$('#description-portrait').html(description_portrait[nb]);
	$('#video-portrait').attr("src", vidlink_portrait[nb]);
	$('#nom-portrait').text(name_portrait[nb]);
	refresh_view();
	refresh_others();
}

function refresh_others()
{
	if (cur_act == 0)
	{
		$('#name-others').html("de Zeinab");
		$("#other_portrait").attr("src", portrait_other[1]);
	}
	else
	{
		$('#name-others').html("d'Elias");
		$("#other_portrait").attr("src", portrait_other[0]);
	}	
}

$("#other_portrait").click(function()
{
	if (cur_act == 0)
		changePortrait(1);
	else
		changePortrait(0);
	scrollTo("#slide-portrait");
});

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

$('.scroll_coulisse').click(function(){
	scrollTo($("#coulisse"));
});

$('#container-button-video-demo').click(function () {
	$('#container-button-video-demo').hide();
	$('#video-container').show();
	$('#container-video-demo').show();
});

$('#button-video-portrait').click(function () {
	$('#container-button-video-portrait').hide();
	$('.global-c-v-p').show();
});

var iframe = document.getElementById('video-portrait');

// $f == Froogaloop
var player = $f(iframe);

jQuery('.vimeo-player').each(function(){
	Froogaloop(this).addEvent('ready', ready);
});

function ready(playerID){
	Froogaloop(playerID).addEvent('play', function(data) {
		play(playerID);
	});
}
function play(playerID){
	alert(playerID + " is playing!!!");
}












