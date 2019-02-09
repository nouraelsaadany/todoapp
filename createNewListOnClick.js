document.getElementById('createNewList').addEventListener('click', function() {

    var UserInput;
    var uniqid = Date.now();
    var idd = Date.now() + 1;
    var promp = prompt("Please Enter List Name:", "List Name");
    if (promp == null || promp == "") {
        UserInput = "User cancelled the prompt.";
    } else {


        //THE VERY OUTER DIV
        var OuterDiv = document.createElement('div');
        OuterDiv.id = uniqid;
        // Div for the left side
        var LeftDiv = document.createElement('div');
        // div for the left side for X
        var LeftDivX = document.createElement('div');
        // div for the listed items
        var ListedItemsDiv = document.createElement('div');
        //div for deleting
        var DeletingListButtonDiv = document.createElement('div');
        //  THE OVERALL DIV
        var OverAllDiv = document.getElementById("wrap");

        // sub divs
        var LeftSubDiv = document.createElement('div');
        var LeftDivX = document.createElement('div');
        var LeftDivBtnX = document.createElement('div');
        // Setting Classes to div

        OuterDiv.className = "flex-container2 row";
        LeftDiv.className = "height-width50 Right-List-backGround column-2";
        LeftDivX.className = "Right-List-backGround  column-1";
        ListedItemsDiv.className = "EnterNewTODO column-8";
        DeletingListButtonDiv.className = "EnterNewTODO column-1";

        // check box
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";


        //Style
        LeftSubDiv.style = "justify-content: space-between";

        //For Creating new List this is all what we need 
        var LeftSubDivText = document.createElement('p');
        LeftSubDivText.style = "color: white; justify-items: center";
        LeftDivBtnX.className = "theXPosition";
        var LeftXBtn = document.createElement("button");
        LeftXBtn.id = idd;
        LeftXBtn.style = "background: rgb(151, 80, 92)";
        LeftXBtn.appendChild(document.createTextNode("X"));

        //Adding new divs to the whole outer div
        OverAllDiv.append(OuterDiv);


        // appending/ creating the whole row with the 4 columns
        OuterDiv.append(LeftDiv);
        OuterDiv.append(LeftDivX);
        OuterDiv.append(ListedItemsDiv);
        OuterDiv.append(DeletingListButtonDiv);

        // left div creation 
        LeftDiv.append(LeftSubDiv);
        LeftSubDiv.append(LeftSubDivText);
        LeftSubDivText.appendChild(document.createTextNode(promp));
        LeftDivX.append(LeftDivBtnX);
        LeftDivBtnX.append(LeftXBtn);


        // right div/ listed items //

        // the user input inserted to the div
        ListedItemsDiv.append(checkbox);

        ListedItemsDiv.appendChild(document.createTextNode(UserInput));



        // the deleting button 
        var DeletingListButtonClass = document.createElement("div");
        DeletingListButtonClass.className = "theXPosition";
        var DeletingListButton = document.createElement("button");
        DeletingListButton.style = "background: rgb(221, 180, 187)"

        DeletingListButtonDiv.append(DeletingListButtonClass);
        DeletingListButtonClass.append(DeletingListButton);

        DeletingListButton.append(document.createTextNode("   X   "));


        // deleting lists

        LeftXBtn.addEventListener('click',
            function change() {
                if (OuterDiv.style.display = "block") {
                    OuterDiv.style.display = "none";

                }

            })


        // deleting to do
        DeletingListButton.addEventListener('click',
            function change() {
                if (OuterDiv.style.display = "block") {
                    OuterDiv.style.display = "none";

                }

            })



    }


});