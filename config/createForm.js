
function manageTabs(){
    $('.nav.navbar-nav > li').on('click', function(e) {
        $('.nav.navbar-nav > li').removeClass('active');
        $(this).addClass('active');
    });
}

function getDescription(){
    var tmp = new Array();
    tmp[1] = "L'agent dit bonjour à l'ouverture de la page";
    tmp[2] = "Comportement idle";
    tmp[3] = "Drag de l'agent";
    tmp[4] = "Clique sur l'agent";
    tmp[5] = "Question posée";
    tmp[6] = "Comportement à la saise de texte 1";
    tmp[7] = "Comportement à la saise de texte 2";
    tmp[8] = "Comportement à la saise d'un email correct";
    tmp[9] = "Comportement à la saise d'un email incorrect";
    return tmp;
}

function getFunctionName(){
    var tmp = new Array();
    tmp[1] = "sayHi";
    tmp[2] = "idle";
    tmp[3] = "drag";
    tmp[4] = "onClickCharacter";
    tmp[5] = "onQuestionKeyPressed";
    tmp[6] = "onWatchInputText1";
    tmp[7] = "onWatchInputText2";
    tmp[8] = "onWatchInputEmailCorrect";
    tmp[9] = "onWatchInputEmailIncorrect";
    return tmp;
}

function getDuration(){
    var tmp = new Array();
    tmp[1] = "3000";
    tmp[2] = null;
    tmp[3] = "8000";
    tmp[4] = "2000";
    tmp[5] = null;
    tmp[6] = "5000";
    tmp[7] = "5000";
    tmp[8] = "5000";
    tmp[9] = "5000";
    return tmp;
}

function getAnim(){
    var tmp = new Array();
    tmp[1] = "success";
    tmp[2] = "idle";
    tmp[3] = "walk";
    tmp[4] = "noIdea";
    tmp[5] = null;
    tmp[6] = "thinking";
    tmp[7] = "thinking";
    tmp[8] = "success";
    tmp[9] = "panic";
    return tmp;
}

function getMsg(){
    var tmp = new Array();
    tmp[1] = "Bonjour, je suis à votre service !";
    tmp[2] = null;
    tmp[3] = "Attention je suis fragile voyons !";
    tmp[4] = "Vous m'avez cliqué dessus, honte à vous !";
    tmp[5] = null
    tmp[6] = "Je surveille votre saisie...";
    tmp[7] = "Vous avez l'air d'avoir beaucoup de choses à dire...";
    tmp[8] = "Email correct !";
    tmp[9] = "Email incorrect !";
    return tmp;
}

function manageFunctions(){
    $("#choix").empty();
    var des = getDescription();
    var nom = getFunctionName();
    var msg = getMsg();
    var durees = getDuration();
    var anims = getAnim();
    var html = `
    <h2> Fonctionnalités du plugin </h2><br/><br/>
            <div class="form-group">
                <div class="col-xs-4">
                <label for="sel1">Choisir fonctionnalité :</label>
                <select class="form-control input-small" id="sel1">
    `;
    var i = 1;
    des.forEach(function(e){
        html = html + `<option value='`+nom[i]+`'>`+e+`</option>`;
        i = i + 1;
    });
    html = html + `
            </select>
        </div><br/><br/><br/><br/>
    </div>
    `;
    html = html + getAction(nom[1],des[1]+" :",msg[1],durees[1]);
    $("#choix").append(html);
    $("#sel1").change(function(){
        $("#action").remove();
        var anim = "success";
        var index;
        [html,anim,index] = getActionSelected(nom,des,msg,durees,anims);
        $("#choix").append(html);
        $("#sel option[value='"+anim+"']").attr("selected","selected");
        if (nom[index] == "onWatchInputText1" || nom[index] == "onWatchInputText2")
            $("#voixNo").prop("checked", true)
        alertSuccess();
    });
    alertSuccess();
}

function getActionSelected(nom,des,msg,durees,anims){
    var index = nom.indexOf($("#sel1").val());
    return tmp = [getAction(nom[index],des[index]+" :",msg[index],durees[index]),anims[index],index];
}

