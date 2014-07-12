function toggleImagenes(){
	jQuery(function(){
		jQuery('.post img').each(function(index){
			var timg = jQuery(this);
			if(timg.attr('src').indexOf('://foro.elhacker.net/Smileys/')> -1){timg.css('display','inline');}
			else{timg.wrap('<div class="imageContainer">');}
		});
		jQuery('.imageContainer')
			.css({'display':'inline','margin':'2px','padding':'2px'})
			.prepend('<input type="button" value="Haz click para ver la imagen" />')
			.on('click',function(event){
				event.preventDefault();
				jQuery(this).children('img').css('display','inline').prev('input').css('display','none');
				jQuery(this).unbind('click');
				return false;
			});
	});
};

function loadJQ(callback){
	var script = document.createElement('script');
	script.type = 'text/javascript';
	if (script.readyState){
		script.onreadystatechange = function(){
			if(script.readyState==='loaded' || script.readyState==='complete'){script.onreadystatechange = null; callback(); }
		};
	} else { script.onload = function(){ callback(); }; }
	script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js';
	document.getElementsByTagName('body')[0].appendChild(script);
};

if(window.jQuery===undefined){ loadJQ(function(){ toggleImagenes(); }); } else { toggleImagenes(); }