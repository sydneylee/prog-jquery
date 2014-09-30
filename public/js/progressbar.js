$(function() {
    //initial selection of progressbar and label
    var $selected_bar = $( "#progressbar1");
    var $select = $("#sel-bar").empty();

    $('.progressbar').each(function(){
        var progressbar = $(this);
        var progressLabel = progressbar.children(".progress-label");
        var val = progressbar.data('current');
        var id = parseInt(progressbar.data("idnum"));
        
        progressbar.progressbar({
          value:val,
          create: function() {
            progressbar.data('current', val);
            progressLabel.text( val + "%" );

            //to refresh select in IE & firefox
            var o = $('<option/>', { value: id })
            .text('#progress'+id)
            .prop('selected', id === 1);
            o.appendTo($select);
          }
        });
     });

    //when select changes, change the selection of progressbar
    $('#sel-bar').change(function(event){
        $selected_bar = $('#progressbar'+$(this).val());
    });

    //buttons to control the selected progressbar
    $("button" ).button().click(function( event ) {
        // read the progressbar's data value and button's value
        // Since the progressbar value can go over 100, it is stored as data of progressbar 
        var old_value = $selected_bar.data('current'),
        new_value = old_value + $(this).data('adj');

        // new_value should not below 0
        if(new_value < 0){
            new_value = 0;
        }

        //only change the class when it goes over the limit
        if( old_value <= 100 && new_value > 100 ){
            $selected_bar.addClass('overlimit');  
        }
        else if(old_value > 100 && new_value <= 100){
            $selected_bar.removeClass('overlimit');
        }

        //draw progressbar
        $selected_bar.progressbar({value: new_value});

        //draw the label
        $selected_bar.data('current', new_value);

        //save the new_value
        $selected_bar.children(".progress-label:first").text( new_value + "%" );
    });

});