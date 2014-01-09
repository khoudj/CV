function phone(){
	if($(window).width()<500){
			$( "#nav" ).click(function() {
				$( "li" ).first().toggle( "fast", function showNext() {
				$( this ).next( "li" ).toggle( "fast", showNext );
				});
			});

			$("#photo").show();
			$("#menu").show();
	}else{
			$("#photo").hide();
			$("#menu").hide();
	}
}
function fenetre(){
$('#fenetre').css('visibility','visible');
	$( "#fenetre" ).animate({
	top: 0,
	height: "toggle"}, 1000, function() {
		return true;
		});


		$('a[href^="#"]').click(function(){  
    	var the_id = $(this).attr("href");
    	//var the_menu = $(this).parent().css("background-color", "red" ); 
   	 	$('html, body').animate({  
    	    scrollTop:$(the_id).offset().top  
    	}, 'slow');  
    	return false; 
	}); 
}

function activeMenu(menu){
	$("#menuCompetences").removeClass('active');
    $("#menuExperiences").removeClass('active'); 
    $("#menuFormations").removeClass('active');
    $("#menuLoisirs").removeClass('active');
    $("#menuContact").removeClass('active'); 
    $(menu).addClass('active');
}

function scrollNav(){
	var $win = $(window);
             $win.scroll(function () {
             	var top = $win.scrollTop();
             	 if (top < competences) activeMenu('none');
                 else if (top >= competences && top < experiences) activeMenu('#menuCompetences'); 
                 else if (top >= experiences && top < formations) activeMenu('#menuExperiences'); 
                 else if (top >= formations && top < loisirs) activeMenu('#menuFormations');  
                 else if (top >= loisirs && top < contact) activeMenu('#menuLoisirs'); 
                 else if (top >= contact) activeMenu('#menuContact'); 
                 else activeMenu('none');

             });
}