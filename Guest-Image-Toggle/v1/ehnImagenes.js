if(isGuest()){ if(window.jQuery===undefined){ loadJQ(function(){ toggleImagenes(); }); } else { toggleImagenes(); } }

function toggleImagenes(){
	$(function(){
		$('.post img').wrap('<div class="imageContainer">');
		$('.imageContainer')
			.css({'display':'inline','margin':'2px','padding':'2px'})
			.prepend('<input type="button" value="Haz click para ver la imagen" />')
			.on('click',function(){ $(this).children('img').css('display','inline').prev('input').css('display','none'); });
	});
};

function isGuest(){
	if(typeof document.getElementsByClassName!=='function'){return false;}
	var publi = document.getElementsByClassName('publi_sponsor');
	if(publi.length>0){return true;}else{return false;}
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