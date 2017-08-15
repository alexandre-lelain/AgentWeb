**** Plugin's configuration ****

**** FR ****

  *** INSTALLATION ***

  1 - Placez le plugin à la racine de votre projet.
  2 - Dans votre page web :
    2.1 - Soyez sûr d'avoir linké les libraires suivantes : Jquery et Jquery UI
          sinon voici leur liens :

          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
          <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
      		<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">

    2.2 - linkez de plus la librairie TTS suivante :

          <script src='https://code.responsivevoice.org/responsivevoice.js'></script>

    2.3 - incluez le code suivant dans le body de votre page :

          <div id="agentWeb" class="animation" ></div>

    2.4 - Voici l'appel au plugin que vous pouvez mettre soit à la suite, soit dans le footer de votre page web :

          <script src="path/to/folder/js/script-agentWeb.js" ></script>
          <script>$(document).ready(function(){launchAgent();});</script>

   3 - Votre projet doit etre situé coté serveur

   4 - Si vous décidez de renommer le plugin, faites la modification dans le fichier [nomDuPlugin]/js/script-agentWeb.js à la ligne 7


   *** PERSONNALITATION ***

   Vous pouvez personaliser le plugin en utilisant l'interface "configuration.php" conçue à cet effet, ou tout simplement éditer directement les fichiers xml dans src/
   
