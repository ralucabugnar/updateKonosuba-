var images= [{src:"http://www.prelovac.com/vladimir/wp-content/uploads/2008/03/example.jpg",alt:'alt la prima poza', text:'Lorem ipsum 1'},
  {src:"http://szotarunk.hu/keptar_idegenszavak/kozepeskep/886_1.jpg", alt:"alt la a doua poza", text:'Lorem ipsum 2'},
  {src:"https://www.w3schools.com/bootstrap/sanfran.jpg", alt:"alt la a treia poza", text:'Lorem ipsum 3'},
  {src:"https://c1.staticflickr.com/9/8488/8226533621_a6544cd733_b.jpg", alt:"alt la a patra poza", text:'Lorem ipsum 4'},
  {src:"http://www.electriclemonade.photography/wp-content/uploads/2017/04/portland-bill-012.jpg", alt:"alt la a cincea poza", text:'Lorem ipsum 5'}];

$(document).ready(function(){
  var slide= $("#slideshow");
  for(var i=0; i < images.length; i++){
	  if (i == 0){
		 $("#pager").append($("<span class='active' index="+ i +">" + (i+1) +"</span>")); 
	  }else{
		 $("#pager").append($("<span index="+ i +">" + (i+1) +"</span>"));
	  }
	}
 $("#pager span").click(function(){
    $("#pager span.active").removeClass('active');
    var index= parseInt($(this).attr("index"));
    var nextId=(index == images.length-1) ? 0 : index + 1;
    var prevId=(index == 0)? images.length-1: index-1;

    $(this).addClass("active");
    updateSlideshowAttributes(prevId, index, nextId);
	$("#img-text").text(images[index].text);
  });
	slide.mouseenter(function() {
	  $("#img-text").addClass("active");
	});
	slide.mouseleave(function() {
		$("#img-text").removeClass("active");
	});
 //setInterval(changeSlide, 2000);
 function changeSlide() {
    var index= parseInt($('#slideshow').attr("index"));
	index += 1;
    if(index >= images.length){
      index=0;
    }
    var nextId=(index == images.length-1) ? 0 : index + 1;
    var prevId=(index == 0)? images.length-1: index-1;

    updateSlideshowAttributes(prevId, index, nextId);
	$("#pager span.active").removeClass("active");
	$("#pager span[index=" + index + "]").addClass("active");
	
  };
// Next.
$("#next").click(function() { 
    var prevId = parseInt(slide.attr("index")); 
    var index=(prevId == images.length-1) ? 0 : prevId + 1; 
    var nextId=(index == images.length-1) ? 0 : index + 1; 

	$("#temp-next").attr("src", images[index].src); 
    $("#temp-next").attr("alt", images[index].alt); 
	$("#temp-next").show("slide",{direction: "right"},500);
	
	setTimeout(function() {
		$("#pager span.active").removeClass('active'); 
		$('#pager span[index="'+ index +'"]').addClass("active"); 

		$(slide).attr("src", images[index].src); 
		$(slide).attr("alt", images[index].alt); 
		$(slide).attr("index", index); 

		$("#prev").attr({ 
		  "src": images[prevId].src, 
		  "alt": images[prevId].alt, 
		}); 

		$("#next").attr({ 
		  "src": images[nextId].src, 
		  "alt": images[nextId].alt,
		});  
		$("#temp-next").hide(0);
	}, 250);
  });

// Previous.
$("#prev").click(function() { 
    var nextId = parseInt(slide.attr("index")); 
    var index=(nextId == 0) ? images.length-1 : nextId - 1; 
    var prevId=(index == 0)? images.length-1: index-1; 
    $("#pager span.active").removeClass('active'); 
    $('#pager span[index="'+ index +'"]').addClass("active"); 
	
	$("#temp-next").attr("src", images[index].src); 
    $("#temp-next").attr("alt", images[index].alt); 
	$("#temp-next").show("slide",{direction: "left"},500);
	
	setTimeout(function() {
		$(slide).attr("src", images[index].src); 
		$(slide).attr("alt", images[index].alt); 
		$(slide).attr("index", index); 

		$("#prev").attr({ 
		  "src": images[prevId].src, 
		  "alt": images[prevId].alt, 
		}); 

		$("#next").attr({ 
		  "src": images[nextId].src, 
		  "alt": images[nextId].alt, 
		});
		$("#temp-next").hide(0);
	}, 250);
  });
  
 function updateSlideshowAttributes(prevId, index, nextId) {
	$(slide).attr("src", images[index].src);
    $(slide).attr("alt", images[index].alt);
    $(slide).attr("index", index);
    $(slide).removeClass(".active");

    $("#prev").attr("src", images[prevId].src);
    $("#prev").attr("alt", images[prevId].alt);

    $("#next").attr("src", images[nextId].src);
    $("#next").attr("alt", images[nextId].alt);
  }
});

$(function(){
  var home= $("#home");
  var about = $("#about");
  var contact= $("#contact");
  var homeContent = $("#home-content");
  var aboutContent = $("#about-content");
  var contactContent = $("#contact-content");
  
  home.click(function(){
	homeContent.addClass("active");  
	aboutContent.removeClass("active");  
	contactContent.removeClass("active");
	$("#tabs").find("li").removeClass("ui-state-active");
	$(this).addClass("ui-state-active");
	$(this).css({
		backgroundColor: "lightgray"
	});
	$(".left img:first-of-type").slideToggle(2000);
	$(".left p:first-of-type").hide(1000);
	$(".left p:first-of-type").show(2000);
	homeContent.find("img").hide(2000);
	$(".left img:first-of-type").show(3000);
	$("#number").append("<b> home </b>");
  });
  
  about.click(function(){
	aboutContent.addClass("active");  
	homeContent.removeClass("active");  
	contactContent.removeClass("active");
	$("#tabs").find("li").removeClass("ui-state-active");
	$(this).addClass("ui-state-active");
	home.css({
		backgroundColor: "lightgray"
	});
    $(".left1 p:nth-of-type(2)").toggleClass("culoare");
    $("#number").append("<b> about </b>");
  });
  
  contact.click(function(){  
	contactContent.addClass("active");
	$( "#dialog" ).dialog(); 

    $(document).keyup(function(e){
      if(e.keyCode == 27){
        contactContent.removeClass("active");
      }
    });
    $("#number").append("<b> contact </b>");
  });
});

$( function() {
    $( "#tabs" ).tabs();
	$(document).tooltip();
	$( ".widget input[type=submit]" ).button();
    $( "input" ).click( function( event ) {
      event.preventDefault();
    } );
  } );