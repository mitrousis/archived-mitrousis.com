requirejs.config({
    baseUrl: 'js/src',
    paths: {
        lib: '../lib',
        jquery: '../lib/jquery-2.1.0.min',
        threejs: '../lib/three.min'
    }/*,
    shim: {
      'threejs' : {
        deps: ['css3d'],
        exports: 'THREE'
      }
    }*/
});


requirejs(['jquery', 'MainCanvas'], function (jquery, MainCanvas) {
      "use strict";
  
      var $self = this;
      
    	//videojs.options.flash.swf = "js/lib/video-js/video-js.swf";

      var mainCanvas = new MainCanvas();
      mainCanvas.init($("#mainCanvas")[0]);
      

});