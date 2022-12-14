function addNew(){
    let li = $('<li></li>');
    let input = $('#input').val();
    li.append(input);

    if (input === '') {
        alert("You can't add nothing to the list!!!");        
    }else {
        let list = $('#list');
        list.append(li);
    }
}    

