var arr = new Array();



function fun() {
    console.log("Helloword", document.getElementById("tab1"));
    document.getElementById("tab1").style.visibility = "visible";
}

function hideTable() {
    console.log("abc");
    document.getElementById("tab1").style.visibility = "hidden";
}

function Add() {

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



    t1store();
}


function t1store() {

    table_1.push({
        iname: document.getElementById("iname").value,
        iprice: document.getElementById("iprice").value
    });

    localStorage.setItem('table_1', JSON.stringify(table_1));
}

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






