define(['threejs'], function(threejs){
    "use strict";

    return function (width, height, depth, faceClasses){

        //$.extend(true, this.prototype, THREE.Object3D.prototype);

        this.obj = new THREE.Object3D();

        this._width  = width || 100;
        this._height = height || 100;
        this._depth  = depth || 100;

        var $self = this;

        //this.obj = new THREE.Object3D();
        this._size = new THREE.Vector3(width, height, depth);

        this._faces = [
            {p: new THREE.Vector3(0,0,1), r: new THREE.Euler(0,0,0), c: faceClasses.front }, // Front
            {p: new THREE.Vector3(1,0,0), r: new THREE.Euler(0,Math.PI/2,0), c: faceClasses.right }, // Right
            {p: new THREE.Vector3(0,0,-1), r: new THREE.Euler(0,Math.PI,0), c: faceClasses.back }, // Back
            {p: new THREE.Vector3(-1,0,0), r: new THREE.Euler(0,-Math.PI/2,0), c: faceClasses.left }, // Left
            {p: new THREE.Vector3(0,-1,0), r: new THREE.Euler(Math.PI/2,0,0), c: faceClasses.top  }, // Top
            {p: new THREE.Vector3(0,1,0), r: new THREE.Euler(-Math.PI/2,0,0), c: faceClasses.front.bottom } // Bottom
        ]

        for(var i=0; i<this._faces.length; i++){
            var face = this._faces[i];
            face.div = $("<div/>");
            face.div.addClass(face.c);
            
            //face.div.css("background", new THREE.Color( Math.random() * 0xffffff ).getStyle());

            /*face.div.css({
                "-webkit-backface-visibility" : "hidden",
                "backface-visibility" : "hidden"
            });  */
            
            // Sides
            if(face.p.x != 0) {
                face.div.css("width", this._size.z);
            } else {
                face.div.css("width", this._size.x);
            }

            if(face.p.y != 0) {
                face.div.css("height", this._size.z);
            } else {
                face.div.css("height", this._size.y);
            }
            
            face.obj = new THREE.CSS3DObject( face.div[0] );
            face.obj.position.x = face.p.x * this._size.x/2;
            face.obj.position.y = face.p.y * this._size.y/2;
            face.obj.position.z = face.p.z * this._size.z/2;

            face.obj.rotation.copy(face.r); 

            this.obj.add(face.obj);

        }

    };

});
