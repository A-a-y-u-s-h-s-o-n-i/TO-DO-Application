//LIST_CLICK_EVENT and DELETE_EVENT
$('ul').on('click','li', function () {
    $(this).toggleClass('completed');
}).on('click','li span', function (event) {
    $(this).parent().fadeOut(500,function () {
        $(this).remove();
    });
    event.stopPropagation();
})

//INPUT_TASK
$('input[type="text"]').keypress(function (event) {
    if (event.which === 13){
        //Grab Text from Input
        let todoText = $(this).val();
        $(this).val('');
        //Create a new Li and add to Ul
        $('ul').append(`<li class="list-group-item"><span><i class="far fa-trash-alt"></i></span>${todoText}</li>`)
    }
})