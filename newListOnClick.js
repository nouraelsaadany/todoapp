document.getElementById('Plus').addEventListener('click', function() {
    // alert('Please type anything');

    var UserInput = document.getElementById('form-name').value;
    // console.log(UserInput);
    //alert('You have typed :' + " " + UserInput);

    var OuterDiv = document.createElement('div');
    OuterDiv.id = "outerDiv";
    OuterDiv.className = "flex-container2 row";

    var node = document.createTextNode(UserInput);
    OuterDiv.appendChild(node);

    var element = document.getElementById("wrap");
    element.appendChild(OuterDiv);
    //element.insertBefore(OuterDiv, element);
    console.log(OuterDiv.className)

});

// Creating new div