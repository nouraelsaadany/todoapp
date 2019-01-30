document.getElementById('Plus').addEventListener('click', function() {
    // alert('Please type anything');

    var UserInput = document.getElementById('form-name').value;
    console.log(UserInput);
    alert('You have typed :' + " " + UserInput);
});