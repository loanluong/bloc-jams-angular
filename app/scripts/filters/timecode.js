(function() {
    function timecode() {
        return function(seconds) {
            var seconds = Number.parseFloat(seconds);
            
            if (Number.isNaN(seconds)) {
                return '-:--';
            }
            
            var wholeSeconds = Math.floor(seconds);
            var output = buzz.toTimer(wholeSeconds);    
            return output;
        };       
    }
    
    angular
        .module('blocJams')
        .filter('timecode', timecode);
})();