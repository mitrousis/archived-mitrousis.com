define(["AnimationFrame", "util/NumberUtil"], function(AnimationFrame, NumberUtil){
	"use strict"

	function NavBar (){
		var $self 			= this;
	
		this._currScrollPos = 0;
		this._nextScrollPos = 0;

		this.setModel = function (model) {

			this._clearDom();

			this._model			= model;
			this._dateGroup 	= $("<div class=\"nav-date-group\"></div>");
			this._navSelector 	= $("<div class=\"nav-selector\"></div>");
			this._dateDivs  	= {};

			// Assumes reversed ordered year in model
			var latestYear 	 = new Date(model[0].timestamp * 1000).getFullYear() + 1;
			var earliestYear = new Date(model[model.length-1].timestamp * 1000).getFullYear() - 1;

			while(latestYear >= earliestYear){
				var dateDiv = $("<div class=\"nav-date\">" + latestYear + "</div>");
				this._dateDivs[latestYear] = dateDiv;
				this._dateGroup.append(dateDiv);
				
				if(latestYear != earliestYear){
					this._dateGroup.append("<div class=\"nav-ticks\">&bull;</div>");
					this._dateGroup.append("<div class=\"nav-ticks\">&bull;</div>");
					this._dateGroup.append("<div class=\"nav-ticks nav-half-tick\">|</div>");
					this._dateGroup.append("<div class=\"nav-ticks\">&bull;</div>");
					this._dateGroup.append("<div class=\"nav-ticks\">&bull;</div>");
				}

				latestYear--;
				
			}

			
			$("#nav").append(this._navSelector);
			$("#nav").append(this._dateGroup);

			AnimationFrame.on("frameTick", function(){
				$self._onFrame();
			});
		};

		this._clearDom = function(){
			$("#nav").empty();
		};

		this._onFrame = function(){
			this._currScrollPos += (this._nextScrollPos - this._currScrollPos) * .1;
			this._dateGroup.css("left", this._currScrollPos);

		};

		this._setViewByDate = function (date) {
			var year 		= date.getFullYear();
			var startYear 	= new Date(year, 0).getTime();
			var nextYear 	= new Date(year - 1, 0).getTime();

			// Quick fix for undefined error
			if(typeof this._dateDivs[year] !== 'undefined') {
				var startDiv 	= this._dateDivs[year].position().left;
				var nextDiv	 	= this._dateDivs[year-1].position().left;
				var posMap		= NumberUtil.map(date.getTime(), startYear, nextYear, startDiv, nextDiv );

				this._nextScrollPos = -posMap;
				
			}
		};

		// Assumes the nav height is 50...
		var topPos = 0;//50;

		// Model contains dom references for each itesm
		this.updateOnScroll = function(){
			
			if(this._model == null) return;

			var nextIndex	= 0;
			var nextDist    = 0;
			var lastDist    = Infinity;

			for(var i = 0; i<this._model.length; i++) {
				nextDist = this._model[i].elementTop - topPos;
				
				if(this._model[i].elementTop >= topPos && nextDist < lastDist){
					lastDist = nextDist;
					nextIndex = i;
				}
			}

			var laterIndex   = Math.max(0, nextIndex - 1);
			var earlierIndex = Math.min(this._model.length-1, laterIndex + 1);

			var laterItem 	= this._model[laterIndex];
			var earlierItem = this._model[earlierIndex];
			
			// Map position to date
			var targetDate = NumberUtil.map(topPos, laterItem.elementTop, earlierItem.elementTop, new Date(laterItem.timestamp * 1000).getTime(), new Date(earlierItem.timestamp * 1000).getTime());
			
			this._setViewByDate(new Date(targetDate));
	
		};
	}

	return NavBar;

});