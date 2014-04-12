define(function(){
	
	var Point = function (x, y) {
    	this.x = x || 0;
    	this.y = y || 0;
	};

	var Vector = function (x, y, z) {
    	this.x = x || 0;
    	this.y = y || 0;
    	this.z = z || 0;
	}; 

	var map = function(value, min1, max1, min2, max2) {
    	return min2 + (max2 - min2) * ((value - min1) / (max1 - min1));
    }
    
	return {
		"Point" : Point,
		"Vector" : Vector,
		"map" : map
	};
	
});