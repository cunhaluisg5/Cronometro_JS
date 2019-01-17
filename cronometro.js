(function(win, doc){
    
    'use strict';

    var $field = doc.querySelector('[data-js="field"]');
    var $start = doc.querySelector('[data-js="start"]');
    var $stop = doc.querySelector('[data-js="stop"]');
    var $reset = doc.querySelector('[data-js="reset"]');
    var time;

    $start.addEventListener('click', timerStart, false);
    $stop.addEventListener('click', timerStop, false);
    $reset.addEventListener('click', timerReset, false);

    function timerStart(){
        $field.value = +$field.value + 1;
        time = setTimeout(timerStart, 1000);
    }

    function timerStop(){
        clearTimeout(time);
    }

    function timerReset(){
        $field.value = "0";
        timerStop();
    }

})(window, document);