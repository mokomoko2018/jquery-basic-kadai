$(function (){
    //id属性がchange-textの要素がクリックされたら
    $('#change-color').on('click', function(){
      //文字を赤にする
      $('#target').css('color','red');
    });  
  //id属性がchange-textの要素がクリックされたら
  $('#change-text').on('click', function(){
    //文字をHellloにする
    $('p').text('Hello'); 
  });  
  //id属性がfade-outの要素がクリックされたら
  $('#fade-out').on('click', function(){
    //フェードアウトする
    $('p').fadeOut();
  });

  //id属性がfade-inの要素がクリックされたら
  $('#fade-in').on('click', function(){
    //フェードインする
    $('p').fadeIn();
  });

});