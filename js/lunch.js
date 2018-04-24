/**
 * 
 */

function printHeading() {
	Date.prototype.getWeek = function() {
		  var onejan = new Date(this.getFullYear(),0,1);
		  return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
	}
	var date = new Date();
	var week = date.getWeek();

	document.getElementById("h1").innerHTML = "Lunchmeny v." + week;
}

function parseMenu() {
	$.ajax({
		   url: 'http://www.ideon-restaurang.se/',
		   type: 'GET',
		   success: function(res) {
		      var data = $.parseHTML(res);  //<----try with $.parseHTML().
		      alert(res);
		      $(data).find('div.wrapper').each(function(){
		          $('#here').append($(this).html());
		     });

		   }
		 });
}