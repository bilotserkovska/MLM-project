$(document).ready(function(){
	$('.comp').on('inview', function(event, isInView) {
    	if (isInView) {
    		$('.comp-top').animate({
    			opacity: 1
    		},800, function(){
    			$('.comp-left').animate({
    				opacity: 1
    			},800, function(){
    				$('.comp-right').animate({
    					opacity: 1
    				}, 800);
    			});
    		});
    	}
    });
});