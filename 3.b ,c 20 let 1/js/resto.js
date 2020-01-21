var table_1 = new Array();
var table_2 = new Array();
var table_3 = new Array();
var table_4 = new Array();
var table_5 = new Array();
var table_6 = new Array();
var table_7 = new Array();
var table_8 = new Array();
var gid;


// const fs = require('fs') ;

// // Write data in 'Output.txt' . 
//     fs.writeFile('Output.txt', data, (err) => { 
      
//     // In case of a error throw err. 
//     if (err) throw err; 
// }) 





function hideTable() {
    document.getElementById("tab1").style.visibility = "hidden";
}

function fun(id) {
    //var btnId = event.target.id;
    var getButtonValue = 'table_' + id//document.getElementById(btnId).getAttribute("array-name");

    var getTableID = document.getElementById("tab1");

    for (var i = getTableID.rows.length - 1; i > 0; i--) {
        getTableID.deleteRow(i);
    }

    var data = JSON.parse(localStorage.getItem(getButtonValue));
  

   
  
// Data which will write in a file. 
//let data =  JSON.parse(localStorage.getItem(getButtonValue));


    if (data != null) {
        for (let i = 1; i <= data.length; i++) {
            var row = getTableID.insertRow(i);
            var titem = row.insertCell(0);
            var tprice = row.insertCell(1);


            titem.innerHTML = data[i - 1].iname;
            tprice.innerHTML = data[i - 1].iprice;
    
        }
    }

    
     gid = id;


}


function ClearFields() {

    document.getElementById("iname").value = "";
    document.getElementById("iprice").value = "";
}

function Add1() {

    var table = document.getElementById("tab1");
    var rowcount = table.rows.length;
    var row = table.insertRow(rowcount);
    iname = document.getElementById("iname").value,

        iprice = document.getElementById("iprice").value;
    if (iname == "") {
        return false;
    }
    

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    row.style.height = "40px";

    cell1.innerHTML = iname;
    cell2.innerHTML = iprice;

//newtab(gid);
    switch (gid) {
        case 1:
            table_1.push({
                iname: document.getElementById("iname").value,
                iprice: document.getElementById("iprice").value
            });


            localStorage.setItem('table_1', JSON.stringify(table_1));
            ClearFields();

            break;
        case 2:
            table_2.push({
                iname: document.getElementById("iname").value,
                iprice: document.getElementById("iprice").value
            });

            localStorage.setItem('table_2', JSON.stringify(table_2));
            ClearFields();

            break;
        case 3:
            table_3.push({
                iname: document.getElementById("iname").value,
                iprice: document.getElementById("iprice").value
            });

            localStorage.setItem('table_3', JSON.stringify(table_3));
            ClearFields();


            break;
        case 4:
            table_4.push({
                iname: document.getElementById("iname").value,
                iprice: document.getElementById("iprice").value
            });

            localStorage.setItem('table_4', JSON.stringify(table_4));
            ClearFields();


            break;

        case 5:
            table_5.push({
                iname: document.getElementById("iname").value,
                iprice: document.getElementById("iprice").value
            });

            localStorage.setItem('table_5', JSON.stringify(table_5));
            ClearFields();


            break;
        case 6:
            table_6.push({
                iname: document.getElementById("iname").value,
                iprice: document.getElementById("iprice").value
            });

            localStorage.setItem('table_6', JSON.stringify(table_6));
            ClearFields();


            break;
        case 7:
            table_7.push({
                iname: document.getElementById("iname").value,
                iprice: document.getElementById("iprice").value
            });

            localStorage.setItem('table_7', JSON.stringify(table_7));
            ClearFields();


            break;
        case 8:
            table_8.push({
                iname: document.getElementById("iname").value,
                iprice: document.getElementById("iprice").value
            });

            localStorage.setItem('table_8', JSON.stringify(table_8));
            ClearFields();


            break;


        default:
            alert("default case");
            break;
    }
}

// function newtab(gid){
// var obj = 'table_' + gid;

//     obj.push({
//                     iname: document.getElementById("iname").value,
//                      iprice: document.getElementById("iprice").value
//                  });
    
                 
//              localStorage.setItem('table_' + gid, JSON.stringify(obj));
//              ClearFields();

// }






function Total() {

    var table1 = document.getElementById("tab1");
    var sum = 0;

    for (var i = 1; i < table1.rows.length; i++) {
        sum = sum + parseInt(table1.rows[i].cells[1].innerHTML);
    }
    document.getElementById("total").innerHTML = sum + "/-";

   // localStorage.removeItem('table_' + );


}

