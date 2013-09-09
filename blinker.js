(function( $ ) {
 
    $.fn.blinker = function(options) {
        // so we can refer later
        var that = this;
        
        var settings = $.extend({
            id: null,
            interval: 200,
            endcolor: '#000',
            colors: [
                  '#e74c3c',
                  '#f1c40f',
                  '#3498db',
                  '#9b59b6',
                  '#1abc9c',
                  '#e67e22',
                  '#95a5a6',
                  '#34495e',
                  '#2ecc71',
                  '#c0392b'
            ]
        }, options );
        
        var blink = function() {
            id = setInterval(function(){
                that.children().each(function(index) {
                    $(this).animate({
                        color: settings.colors[Math.floor(Math.random()*settings.colors.length)]
                    }, settings.interval);
                });
            }, settings.interval);
        };
        
        var resetBlink = function() {
            that.children().each(function(index) {
                $(this).animate({
                    color: settings.endcolor
                }, settings.interval);
            });
            
            clearInterval(id);
        };
        
        that.hover(blink, resetBlink);
    };
 
}( jQuery ));