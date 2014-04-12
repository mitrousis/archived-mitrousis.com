<?

	if(strrpos($_SERVER["SERVER_NAME"], "mybluemonkey") !== false){
		Header( "HTTP/1.1 301 Moved Permanently" );
		Header( "Location: http://www.mitrousis.com" );
	}


?>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Nicholas Mitrousis | Creativity and code for screen media</title>
<META NAME="Description" CONTENT="Nicholas Mitrousis is a freelance online designer and developer based in San Francisco California. His work is primarily Flash-based rich-media experiences with emphasis on unique interactivity and motion.">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<script type="text/javascript" src="js/swfobject.js"></script>
<style type="text/css">

<!--
html, body {
	width: 100%;
	height: 100%;
	margin:0px; 
	padding:0px;
}

body {
	background-color: #3c4043;
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
}

div#noFlashContent {
	height:100%;
	width:100%;
	text-align: left;
	vertical-align: top;
}


-->

</style>
	
</head>

<body>
	
			<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td width="100%" height="100%" align="center" valign="middle">
						<div id="noFlashContent">
							<a href="http://www.macromedia.com/software/flashplayer/">Click here to download the Flash plugin</a>
						 </div>
					</td>
				</tr>

		  </table>
		  
	<script type="text/javascript">
	
	  	var so = new SWFObject("media/swf/shell.swf", "swf", "100%", "100%", "9", "#3c4043");
	 	so.useExpressInstall('media/swf/expressinstall.swf');
		
	   	so.write("noFlashContent");

	</script>
	
	
		  
</body>
</html>