function manageStrings(){
    $("#choix").empty();
    var html = `
    <h2> Personalisation du plugin </h2><br/><br/>
    <div class="form-group">
        <div class="col-xs-2">
        <label for="sel1">Choisir langue :</label>
        <select class="form-control input-small" id="sel1">
            <option>FR</option>
            <option>EN</option>
        </select>
        </div><br/><br/><br/><br/>
    </div>
    `;
    html = html + getStringsFr();
    $("#choix").append(html);
    $("#sel1").change(function(){
        $("#stringsForm").remove();
        if ($("#sel1").val() == "FR")
            html = getStringsFr();
        else
            html = getStringsEn();
        $("#choix").append(html);
        alertSuccess();
    });
    alertSuccess();
}

function about(){
    $("#choix").empty();
    var html = `
    <h2> A propos du plugin </h2><br/><br/>
        <h4>Ce plugin a été développé par plusieurs personnes :</h4><br/>
        <div class="col-xs-5">
            <ul class="list-group">
                <li class="list-group-item"> 2013 - 2015 : Cédric Cousseran, Alexandre Guignebert, Lucie Le Borgne et Nicolas Monet</li>
                <li class="list-group-item"> 2017 : Alexandre Le Lain</li>
            </ul>
        </div>
        <div class="col-xs-12">
            Ce plugin est une idée originale de Monsieur <strong>Alexandre Pauchet</strong>, enseignant chercheur à l'INSA de Rouen Normandie.
        </div><br/>
    `;
    $("#choix").append(html);
}

function manageDialog(){
    $("#choix").empty();
    var html = `
    <h2> Dialogues </h2><br/><br/>
        <h4> Pas disponible pour l'instant...</h4>
    `;
    $("#choix").append(html);
}

function manageParameters(){
    $("#choix").empty();
    var html = `
    <h2> Paramètres globaux du plugin </h2><br/><br/>
        <form action='#' method="POST">
            <h4>Language :</h4> &nbsp;&nbsp;&nbsp;&nbsp; <input type='radio' name='lang' value='fr' checked>Français &nbsp;&nbsp; <input type='radio' name='lang' value='en' >Anglais<br/><br/>
            <h4>L'agent peut répondre par des messages écrits :</h4> &nbsp;&nbsp;&nbsp;&nbsp; <input type='radio' name='agentWrite' value='true' checked>Oui &nbsp;&nbsp; <input type='radio' name='agentWrite' value='false' >Non<br/><br/>
            <h4>L'agent peut répondre par des messages audios :</h4> &nbsp;&nbsp;&nbsp;&nbsp; <input type='radio' name='agentSpeech' value='true' checked>Oui &nbsp;&nbsp; <input type='radio' name='agentSpeech' value='false' >Non<br/><br/>
            <button id='btnValider' type="submit" class='btn btn-success' name='valid'>Valider</button>
        </form>
    `;
    $("#choix").append(html);
    alertSuccess();
}

function alertSuccess(){
    $("form").submit(function(e) {
        alert("Configuration enregistrée !");
    });
}

