define(['threejs'], function(threejs){
    "use strict";

    return function (width, height){

        //this.obj = new THREE.Object3D();

        this._width  = width || 100;
        this._height = height || 100;

        var shadowImg = $("<img src='./images/shadow-square.png'>");
        shadowImg.css("width", width);
        shadowImg.css("height", height);
 		
 		var shadowDiv = $("<div/>");
        shadowDiv.append(shadowImg);

        this.obj = new THREE.CSS3DObject( shadowDiv[0] );

        //this.obj.add(this._shadow);

    };

});
 

