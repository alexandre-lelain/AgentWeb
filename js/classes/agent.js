function Agent(id,xml){
    this.element = document.getElementById(id);
    this.parameters = xml['params'];
}

Agent.prototype.setBulle = function(bulle){
  this.bulle = bulle.element;
  this.laBulle = bulle;
  this.element.appendChild(bulle.element);
}

Agent.prototype.setCharacter = function(spid){
  this.character = spid.element;
  this.leCharacter = spid;
  this.element.appendChild(spid.element);
}

Agent.prototype.setForm = function(form){
  this.inputText = form.element;
  this.laQuestion = form;
  this.element.appendChild(form.element);
}

Agent.prototype.tell = function(something,mute) {
    if (this.parameters.getElementsByTagName("agentSpeech")[0].childNodes[0].nodeValue == "true" && mute == "true") {
      if (this.parameters.getElementsByTagName("language")[0].childNodes[0].nodeValue === "fr")
        responsiveVoice.speak(something,"French Female",{rate: 1.1});
      else
        responsiveVoice.speak(something,"US English Female",{rate: 1.1});
    }
    if (this.parameters.getElementsByTagName("agentWrite")[0].childNodes[0].nodeValue == "true"){
        $(this.bulle).text(something);
        addTextInWindow(this.bulle,this.character);
    }
 }

 Agent.prototype.dragPosition = function(){
     $(this.inputText).position({
         of: $(this.character),
         my: "bottom+25",
         at: "bottom"
     });

     $(this.bulle).position({
         of: $(this.character),
         my: "top-95",
         at: "right+25"
     });

     $("#closeIcon").position({
         of: $(this.character),
         my: "right+115",
         at: "top-5"
     });
 }

 Agent.prototype.sayHello = function () {
   alert("hello");
 };
