

  
$(document).ready(function() {
$("video").prop('muted', true);
$("video").prop('loop', true);
$('#mute-video').addClass('sound-off');

  $("#mute-video").click( function (){
    if( $("video").prop('muted') ) {
          $("video").prop('muted', false);
          $('#mute-video').removeClass('sound-off');
          $('#mute-video').addClass('sound-on');
         
    } else {
      $("video").prop('muted', true);
      $('#mute-video').addClass('sound-off');
      $('#mute-video').removeClass('sound-on');
    }
  });
});



$(window).scroll(function(){
  var projectNameText = $('#project-name-id-master').html();
  if ($(this).scrollTop() > 300) {
  
    $('#project-title-id').text(projectNameText);
    $('#project-title-id').removeClass('invisible');
    $('#project-title-id').removeClass('fade-out-left');
     $('#project-title-id').addClass('fade-in-left');
     $('.navbar').addClass('transparent');
     
     
  } else {
   
    $('#project-title-id').removeClass('fade-in-left');
    $('#project-title-id').addClass('fade-out-left');
    $('.navbar').removeClass('transparent');
   
    
    
  }
});




$(window).resize(function(){

  if ($(window).width() <= 576) {  

    $('#ak-name').html('ak');


  } 
  else{
    $('#ak-name').html('antonis kalagkatsis');
  }    

});

$(document).ready(function(){

  if ($(window).width() <= 576) {  

    $('#ak-name').html('ak');


  } 
  else{
    $('#ak-name').html('antonis kalagkatsis');
  }    

});
