<!DOCTYPE html>
<html>
	<head>
		<title>Plugin's configuration</title>
		<meta http-equiv="content-type" content="text/html;charset=utf-8" />
		<link rel="stylesheet" href="css/bootstrap.min.css">
		<link rel="stylesheet" href="css/design.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<script src="js/bootstrap/bootstrap.min.js"></script>
		<?php require_once "config/config.php";?>
	</head>
	<body>

		<nav class="navbar navbar-inverse">
			<div class="container-fluid">
				<div class="navbar-header">
					<a class="navbar-brand" href="./configuration.php">AgentWeb's configuration</a>
				</div>
				<ul class="nav navbar-nav">
					<li class="active"><a id="functions" href="#" onclick="manageFunctions()">Fonctionnalités</a></li>
					<li><a id="param" href="#" onclick="manageParameters()">Paramètres</a></li>
					<li><a id="strings" href="#" onclick="manageStrings()">Personalisation</a></li>
					<li><a id="dialogs" href="#" onclick="manageDialog()">Dialogues</a></li>
					<li><a id="about" href="#" onclick="about()">A propos</a></li>
				</ul>
			</div>
		</nav>
		<div id="corps">
			<div id="head">
				<img src="images/asi.png" id="logo"/>
				<h1>Configuration du plugin AgentWeb</h1>
			</div><br/><br/>
			<div id="choix"></div>
		</div>

	</body>

	<footer>
		<script>
			$(document).ready(function(){
			  $.when($.getScript("config/createForm.js")
			  	).done(function(){
					manageTabs();
					manageFunctions();
			  });
		 	});
		</script>

	</footer>
</html>
