function Question(type,id,xml){
  this.iden = id;
  this.element = document.createElement(type);
  var hint = xml['strings'].getElementsByTagName("hint")[0].childNodes[0].nodeValue;
  $(this.element).append('<input type="text" name="'+id+'" id="'+id+'" placeholder="'+hint+'"/>');
  // if webkitSpeech is supported (and enabled)
   if (xml['params'].userSpeech === "true" && (document.createElement('input').webkitSpeech != undefined)) {
       $(this.element).append('<input x-webkit-speech id="mike"/>');
   }
}
