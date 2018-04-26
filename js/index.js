$('.top button').on('click',function(){
	$('.top').toggleClass('active')
})

$(window).on('scroll',function(e){
	if(window.scrollY===0){
		$('.top').removeClass('active')
	}else {
		$('.top').addClass('active')
	}
})


$('footer button').on('click',function(){
	
	let currentTop = window.scrollY
	let targetTop = 0
	let t =1000
	
	function animate(time) {
	requestAnimationFrame(animate);
	TWEEN.update(time);
	}
	
	requestAnimationFrame(animate);
	var coords = {
		y: currentTop
	}
	
	var tween = new TWEEN.Tween(coords);
	
	tween
		.to({
			y: targetTop
		}, t)
		.easing(TWEEN.Easing.Quartic.InOut)
		.onUpdate(function() {
			window.scrollTo(0, coords.y);
		})
		.start();
})


