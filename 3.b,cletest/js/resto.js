var table_1 = new Array();
var table_2 = new Array();
var table_3 = new Array();
var table_4 = new Array();


function hideTable() {
    console.log("abc");
    document.getElementById("tab1").style.visibility = "hidden";
}

function fun(id) {
    console.log("Helloword", document.getElementById("tab1"));
   // document.getElementById("tab1").style.visibility = "visible";






    switch (id) {
        case 1:
           // console.log("Helloword", document.getElementById("tab1"));
           // document.getElementById("tab1").style.visibility = "visible";


            var bt = document.getElementById("bt");
            bt.addEventListener("click", Add1);
        
            var bill=[];
            bill =JSON.parse(localStorage.getItem('table_1'));
          //  var abc=bill;[0];
            
            document.getElementById("iName1").innerHTML=abc['iname'];
            document.getElementById("iPrice1").innerHTML=abc['iprice'];

               
            break;
        case 2:

            //var Table = document.getElementById("tab1");

            var bt = document.getElementById("bt");
            bt.addEventListener("click", Add2);
            //Table.deleteRow(1);






            break;
        case 3:
            // console.log("Helloword", document.getElementById("tab3"));
            // document.getElementById("tab3").style.visibility = "visible";
            //Add3(id);
            // table_3.push({
            //     iname: document.getElementById("iname").value,
            //     iprice: document.getElementById("iprice").value
            // });

            // localStorage.setItem('table_3', JSON.stringify(table_3));
            break;
        case 4:
            // console.log("Helloword", document.getElementById("tab4"));
            // document.getElementById("tab4").style.visibility = "visible";
            // Add4(id);
            // table_4.push({
            //     iname: document.getElementById("iname").value,
            //     iprice: document.getElementById("iprice").value
            // });

            // localStorage.setItem('table_4', JSON.stringify(table_4));
            break;
        default:
            alert("Enter valid data");
    }
}


function Add1() {


    var table = document.getElementById("tab1");
    var rowcount = table.rows.length-1;
    var row = table.insertRow(rowcount);
   
    iname = document.getElementById("iname").value,
        //     // console.log(iname);

        iprice = document.getElementById("iprice").value;
    if (iname == "") {
        return false;
    }
    console.log("iname");


    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    row.style.height = "40px";
    cell1.innerHTML = iname;
    cell2.innerHTML = iprice;

    //debugger;
    table_1.push({
        iname: document.getElementById("iname").value,
        iprice: document.getElementById("iprice").value
    });

    localStorage.setItem('table_1',JSON.stringify(table_1));

    ClearFields();
    //debugger;
    // t1store();
}


function ClearFields() {

    document.getElementById("iname").value = "";
    document.getElementById("iprice").value = "";
}


function Add2() {
    //debugger;
    var table = document.getElementById("tab1");
    var rowcount = table.rows.length;
    var row = table.insertRow(rowcount);
    iname = document.getElementById("iname").value,
        // console.log(iname);

        iprice = document.getElementById("iprice").value;
    if (iname == "") {
        return false;
    }
    console.log("iname");


    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    row.style.height = "40px";
    cell1.innerHTML = iname;
    cell2.innerHTML = iprice;



    table_2.push({
        iname: document.getElementById("iname").value,
        iprice: document.getElementById("iprice").value
    });

    localStorage.setItem('table_2', JSON.stringify(table_2));
    // t1store();
}


function Add3() {

    var table = document.getElementById("tab1");
    var rowcount = table.rows.length;
    var row = table.insertRow(rowcount);
    iname = document.getElementById("iname").value,
        // console.log(iname);

        iprice = document.getElementById("iprice").value;
    if (iname == "") {
        return false;
    }
    console.log("iname");


    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    row.style.height = "40px";
    cell1.innerHTML = iname;
    cell2.innerHTML = iprice;

    // t1store();
}

function Add4(tableName) {

    var table = document.getElementById(tableName);
    var rowcount = table.rows.length;
    var row = table.insertRow(rowcount);
    iname = document.getElementById("iname").value,
        // console.log(iname);

        iprice = document.getElementById("iprice").value;
    if (iname == "") {
        return false;
    }
    console.log("iname");


    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    row.style.height = "40px";
    cell1.innerHTML = iname;
    cell2.innerHTML = iprice;

    // t1store();
}
// function t1store() {

// }

function Total() {
    //  debugger;
    var table1 = document.getElementById("tab1");
    var sum = 0;

    for (var i = 1; i < table1.rows.length; i++) {
        // console.log(i)
        sum = sum + parseInt(table1.rows[i].cells[1].innerHTML);
    }
    document.getElementById("total").innerHTML = sum + "/-";

    localStorage.removeItem(table_1);

}



