define(['threejs'], function(threejs){
    "use strict";

    return function (width, height, className){

        this.obj = new THREE.Object3D();

        this._width  = width || 100;
        this._height = height || 100;

        this._size = new THREE.Vector3(width, height, 0);

        this.div = $("<div/>");
        this.div.css("width", this._size.x);
        this.div.css("height", this._size.y);
        this.div.addClass(className);

        var faceObj = new THREE.CSS3DObject( this.div[0] );

        this.obj.add(faceObj);


    };

});