function getAction(nomAction,name,msg,duree){
    var tmp;
    if (nomAction == "idle"){
        tmp = `
        <div id="action">
            <form action='#' method="POST">
                <h3><strong>`+name+`</strong></h3><br/>
                <h4>Actif : </h4> &nbsp;&nbsp;&nbsp;&nbsp; <input type='radio' name='actif' value='true' checked>Oui &nbsp;&nbsp; <input type='radio' name='actif' value='false' >Non<br/><br/>
                `;
        tmp = tmp + getSelect(duree);
    }
    else if (nomAction == "onQuestionKeyPressed") {
        tmp = `
        <div id="action">
            <form action='#' method="POST">
                <h3><strong>`+name+`</strong></h3><br/>
                <h4>Actif : </h4> &nbsp;&nbsp;&nbsp;&nbsp; <input type='radio' name='actif' value='true' checked>Oui &nbsp;&nbsp; <input type='radio' name='actif' value='false' >Non<br/><br/>
                `;
    }
    else{
        tmp = `
        <div id="action">
            <form action='#' method="POST">
                <h3><strong>`+name+`</strong></h3><br/>
                <h4>Actif : </h4> &nbsp;&nbsp;&nbsp;&nbsp; <input type='radio' name='actif' value='true' checked>Oui &nbsp;&nbsp; <input type='radio' name='actif' value='false' >Non<br/><br/>
                <div class="col-xs-5">
                    <h4>Message de l'agent : </h4> &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="form-control" name="msg" value="`+msg+`" maxlength="100"> <br/>
                </div>
                <h4>Voix on : </h4> &nbsp;&nbsp;&nbsp;&nbsp; <input type='radio' name='voix' value='true' id='voixYes' checked>Oui &nbsp;&nbsp; <input id='voixNo' type='radio' name='voix' value='false' >Non<br/><br/>
                <br/><br/>`;
        if (nomAction == "onWatchInputText1" || nomAction == "onWatchInputText2")
            tmp = tmp + getEvent(nomAction);
        tmp = tmp + getSelect(duree);
    }
        tmp = tmp + `
                <input type="hidden" name="nomAction" id="nomAction" value="`+nomAction+`" >
                <div class="col-xs-12">
                    <input id='btnValider' type='submit' class='btn btn-success' name='valid' value='Valider'>
                </div>
            </form>
        </div>
        `;
    return tmp;
}

function getSelect(duree){
    return `
    <div class="form-group">
        <div class="col-xs-2">
            <label for="sel1"><h4>Animation :</h4></label>
            <select class="form-control" id="sel" name="sel">
                <option value="success">Succès</option>
                <option value="idle">Au repos</option>
                <option value="jump">Saute</option>
                <option value="noIdea">Hausse les épaules</option>
                <option value="panic">En panique</option>
                <option value="thinking">Pensif</option>
                <option value="walk">Marche</option>
            </select><br/>
            <h4>Durée de l'animation (en ms): </h4> &nbsp;&nbsp;&nbsp;&nbsp;<input type="number" class="form-control" name="duree" value="`+duree+`" maxlength="10">
        </div><br/><br/>
    </div><br/><br/>`;
}

function getEvent(nomAction){
    var defaut = "input:text";
    if(nomAction == "onWatchInputText2")
        defaut = "textarea";
    return `
    <div class="col-xs-12">
        <div class="col-xs-2">
            <h4>Type d'input concerné : </h4> &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="form-control" name="event" value="`+defaut+`" maxlength="40"> <br/>
        </div><br/>
    </div>
    `;
}

function getStringsFr(){
    return `
        <div id="stringsForm">
            <h3> Version FR </h3><br/>
            <form action='#' method="POST">
                <div class="col-xs-2">
                    <h4>Indication à l'utilisateur :</h4> &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="form-control" name="hintFr" value="Parlez moi ici..." maxlength="40"> <br/>
                </div>
                <div class="col-xs-6">
                    <h4>Réponse par défaut de l'IA :</h4> &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="form-control" name="defaultAnsFr" value="Je suis désolée mais je n'ai pas compris votre demande..." maxlength="100"> <br/>
                </div>
                <div class="col-xs-12">
                    <button id='btnValider' type="submit" class='btn btn-success' name='valid'>Valider</button>
                </div>
            </form><br/><br/>
        </div>
    `
}

function getStringsEn(){
    return `
        <div id="stringsForm">
            <h3> Version EN </h3><br/>
            <form action='#' method="POST">
                <div class="col-xs-2">
                    <h4>Hint for the user :</h4> &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="form-control" name="hintEn" value="Talk to me..." maxlength="40"> <br/>
                </div>
                <div class="col-xs-6">
                    <h4>Default response of IA :</h4> &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="form-control" name="defaultAnsEn" value="I am very sorry but I didn't catch what you said..." maxlength="100"><br/>
                </div>
                <div class="col-xs-12">
                    <button id='btnValider' type="submit" class='btn btn-success' name='valid'>Valider</button>
                </div>
            </form>
        </div>
    `
}
