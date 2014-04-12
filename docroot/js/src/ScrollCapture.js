define(["util/NumberUtil"], function(NumberUtil){
    "use strict";

    function ScrollCapture(){

        this._touchStartPos   = new NumberUtil.Point();
        this._windowScroll    = new NumberUtil.Point();
        
        var $self             = this;

        // Public
        this.getWindowScroll = function (){
            return this._windowScroll;
        };


        if (Modernizr.touch){

            this._onTouchStart = function (event) {
                event.preventDefault();

                var touch            = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
                $self._touchStartPos.x = touch.pageX;
                $self._touchStartPos.y = touch.pageY;

            };

            this._onTouchMove = function (event) {
                event.preventDefault();

                var touch = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];

                $self._windowScroll.x += (touch.pageX - $self._touchStartPos.x) * 1;
                $self._windowScroll.y += (touch.pageY - $self._touchStartPos.y) * -1;

                $self._touchStartPos.x = touch.pageX;
                $self._touchStartPos.y = touch.pageY;

                $self._limitScroll();

            };

            $(window).on("touchmove", this._onTouchMove);
            $(window).on("touchstart", this._onTouchStart);

        } else {
            this._onScroll = function (event) {
                
                $self._windowScroll.y = $(window).scrollTop();
                $self._windowScroll.x = $(window).scrollLeft();

                $self._limitScroll();
            };

            $(window).on("scroll", this._onScroll);
        }


        this._limitScroll = function(){
            $self._windowScroll.x = Math.max(0, Math.min($self._windowScroll.x, $(document).width()));
            $self._windowScroll.y = Math.max(0, Math.min($self._windowScroll.y, $(document).height()));

        };


    }

    return new ScrollCapture();

});