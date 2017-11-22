$(document).ready(function() {
	
	$('.maintab1 a').click(function(){
		$('#mainframe1').css('display', 'block');
		$('#mainframe2').css('display', 'none');
		$('#mainframe3').css('display', 'none');
		$('#mainframe4').css('display', 'none');
		$('.maintab1 a').addClass('active');
		$('.maintab2 a').removeClass('active');
		$('.maintab3 a').removeClass('active');
		$('.maintab4 a').removeClass('active');
	});
	$('.maintab2 a').click(function(){
		$('#mainframe1').css('display', 'none');
		$('#mainframe2').css('display', 'block');
		$('#mainframe3').css('display', 'none');
		$('#mainframe4').css('display', 'none');
		$('.maintab1 a').removeClass('active');
		$('.maintab2 a').addClass('active');
		$('.maintab3 a').removeClass('active');
		$('.maintab4 a').removeClass('active');
	});
	$('.maintab3 a').click(function(){
		$('#mainframe1').css('display', 'none');
		$('#mainframe2').css('display', 'none');
		$('#mainframe3').css('display', 'block');
		$('#mainframe4').css('display', 'none');
		$('.maintab1 a').removeClass('active');
		$('.maintab2 a').removeClass('active');
		$('.maintab3 a').addClass('active');
		$('.maintab4 a').removeClass('active');
	});
	$('.maintab4 a').click(function(){
		$('#mainframe1').css('display', 'none');
		$('#mainframe2').css('display', 'none');
		$('#mainframe3').css('display', 'none');
		$('#mainframe4').css('display', 'block');
		$('.maintab1 a').removeClass('active');
		$('.maintab2 a').removeClass('active');
		$('.maintab3 a').removeClass('active');
		$('.maintab4 a').addClass('active');
	});
	
	$('.slotstab1 a').click(function(){
		$('#slotsframe1').css('display', 'block');
		$('#slotsframe2').css('display', 'none');
		$('#slotsframe3').css('display', 'none');
		$('#slotsframe4').css('display', 'none');
		$('.slotstab1 a').addClass('active');
		$('.slotstab2 a').removeClass('active');
		$('.slotstab3 a').removeClass('active');
		$('.slotstab4 a').removeClass('active');
	});
	$('.slotstab2 a').click(function(){
		$('#slotsframe1').css('display', 'none');
		$('#slotsframe2').css('display', 'block');
		$('#slotsframe3').css('display', 'none');
		$('#slotsframe4').css('display', 'none');
		$('.slotstab1 a').removeClass('active');
		$('.slotstab2 a').addClass('active');
		$('.slotstab3 a').removeClass('active');
		$('.slotstab4 a').removeClass('active');
	});
	$('.slotstab3 a').click(function(){
		$('#slotsframe1').css('display', 'none');
		$('#slotsframe2').css('display', 'none');
		$('#slotsframe3').css('display', 'block');
		$('#slotsframe4').css('display', 'none');
		$('.slotstab1 a').removeClass('active');
		$('.slotstab2 a').removeClass('active');
		$('.slotstab3 a').addClass('active');
		$('.slotstab4 a').removeClass('active');
	});
	$('.slotstab4 a').click(function(){
		$('#slotsframe1').css('display', 'none');
		$('#slotsframe2').css('display', 'none');
		$('#slotsframe3').css('display', 'none');
		$('#slotsframe4').css('display', 'block');
		$('.slotstab1 a').removeClass('active');
		$('.slotstab2 a').removeClass('active');
		$('.slotstab3 a').removeClass('active');
		$('.slotstab4 a').addClass('active');
	});
	
	$('.downloadtab1 a').click(function(){
		$('#downloadframe1').css('display', 'block');
		$('#downloadframe2').css('display', 'none');
		$('#downloadframe3').css('display', 'none');
		$('#downloadframe4').css('display', 'none');
		$('#downloadframe5').css('display', 'none');
		$('.downloadtab1 a').addClass('active');
		$('.downloadtab2 a').removeClass('active');
		$('.downloadtab3 a').removeClass('active');
		$('.downloadtab4 a').removeClass('active');
		$('.downloadtab5 a').removeClass('active');
	});
	$('.downloadtab2 a').click(function(){
		$('#downloadframe1').css('display', 'none');
		$('#downloadframe2').css('display', 'block');
		$('#downloadframe3').css('display', 'none');
		$('#downloadframe4').css('display', 'none');
		$('#downloadframe5').css('display', 'none');
		$('.downloadtab1 a').removeClass('active');
		$('.downloadtab2 a').addClass('active');
		$('.downloadtab3 a').removeClass('active');
		$('.downloadtab4 a').removeClass('active');
		$('.downloadtab5 a').removeClass('active');
	});
	$('.downloadtab3 a').click(function(){
		$('#downloadframe1').css('display', 'none');
		$('#downloadframe2').css('display', 'none');
		$('#downloadframe3').css('display', 'block');
		$('#downloadframe4').css('display', 'none');
		$('#downloadframe5').css('display', 'none');
		$('.downloadtab1 a').removeClass('active');
		$('.downloadtab2 a').removeClass('active');
		$('.downloadtab3 a').addClass('active');
		$('.downloadtab4 a').removeClass('active');
		$('.downloadtab5 a').removeClass('active');
	});
	$('.downloadtab4 a').click(function(){
		$('#downloadframe1').css('display', 'none');
		$('#downloadframe2').css('display', 'none');
		$('#downloadframe3').css('display', 'none');
		$('#downloadframe4').css('display', 'block');
		$('#downloadframe5').css('display', 'none');
		$('.downloadtab1 a').removeClass('active');
		$('.downloadtab2 a').removeClass('active');
		$('.downloadtab3 a').removeClass('active');
		$('.downloadtab4 a').addClass('active');
		$('.downloadtab5 a').removeClass('active');
	});
	$('.downloadtab5 a').click(function(){
		$('#downloadframe1').css('display', 'none');
		$('#downloadframe2').css('display', 'none');
		$('#downloadframe3').css('display', 'none');
		$('#downloadframe4').css('display', 'none');
		$('#downloadframe5').css('display', 'block');
		$('.downloadtab1 a').removeClass('active');
		$('.downloadtab2 a').removeClass('active');
		$('.downloadtab3 a').removeClass('active');
		$('.downloadtab4 a').removeClass('active');
		$('.downloadtab5 a').addClass('active');
	});
	
	$('.promotab1 a').click(function(){
		$('#promoframe1').css('display', 'block');
		$('#promoframe2').css('display', 'none');
		$('#promoframe3').css('display', 'none');
		$('#promoframe4').css('display', 'none');
		$('#promoframe5').css('display', 'none');
		$('.promotab1 a').addClass('active');
		$('.promotab2 a').removeClass('active');
		$('.promotab3 a').removeClass('active');
		$('.promotab4 a').removeClass('active');
		$('.promotab5 a').removeClass('active');
	});
	$('.promotab2 a').click(function(){
		$('#promoframe1').css('display', 'none');
		$('#promoframe2').css('display', 'block');
		$('#promoframe3').css('display', 'none');
		$('#promoframe4').css('display', 'none');
		$('#promoframe5').css('display', 'none');
		$('.promotab1 a').removeClass('active');
		$('.promotab2 a').addClass('active');
		$('.promotab3 a').removeClass('active');
		$('.promotab4 a').removeClass('active');
		$('.promotab5 a').removeClass('active');
	});
	$('.promotab3 a').click(function(){
		$('#promoframe1').css('display', 'none');
		$('#promoframe2').css('display', 'none');
		$('#promoframe3').css('display', 'block');
		$('#promoframe4').css('display', 'none');
		$('#promoframe5').css('display', 'none');
		$('.promotab1 a').removeClass('active');
		$('.promotab2 a').removeClass('active');
		$('.promotab3 a').addClass('active');
		$('.promotab4 a').removeClass('active');
		$('.promotab5 a').removeClass('active');
	});
	$('.promotab4 a').click(function(){
		$('#promoframe1').css('display', 'none');
		$('#promoframe2').css('display', 'none');
		$('#promoframe3').css('display', 'none');
		$('#promoframe4').css('display', 'block');
		$('#promoframe5').css('display', 'none');
		$('.promotab1 a').removeClass('active');
		$('.promotab2 a').removeClass('active');
		$('.promotab3 a').removeClass('active');
		$('.promotab4 a').addClass('active');
		$('.promotab5 a').removeClass('active');
	});
	$('.promotab5 a').click(function(){
		$('#promoframe1').css('display', 'none');
		$('#promoframe2').css('display', 'none');
		$('#promoframe3').css('display', 'none');
		$('#promoframe4').css('display', 'none');
		$('#promoframe5').css('display', 'block');
		$('.promotab1 a').removeClass('active');
		$('.promotab2 a').removeClass('active');
		$('.promotab3 a').removeClass('active');
		$('.promotab4 a').removeClass('active');
		$('.promotab5 a').addClass('active');
	});
	
	$('.afftab1 a').click(function(){
		$('#affframe1').css('display', 'block');
		$('#affframe2').css('display', 'none');
		$('#affframe3').css('display', 'none');
		$('#affframe4').css('display', 'none');
		$('#affframe5').css('display', 'none');
		$('.afftab1 a').addClass('active');
		$('.afftab2 a').removeClass('active');
		$('.afftab3 a').removeClass('active');
		$('.afftab4 a').removeClass('active');
		$('.afftab5 a').removeClass('active');
	});
	$('.afftab2 a').click(function(){
		$('#affframe1').css('display', 'none');
		$('#affframe2').css('display', 'block');
		$('#affframe3').css('display', 'none');
		$('#affframe4').css('display', 'none');
		$('#affframe5').css('display', 'none');
		$('.afftab1 a').removeClass('active');
		$('.afftab2 a').addClass('active');
		$('.afftab3 a').removeClass('active');
		$('.afftab4 a').removeClass('active');
		$('.afftab5 a').removeClass('active');
	});
	$('.afftab3 a').click(function(){
		$('#affframe1').css('display', 'none');
		$('#affframe2').css('display', 'none');
		$('#affframe3').css('display', 'block');
		$('#affframe4').css('display', 'none');
		$('#affframe5').css('display', 'none');
		$('.afftab1 a').removeClass('active');
		$('.afftab2 a').removeClass('active');
		$('.afftab3 a').addClass('active');
		$('.afftab4 a').removeClass('active');
		$('.afftab5 a').removeClass('active');
	});
	$('.afftab4 a').click(function(){
		$('#affframe1').css('display', 'none');
		$('#affframe2').css('display', 'none');
		$('#affframe3').css('display', 'none');
		$('#affframe4').css('display', 'block');
		$('#affframe5').css('display', 'none');
		$('.afftab1 a').removeClass('active');
		$('.afftab2 a').removeClass('active');
		$('.afftab3 a').removeClass('active');
		$('.afftab4 a').addClass('active');
		$('.afftab5 a').removeClass('active');
	});
	$('.afftab5 a').click(function(){
		$('#affframe1').css('display', 'none');
		$('#affframe2').css('display', 'none');
		$('#affframe3').css('display', 'none');
		$('#affframe4').css('display', 'none');
		$('#affframe5').css('display', 'block');
		$('.afftab1 a').removeClass('active');
		$('.afftab2 a').removeClass('active');
		$('.afftab3 a').removeClass('active');
		$('.afftab4 a').removeClass('active');
		$('.afftab5 a').addClass('active');
	});
	
	$('.paytab1 a').click(function(){
		$('#payframe1').css('display', 'block');
		$('#payframe2').css('display', 'none');
		$('#payframe3').css('display', 'none');
		$('#payframe4').css('display', 'none');
		$('.paytab1 a').addClass('active');
		$('.paytab2 a').removeClass('active');
		$('.paytab3 a').removeClass('active');
		$('.paytab4 a').removeClass('active');
	});
	$('.paytab2 a').click(function(){
		$('#payframe1').css('display', 'none');
		$('#payframe2').css('display', 'block');
		$('#payframe3').css('display', 'none');
		$('#payframe4').css('display', 'none');
		$('.paytab1 a').removeClass('active');
		$('.paytab2 a').addClass('active');
		$('.paytab3 a').removeClass('active');
		$('.paytab4 a').removeClass('active');
	});
	$('.paytab3 a').click(function(){
		$('#payframe1').css('display', 'none');
		$('#payframe2').css('display', 'none');
		$('#payframe3').css('display', 'block');
		$('#payframe4').css('display', 'none');
		$('.paytab1 a').removeClass('active');
		$('.paytab2 a').removeClass('active');
		$('.paytab3 a').addClass('active');
		$('.paytab4 a').removeClass('active');
	});
	$('.paytab4 a').click(function(){
		$('#payframe1').css('display', 'none');
		$('#payframe2').css('display', 'none');
		$('#payframe3').css('display', 'none');
		$('#payframe4').css('display', 'block');
		$('.paytab1 a').removeClass('active');
		$('.paytab2 a').removeClass('active');
		$('.paytab3 a').removeClass('active');
		$('.paytab4 a').addClass('active');
	});

});