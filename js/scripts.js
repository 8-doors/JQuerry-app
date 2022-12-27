let li = $('<li></li>');
let input = $('#input');

function addNew(){
    li.append(input.val());

    if (input.val() === '') {
        alert("You can't add nothing to the list!!!");        
    }else {
        $('#list').append(li);
    }
};   

function cross() {
    li.addClass(".cross");
};

li.on('click', function cross() {
    li.addClass(".cross");
});

let crossButt = $('<button></button>');
