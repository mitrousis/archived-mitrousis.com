//define(['AnimationFrame'], function(AnimationFrame){
define([
	'jquery',
	'three/Box3D',
	'three/Plane3D',
	'three/Shadow3D',
	'util/NumberUtil',
	'ScrollCapture'
	],
function(
	jquery,
	Box3D,
	Plane3D,
	Shadow3D,
	NumberUtil,
	ScrollCapture
	){
	
	"use strict";

	return function() {

		var $self = this;

		this._camera 	= new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000 );
		this._scene		= new THREE.Scene();
		this._renderer  = new THREE.CSS3DRenderer();
		
		this._lastScroll  = new NumberUtil.Point();


		this._BGPlane = null;

		this._boxes = [];

		

		//this._sceneBG     = new THREE.Scene();
		//this._rendererBG  = new THREE.CSS3DRenderer();

		this._mousePos = new NumberUtil.Point();

		this.init = function(domElement) {

			this._camera.position.z = 500;
			
			var boxMat = {
				"front" : "video-front",
				"back" : "texture-cross-hatch",
				"left" : "texture-cross-hatch",
				"right" : "texture-cross-hatch",
				"top" : "texture-cross-hatch",
				"bottom" : "texture-cross-hatch"
			};

			for(var i=0; i<25; i++){
				var b3d = new Box3D(460, 266, 20, boxMat).obj;

				b3d.rotation.x = -.1 + Math.random() * .2;
				b3d.rotation.y = -.2 + Math.random() * .4;
				
				b3d.position.x = -100 + Math.random() * 200;
				b3d.position.z = -20 + Math.random() * 40;
				b3d.position.y = -(i * 600) - 20 + Math.random() * 40;


				/*var shad = new Shadow3D(460,266).obj;
				shad.position.z = -120;
				shad.position.x = b3d.position.x + 50;
				shad.position.y = b3d.position.y - 50;
				*/
				this._scene.add(b3d);
				//this._scene.add(shad);
				this._boxes.push(b3d);
			}	

			var cardMat = {
				"front" : "texture-cardboard-side",
				"back" : "texture-cardboard-side",
				"left" : "texture-cardboard-edge",
				"right" : "texture-cardboard-edge",
				"top" : "texture-cardboard-edge",
				"bottom" : "texture-cardboard-edge"
			};

			var cardboard = new Box3D(800, 600, 20, cardMat).obj;
			cardboard.rotation.x = Math.PI/2;
			cardboard.position.z = -300;
			cardboard.position.y = -800;
			this._scene.add(cardboard);

			/*for(i=0; i<10; i++){
				b3d = new Plane3D(522, 218, "cloud").obj;
				
				b3d.position.x = -600 + Math.random() * 1200;
				b3d.position.z = -400 + Math.random() * 300;
				b3d.position.y = -(i * 800) - 100 + Math.random() * 200;

				this._scene.add(b3d);
				this._boxes.push(b3d);
			}*/	


      		this._BGPlane = new Plane3D(window.innerWidth * 2, window.innerHeight * 2, "texture-watercolor-blue").obj;
      		this._BGPlane.position.z = -500;
      		//this._BGPlane.renderDepth = -1000;
      		
      		this._scene.add(this._BGPlane);

      		
      		//this._rendererBG.setSize( window.innerWidth, window.innerHeight );

      		domElement.appendChild( this._renderer.domElement );
			//domElement.appendChild( this._rendererBG.domElement );
			
			this._scrollProxy = $("<div/>");
			this._scrollProxy.css("position", "absolute");
			$("body").append(this._scrollProxy);


			window.requestAnimationFrame(function(){
				$self._onFrame();
			});
			/*AnimationFrame.on(AnimationFrame.FRAMETICK, function(){
				$self._onFrame();
			});*/

			$(document).on('mousemove',function(e){ 
				//$self._mousePos.x = e.pageX - $(document).innerWidth()/2;
				//$self._mousePos.y = e.pageY - $(document).innerHeight()/2;
			}); 

			$(window).on('resize',function(e){ 
				$self._onResize();
			}); 

			this._onResize();

		};

		this._onFrame = function() {
      		
      		var scrollPos  = ScrollCapture.getWindowScroll();
			//this._lastScroll.x += (scrollPos.x - this._lastScroll.x) * .5;
			//this._lastScroll.y += (scrollPos.y - this._lastScroll.y) * .5;

			this._camera.position.y += (-scrollPos.y - this._camera.position.y) * .3;

			/*this._camera.position.x = this._mousePos.x;
			this._camera.position.y = -this._mousePos.y;

			this._camera.lookAt(new THREE.Vector3(0,0,0));

			*/
			//this._BGPlane.position.x = this._camera.position.x*.002;
			this._BGPlane.position.y = this._camera.position.y*.8;

			//this._BGPlane.lookAt(this._camera.position);

			//this._mesh.obj.rotation.x -= .01;
      		//this._mesh.obj.rotation.y += .02;

      		this._renderer.render( this._scene, this._camera );
      		//this._rendererBG.render( this._sceneBG, this._camera );

      		window.requestAnimationFrame(function(){
				$self._onFrame();
			});
    	};

    	this._onResize = function () {
    		this._renderer.setSize( window.innerWidth, window.innerHeight );


    		this._scrollProxy.css("height", 3000);
    		this._scrollProxy.css("width", window.innerWidth);

    		// this will give us position relative to the world
	        //var p0 = lastItem.matrixWorld.getPosition().clone();
	        //var p1 = self.boxes[self.boxes.length-1].obj.matrixWorld.getPosition().clone();

    		/*

    		var screenW = $(window).width();
	        var screenH = $(window).height();

	        self.div.css("width", $(window).width());
	        self.camera.fov = Math.atan( screenH / ( 2 * self.camera.position.z ) ) * ( 180 / Math.PI );
	        self.renderer.setSize( screenW, screenH );

	        var projector = new THREE.Projector();

	        // this will give us position relative to the world
	        var p0 = self.boxes[0].obj.matrixWorld.getPosition().clone();
	        var p1 = self.boxes[self.boxes.length-1].obj.matrixWorld.getPosition().clone();

	        // projectVector will translate position to 2d
	        var v0 = projector.projectVector(p0, self.camera);
	        var v1 = projector.projectVector(p1, self.camera);

	        self.sceneScreenHeight = -(v1.y - v0.y) * (screenH);

	        self.div.css("height", self.sceneScreenHeight);


        	*/

    	};

	}    

});