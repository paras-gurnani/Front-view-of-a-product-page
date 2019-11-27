document.ready(function(){
    ("up").on('click',function(){
        ("incdec input").val(parseInt(("incdec input").val())+1);
    });

    ("down").on('click',function(){
        ("incdec input").val(parseInt(("incdec input").val())-1);
    });

});