$(document).ready(function(){
	
//Team Treehouse
	var url = "http://teamtreehouse.com/melissaeaton.json";
	var badgeArray = [];

	$.getJSON(url, function (JSON) {
		JSON["badges"].forEach(function(item) {
			var badge = {
				name: item.name,
				badgeURL: item.url
			};
			badgeArray.push(badge);
		});
		
		for (var x = 0; x < badgeArray.length; x++) {
			$("#team-treehouse-classes ul").append("<li><a href='" + badgeArray[x].badgeURL + "' target='_blank' class='slow-hover'>" + badgeArray[x].name + "</a></li>");
		}
		$("#team-treehouse-classes h2").append(" (" + badgeArray.length + ")");
	});


//Code School
	var url2 = "http://www.codeschool.com/users/meaton3.json?callback=?";
	var badgeArray2 = [];

	$.getJSON(url2, function (JSON) {
		JSON["courses"]["completed"].forEach(function(item) {
			var badge = {
				image: item.badge,
				name: item.title,
				badgeURL: item.url
			};
			badgeArray2.push(badge);
		});
		
		for (var y = 0; y < badgeArray2.length; y++) {
			$("#code-school-classes ul").append("<li><a href='" + badgeArray2[y].badgeURL + "' target='_blank' class='slow-hover'>" + badgeArray2[y].name + "</a></li>");
		}
		$("#code-school-classes h2").append(" (" + badgeArray2.length + ")");
	});



	$('.portfolio-slick').slick({
		infinite: true,
		slidesToShow: 1,
		dots: true,
		arrows: true,
		autoplay: true,
		accessibility: true,
		respondTo: ".container"
	});


	$('.parallax-window').parallax({imageSrc: 'img/laptop.jpg'});
});