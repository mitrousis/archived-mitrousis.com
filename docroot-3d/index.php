<?
  if(strpos($_ENV["_"], "MAMP") === FALSE && strpos($_SERVER["SERVER_NAME"], "www") === false || strpos($_SERVER["SERVER_NAME"], "mybluemonkey") !== false ){
    Header( "HTTP/1.1 301 Moved Permanently" );
    Header( "Location: http://www.mitrousis.com" );
  }

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Nicholas Mitrousis, San Francisco CA">
    <meta name="author" content="">
    <title>Nicholas Mitrousis, San Francisco CA</title>

    <!-- Bootstrap core CSS -->
    <link href="css/normalize.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">
    <script src="js/lib/modernizr.js"></script>
    <!--link href="js/lib/video-js/video-js.min.css" rel="stylesheet">
    <link href='http://fonts.googleapis.com/css?family=Antic+Slab' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Rosario:400' rel='stylesheet' type='text/css'-->
  
  </head>

  <body>
   
    <div id="mainCanvas"></div>

    <!--script src="js/lib/mustache.js"></script>
    <script src="js/lib/video-js/video.js"></script-->
    <!--script src="js/lib/three.min.js"></script>
    <script src="js/lib/CSS3DRenderer.js"></script-->
    <script data-main="js/src/Main" src="js/lib/require.js"></script>
  </body>
</html>
