// //var newDiv = document.createElement('div');
// var addHere = document.getElementById('divToHide1');

// newDiv.className == "flex-container row";

// var TEST = document.getElementById('Test');

// TEST.addEventListener('mouseenter', runevent);

// function runevent() {
//     console.log('presse');
// }


document.getElementById('Test').addEventListener('click', function() {
    // alert('Please type anything');

    var UserInput = document.getElementById('form-name').value;
    console.log(UserInput);
    alert('You have typed :' + " " + UserInput);
});