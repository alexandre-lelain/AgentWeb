# Agent Web, votre web assitant !

## FR

### INSTALLATION

1. Placez le plugin à la racine de votre projet.

Dans votre page web :
2. Soyez sûr d'avoir linké les libraires suivantes : Jquery et Jquery UI
sinon voici leur liens :
```javascript
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
```
3. Linkez de plus la librairie TTS suivante :
```javascript
<script src='https://code.responsivevoice.org/responsivevoice.js'></script>
```
4. Incluez le code suivant dans le body de votre page :
```javascript
<div id="agentWeb" class="animation" ></div>
```
5. Voici l'appel au plugin que vous pouvez mettre soit à la suite, soit dans le footer de votre page web :
```javascript
<script src="path/to/folder/js/script-agentWeb.js" ></script>
<script>$(document).ready(function(){launchAgent();});</script>
```

6. Votre projet doit être situé coté serveur

7. Si vous décidez de renommer le plugin, faites la modification dans le fichier [nomDuPlugin]/js/script-agentWeb.js à la ligne 7


## PERSONNALITATION

   Vous pouvez personaliser le plugin en utilisant l'interface "configuration.php" conçue à cet effet, ou tout simplement éditer directement les fichiers xml dans src/
