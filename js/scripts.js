function addNew(){
    let li = $('<li></li>');
    let input = $('#input');

    li.append(input.val());

    if (input.val() === '') {
        alert("You can't add nothing to the list!!!");        
    }else {
        $('#list').append(li);
    }

    function cross() {
        li.addClass("cross");
    };

    li.on('dblclick',cross);

    let crossButt = $('<crossButton></crossButton>');

    crossButt.append(document.createTextNode("X"));
    li.append(crossButt);

    function deleteIt(){
        li.addClass("del")
    };

    crossButt.on("click", deleteIt)

   
};   

$('#list').sortable();
