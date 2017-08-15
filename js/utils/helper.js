function setVoice(xml){
  if (xml['params'].getElementsByTagName("language")[0].childNodes[0].nodeValue == "fr")
    responsiveVoice.setDefaultVoice("French Female");
  else
    responsiveVoice.setDefaultVoice("US English Female");
}

function getXMLHttp(){
  if (window.XMLHttpRequest) {
     // code for IE7+, Firefox, Chrome, Opera, Safari
     return xmlhttp = new XMLHttpRequest();
  } else {
     // code for IE6, IE5
     return xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
}

function getXML(path) {
  xmlhttp.open("GET", path, false);
  xmlhttp.send();
  if (xmlhttp.status != 200) {
    var totalPath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/")) + path;
    alert("Error: couldn't find " + path);
    console.error("Couldn't find " + path + "\nFull path name was " + totalPath);
  }
  return xmlhttp.responseXML;
}

function getAnswerAnimationFromQuestionFromXML(question,xml) {
    var res = new Array();
    var dialogs = xml['dialog'].getElementsByTagName("dialog");
    for (var i = 0; i < dialogs.length; i++) {
        var dialog = dialogs[i];
        if (question === dialog.getElementsByTagName("question")[0].childNodes[0].nodeValue) {
            res[0] = dialog.getElementsByTagName("answer")[0].childNodes[0].nodeValue;
            if (dialog.getElementsByTagName("animation").length) {
               res[1] = dialog.getElementsByTagName("animation")[0].childNodes[0].nodeValue;
            }
        }
    }
    return res;
}
