<?

  if($_SERVER["SERVER_NAME"] != "localhost" && strrpos($_SERVER["SERVER_NAME"], "www") === false || strrpos($_SERVER["SERVER_NAME"], "mybluemonkey") !== false ){
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
    <meta name="title" content="Nicholas Mitrousis, San Francisco CA">
    <meta name="author" content="">
    
    <title>Mitrousis</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/reset.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">
    <link href="js/lib/video-js/video-js.min.css" rel="stylesheet">
    <!--link href='//fonts.googleapis.com/css?family=Rokkitt' rel='stylesheet' type='text/css'-->
    <link href='http://fonts.googleapis.com/css?family=Antic+Slab' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Rosario:400' rel='stylesheet' type='text/css'>
    <!--link href='//fonts.googleapis.com/css?family=Fredericka+the+Great' rel='stylesheet' type='text/css'-->

  </head>

  <body>

    <div id="nav">
    </div>

    <div class="item-container"></div>

    <div class="scroll-holder"></div>

    <script src="js/lib/mustache.js"></script>
    <script src="js/lib/video-js/video.js"></script>
    <script data-main="js/main" src="js/lib/require.js"></script>

    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-49697846-1', 'mitrousis.com');
      ga('send', 'pageview');

    </script>

  </body>
</html>
