/* 2013 - 2015 Authors : Cédric Cousseran, Alexandre Guignebert, Lucie Le Borgne et Nicolas Monet
*  2017 Author : Alexandre Le Lain
*  Tutor: Alexandre Pauchet
*  ASI 4 */

// set the name of the plugin folder's name. Default is "agentWeb".
var pluginName = "agentWeb";

$(document).ready(function(){
    $(document.body).append("<div id='agentWeb' class='animation' ></div>")
    launchAgent();
});

function launchAgent(){
 $(document).ready(function(){
       $.when(
         $.getScript(pluginName+"/js/utils/helper.js"),
         $.getScript(pluginName+"/js/utils/actions.js"),
         $.getScript(pluginName+"/js/utils/dynamicStyle.js"),
         $.getScript(pluginName+"/js/classes/agent.js"),
         $.getScript(pluginName+"/js/classes/question.js"),
         $.getScript(pluginName+"/js/classes/character.js"),
         $.getScript(pluginName+"/js/classes/bulle.js")
       ).done(function(){
         $(".animation").agentWebINSA();
       });
  });
}

jQuery.fn.agentWebINSA = function(){

   var xmlPath = pluginName+"/src/";
   var xmlhttp = getXMLHttp();
   var xml = new Array();
   xml['params'] = getXML(xmlPath + "parameters.xml");
   xml['actions'] = getXML(xmlPath + "actions.xml");
   if (xml['params'].getElementsByTagName("language")[0].childNodes[0].nodeValue === "fr"){
     xml['dialog'] = getXML(xmlPath + "dialog-fr.xml");
     xml['strings'] = getXML(xmlPath + "strings-fr.xml");
   }
   else{
     xml['dialog'] = getXML(xmlPath + "dialog-en.xml");
     xml['strings'] = getXML(xmlPath + "strings-en.xml");
   }
   setVoice(xml);

   // Loading css stylesheet
   $("head").append('<link rel="stylesheet" type="text/css" href="'+pluginName+'/css/agentWebStyle.css">');

   var agentWeb = new Agent("agentWeb",xml);
   var inputText = new Question("div","question",xml);
   var character = new Character("div","agent");
   var bulle = new Bulle("div","answer");

   $(agentWeb.element).append("<img id='closeIcon' src='agentWeb/images/close-icon.png' onclick='closeAgent(agentWeb)'/>");
   agentWeb.setCharacter(character);
   agentWeb.setForm(inputText);
   agentWeb.setBulle(bulle);
   document.body.appendChild(agentWeb.element);

   setTimeout(function(){sayHi(agentWeb,xml);},500);

   return this.each(function() {
     loadAllActions(agentWeb,xml);
   });
};

function closeAgent(agentWeb){
  $("#agentWeb").empty();
  responsiveVoice.cancel();
}
