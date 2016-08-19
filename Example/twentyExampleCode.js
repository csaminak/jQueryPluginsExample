(function() {
    'use strict';

    $(window).load(function(){
        $('#container1').twentytwenty();
        $('#container2').twentytwenty({
            default_offset_pct: 0.8
        });
        $('#container3').twentytwenty({
            orientation: 'vertical'
        });
    });


    $.fn.contrast = function() {
       this.css({
           'color': '#fff',
           'background-color': '#000',
           'font-style': 'italic',
           'padding': '1em',
           'text-align': 'center'
       });
       return this;
   };

   $('.myPlugin').contrast();


})();
