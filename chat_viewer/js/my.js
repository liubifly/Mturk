$(document).ready(function() {
    $(function(){
            $('button').click(function() { 
                sel = window.getSelection();
                if (sel.rangeCount && sel.getRangeAt) {
                    range = sel.getRangeAt(0);
                }
                // Set design mode to on
                document.designMode = "on";
                if (range) {
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
                var color = $(this).css('background-color')
                // Colorize text
                document.execCommand("ForeColor", false, color);
                // Set design mode to off
                document.designMode = "off";  
            });
    });
} );
