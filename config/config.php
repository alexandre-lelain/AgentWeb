<?php

if (isset($_POST['lang']) && isset($_POST['agentWrite']) && isset($_POST['agentSpeech']))
    validateParameters();

if (isset($_POST['hintFr']) && isset($_POST['defaultAnsFr']))
    validateStrings("fr",$_POST['hintFr'],$_POST['defaultAnsFr']);

if (isset($_POST['hintEn']) && isset($_POST['defaultAnsEn']))
    validateStrings("en",$_POST['hintEn'],$_POST['defaultAnsEn']);

if (isset($_POST['actif']))
    validateAction($_POST['nomAction'],$_POST['actif'],$_POST['msg'],$_POST['voix'],$_POST['sel'],$_POST['duree'],$_POST['event']);


function validateAction($actionName,$actif,$msg,$voix,$sel,$duree,$event){
    $dom = getXml("actions");
    $root = $dom->documentElement->getElementsByTagName('action');
    if ($actionName == "idle"){
        foreach ($root as $el) {
            if ($el->getElementsByTagName('name')->item(0)->nodeValue == $actionName){
                $el->getElementsByTagName('on')->item(0)->nodeValue = $actif;
                $el->getElementsByTagName('anim')->item(0)->nodeValue = $sel;
            }
        }
    }
    elseif ($actionName == "onQuestionKeyPressed") {
        foreach ($root as $el) {
            if ($el->getElementsByTagName('name')->item(0)->nodeValue == $actionName){
                $el->getElementsByTagName('on')->item(0)->nodeValue = $actif;
            }
        }
    }
    elseif ($actionName == "onWatchInputEmailCorrect" || $actionName == "onWatchInputEmailIncorrect") {
        $actionName = "onWatchInputEmail";
        $type = "success";
        if ($actionName == "onWatchInputEmailIncorrect")
            $type = "fail";
        foreach ($root as $el) {
            if ($el->getElementsByTagName('name')->item(0)->nodeValue == $actionName){
                $el->getElementsByTagName('on')->item(0)->nodeValue = $actif;
                $eltype = $el->getElementsByTagName($type)->item(0);
                $eltype->getElementsByTagName('msg')->item(0)->nodeValue = $msg;
                $eltype->getElementsByTagName('say')->item(0)->nodeValue = $voix;
                $anim = $eltype->getElementsByTagName('animation')->item(0);
                $anim->getElementsByTagName('anim')->item(0)->nodeValue = $sel;
                $anim->getElementsByTagName('duration')->item(0)->nodeValue = $duree;
            }
        }
    }
    else{
        foreach ($root as $el) {
            if ($el->getElementsByTagName('name')->item(0)->nodeValue == $actionName){
                $el->getElementsByTagName('on')->item(0)->nodeValue = $actif;
                $el->getElementsByTagName('msg')->item(0)->nodeValue = $msg;
                $el->getElementsByTagName('say')->item(0)->nodeValue = $voix;
                if ($el->getElementsByTagName('event')->length != 0)
                    $el->getElementsByTagName('event')->item(0)->nodeValue = $event;
                $anim = $el->getElementsByTagName('animation')->item(0);
                $anim->getElementsByTagName('anim')->item(0)->nodeValue = $sel;
                $anim->getElementsByTagName('duration')->item(0)->nodeValue = $duree;
            }
        }
    }
    $location = "src/actions.xml";
    $dom->save($location);
}

function validateStrings($lang,$hint,$default){
    $dom = getXml("strings-".$lang);
    $root=$dom->documentElement;
    $root->getElementsByTagName('hint')->item(0)->nodeValue = $hint;
    $root->getElementsByTagName('unknownQuestion')->item(0)->nodeValue = $default;
    $location = "src/strings-".$lang.".xml";
    $dom->save($location);
}

function validateParameters(){
    $dom = getXml("parameters");
    $root=$dom->documentElement;
    $root->getElementsByTagName('language')->item(0)->nodeValue = $_POST['lang'];
    $root->getElementsByTagName('agentWrite')->item(0)->nodeValue = $_POST['agentWrite'];
    $root->getElementsByTagName('agentSpeech')->item(0)->nodeValue = $_POST['agentSpeech'];
    $location = "src/parameters.xml";
    $dom->save($location);
}

function getXml($file){
    $dom = new DOMDocument();
    $dom->load("http://localhost".dirname($_SERVER['PHP_SELF'])."/src/".$file.".xml");
    return $dom;
}
