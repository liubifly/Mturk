$(document).ready(function() {
    $(function(){
        // $.getJSON('../metadata.json', function (data) {
            $('#example').load('../chat_htmls/' + 'C_0a0a50cbadc24893acf19f4b67c251d3' + '.html');

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

        // } );
    });
} );
