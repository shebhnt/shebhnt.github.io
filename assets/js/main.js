// 
var endOfIntro = 0;
var done = 1;
var width = $(window).width();
var isHome = 1;

var showText = function (target, message, index, interval) {   
	done = 0;
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
	if (index === message.length) {
		done = 1;
	}
};

function turnOnOptions() {
	
	$( "#Options" ).css('display', 'block');
	var items = $('.items');
	var i = 0;
	for (i = 0; i < items.length; i++) {
		var item = $(items[i]);
		item.animate({
			opacity: 1
		}, 1000);
	}
}

function setUpOptions() {
	$( '#introHelper' ).animate({
		opacity: 0
	}, 500, function() {
		$( "#CenterText" ).animate({
			height: "30vh",
			fontSize: '75px'
		}, 2000, function(){			
			turnOnOptions();
		});
	});
	
	
}

function goToAbout() {
	$('body').removeClass().addClass('about');
	$('.line').addClass('white');
	$('.content').css('opacity', '0');
	$('.myWorkItem').css('opacity', '0');
	$('.hireMeItem').css('opacity', '0');
	$('.contactMeItem').css('opacity', '0');
	if (isHome === 1) {
		console.log('on home');
		$('#CenterText').css('opacity', '0');
	}
	$('.aboutMeItem').animate({
		opacity: 0
	}, 2000, function(){
		window.location.href = 'about.html';
	});
	
}

function goToContact() {
	$('body').removeClass().addClass('contact');
	$('.line').addClass('white');
	$('.content').css('opacity', '0');
	$('.myWorkItem').css('opacity', '0');
	$('.hireMeItem').css('opacity', '0');
	$('.aboutMeItem').css('opacity', '0');
	if (isHome === 1) {
		$('#CenterText').css('opacity', '0');
	}
	$('.contactMeItem').animate({
		opacity: 0
	}, 2000, function(){
		window.location.href = 'contact.html';
	});
	
}

function goToHire() {
	$('body').removeClass().addClass('hire');
	$('.line').removeClass('white');
	$('.content').css('opacity', '0');
	$('.myWorkItem').css('opacity', '0');
	$('.aboutMeItem').css('opacity', '0');
	$('.contactMeItem').css('opacity', '0');
	if (isHome === 1) {
		$('#CenterText').css('opacity', '0');
	}
	$('.hireMeItem').animate({
		opacity: 0
	}, 2000, function(){
		window.location.href = 'hire.html';
	});
	
}

function goToWork() {
	$('body').removeClass().addClass('work');
	$('.line').removeClass('white');
	$('.content').css('opacity', '0');
	$('.hireMeItem').css('opacity', '0');
	$('.aboutMeItem').css('opacity', '0');
	$('.contactMeItem').css('opacity', '0');
	if (isHome === 1) {
		$('#CenterText').css('opacity', '0');
	}
	$('.myWorkItem').animate({
		opacity: 0
	}, 2000, function(){
		window.location.href = 'work.html';
	});
	
}

function nextText() {
	var curText = $('#introtext');
	var nexText = $('#TextForSite .active');
	var newText = $('#TextForSite .active').next();
	if (newText.length < 1 ) {
		endOfIntro = 1;
		setUpOptions();
		return;
	}
	/*curText.css('display', 'none');
	curText.text(nexText.text());
	console.log(curText.text());
	curText.css('display', 'block');*/
	curText.text('');
	showText(curText, nexText.text(), 0, 50);
	nexText.removeClass('active');
	newText.addClass('active');
	done = 0;
	
}



$( document ).ready(function() {
	$('.content').animate({
		opacity: 1
	}, 1000);
	if ($('body').hasClass('about') || $('body').hasClass('hire') || $('body').hasClass('contact') || $('body').hasClass('work')) {
		turnOnOptions();
		isHome = 0;
	}
	document.body.onkeyup = function(e){
		if(e.keyCode === 32){
			if ( endOfIntro === 0 && done === 1 ) {
				nextText();
			}
		}
	};
	$( '#CenterText' ).on('touchstart', function(){
		if ( endOfIntro === 0 && done === 1) {
				nextText();
		}
	});
});