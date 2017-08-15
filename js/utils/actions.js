var animIdle;

function loadAllActions(agentWeb,xml){
  var actions = xml['actions'].getElementsByTagName("action");
  animIdle = (actions[1].getElementsByTagName("anim")[0].childNodes[0].nodeValue);
  for (i = 1; i < actions.length; i++){
    if ((actions[i].getElementsByTagName("on")[0].childNodes[0].nodeValue) === "true")
      window[actions[i].getElementsByTagName("name")[0].childNodes[0].nodeValue](agentWeb,xml,actions[i]);
  }
}

function getMsg(action){
  return action.getElementsByTagName("msg")[0].childNodes[0].nodeValue;
}

function sayMsgOrNot(action){
  return action.getElementsByTagName("say")[0].childNodes[0].nodeValue;
}

function tellMsg(agentWeb,msg,bool){
  agentWeb.tell(msg,bool);
  agentWeb.laBulle.resetBulle();
}

function getEvent(action){
  return action.getElementsByTagName("event")[0].childNodes[0].nodeValue;
}

function getAnim(action){
  return action.getElementsByTagName("anim")[0].childNodes[0].nodeValue;
}

function getDuration(action){
  return action.getElementsByTagName("duration")[0].childNodes[0].nodeValue;
}

function idle(agentWeb,xml,action){
  var img = action.getElementsByTagName("anim")[0].childNodes[0].nodeValue;
  var dim = getDimensions(img);
  $(agentWeb.character).css({"background-image": "url("+pluginName+"/images/"+img+".gif)","margin-left": dim[0]+"px"});
}

function playAnim(agentWeb,action){
  var anim = getAnim(action);
  var dim = getDimensions(anim);
  $(agentWeb.character).css({"background-image": "url("+pluginName+"/images/"+anim+".gif)","margin-left": dim[0]+"px"});
  resetIrena(agentWeb,getDuration(action));
}

function resetIrena(agentWeb,time){
  var tmp = animIdle;
  var dim = getDimensions(tmp);
  setTimeout(function () {
    $(agentWeb.character).css({"background-image": "url("+pluginName+"/images/"+tmp+".gif)","margin-left": dim[0]+"px"});
  }, time);
}

function doAction(agentWeb,action){
  tellMsg(agentWeb,getMsg(action),sayMsgOrNot(action));
  playAnim(agentWeb,action);
}

function drag(agentWeb,xml,action){
    $(agentWeb.character).draggable({
        drag: function(event, ui) {
           agentWeb.dragPosition();
        },
        start: function(){
           doAction(agentWeb,action);
        },
        containment:[0,0, $(window).screenX, $(window).screenY]
    });
}

function onClickCharacter(agentWeb,xml,action){
  $(agentWeb.character).click(function(){
    doAction(agentWeb,action);
  });
}

function sayHi(agentWeb,xml){
  var actions = xml['actions'].getElementsByTagName("action");
  if ((actions[0].getElementsByTagName("on")[0].childNodes[0].nodeValue) === "true")
    doAction(agentWeb,actions[0]);
}

function onWatchInputText1(agentWeb,xml,action){
  $(getEvent(action)).not(":input[name=question]").keypress(function(){
    doAction(agentWeb,action);
  });
}

function onWatchInputText2(agentWeb,xml,action){
  $(getEvent(action)).not(":input[name=question]").keypress(function(){
    doAction(agentWeb,action);
  });
}

function onWatchInputEmail(agentWeb,xml,action){
  $(":input[type=email]").keyup(function(){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var tmp;
    if (!(re.test($(":input[type=email]").val()))){
      tmp = action.getElementsByTagName("fail")[0];
      doAction(agentWeb,tmp);
      $(agentWeb.bulle).css({"background-color" : "#ff3333", "color" : "white"});
    }
    else{
      tmp = action.getElementsByTagName("success")[0];
      doAction(agentWeb,tmp);
      $(agentWeb.bulle).css({"background-color" : "green", "color" : "white"});
    }
  });
}

function onQuestionKeyPressed(agentWeb,xml){
  $("#"+agentWeb.laQuestion.iden).keypress(function(e) {
      // if you press 'enter'
      if (e.which === 13) {
          var question = $(this).val();
          $(this).val("");
          var res = getAnswerAnimationFromQuestionFromXML(question,xml);
          var answer = res[0];
          var animation = res[1];
          if(answer == null)
             agentWeb.tell(xml['strings'].getElementsByTagName("unknownQuestion")[0].childNodes[0].nodeValue,"true");
          else {
             agentWeb.tell(answer,"true");
             if (animation != null)
                $(agentWeb.character).effect(animation);
          }
          agentWeb.laBulle.resetBulle();
      }
  });
}

function getDimensions(anim){
  var res = new Array();
  switch (anim) {
    case "idle": res[0] = 45; res[1] = 100;
    break;
    case "thinking": res[0] = 35; res[1] = 100;
    break;
    case "jump": res[0] = -20; res[1] = 90;
    break;
    case "success": res[0] = 30; res[1] = 100;
    break;
    case "panic": res[0] = 0; res[1] = 85;
    break;
    case "walk": res[0] = 20; res[1] = 90;
    break;
    case "noIdea": res[0] = -5; res[1] = 105;
    break;
    default: res[0] = 40; res[1] = 100;
  }
  return res;
}
