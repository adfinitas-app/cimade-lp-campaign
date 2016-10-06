$(document).ready(function()
{
	AdaptHeader();
	//CENTER
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

	//INITIAL CENTER
	$(".content").each(function(){
		vertical_center(this);
	});

	//RESIZE CENTER
	$(window).resize(function() {
		AdaptHeader();
		$(".content").each(function(){vertical_center(this);});
	});

	//VIDEO PLAY
//	document.getElementById("bg_video").pause();
$("#button_play").click(function()
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

});

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
	console.log("y == " + y);
	var x = $(".text-header").css('height');
	$('.block-header').css({"height" : y, "padding-top" : ((y - parseInt(x)) / 2)});
	$('.block-header-r').css({"height" : y, "padding-top" : ((y - parseInt(x)) / 2)});
} 
