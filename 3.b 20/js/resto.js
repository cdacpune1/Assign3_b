var table_1 = new Array();
var table_2 = new Array();
var table_3 = new Array();
var table_4 = new Array();
var table_5 = new Array();
var table_6 = new Array();
var table_7 = new Array();
var table_8 = new Array();

var gid;

function hideTable() {
    document.getElementById("tab1").style.visibility = "hidden";
}


function fun(event, id) {
    var btnId = event.target.id;
    var getButtonValue = document.getElementById(btnId).getAttribute("array-name");

    var getTableID = document.getElementById("tab1");

    for (var i = getTableID.rows.length - 1; i > 0; i--) {
        getTableID.deleteRow(i);
    }

    var data = JSON.parse(localStorage.getItem(getButtonValue));

   

    if (data != null){
        for (let i = 1; i <= data.length; i++) {
            var row = getTableID.insertRow(i);
            var titem = row.insertCell(0);
            var tprice = row.insertCell(1);
    
    
            titem.innerHTML = data[i-1].iname;
            tprice.innerHTML = data[i-1].iprice;
    
        }
    }
    

    //table_1.forEach(x => console.table(x));

    gid = id;

    //for(let i = 0; i < )


    //console.log("Helloword", document.getElementById("tab1"));
    //document.getElementById("tab1").style.visibility = "visible";



    //   switch(gid){
    //         case 1:
    //             var str = localStorage.getItem("table_1");
    //             if (str != null) {
    //                         table_1 = JSON.parse(str);
    //                      }
    //           var order = document.getElementById("tab1");
    //            for (i = 0; i < table_1.length; i++) {


    //                     var tableLength = order.tableLength;
    //                     var row = order.insertRow(tableLength);

    //                              var titem = row.insertCell(0);
    //                              var tprice = row.insertCell(1);


    //                              titem.innerHTML = table_1[i].iname;
    //                              tprice.innerHTML = table_1[i].iprice;

    //                      }
    //                 break;
    //         // case 2: 
    //         // var str = localStorage.getItem("table_2");
    //         //     if (str != null) {
    //         //                 table_2 = JSON.parse(str);
    //         //              }
    //         //    var order = document.getElementById("tab1");
    //         //    for (i = 0; i < table_2.length; i++) {


    //         //             var tableLength = order.tableLength;
    //         //             var row = order.insertRow(tableLength);

    //         //                      var titem = row.insertCell(0);
    //         //                      var tprice = row.insertCell(1);


    //         //                      titem.innerHTML = table_2[i].iname;
    //         //                      tprice.innerHTML = table_2[i].iprice;

    //         //              }
    //         //         break;

    //   default :alert("abc"); 
    //     }  

}


function ClearFields() {

    document.getElementById("iname").value = "";
    document.getElementById("iprice").value = "";
}

/*function Add(){
    var btnId = event.target.id;
    var getButtonValue = document.getElementById(btnId).getAttribute("array-name");

    var iname= document.getElementById("iname").value,
    var iprice= document.getElementById("iprice").value

    localStorage.setItem()
}*/

function Add1() {

    var table = document.getElementById("tab1");
    var rowcount = table.rows.length;
    var row = table.insertRow(rowcount);
    iname = document.getElementById("iname").value,

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


    switch (gid) {
        case 1:
            table_1.push({
                iname: document.getElementById("iname").value,
                iprice: document.getElementById("iprice").value
            });

            //console.table(table_1);

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

function Total() {

    var table1 = document.getElementById("tab1");
    var sum = 0;

    for (var i = 1; i < table1.rows.length; i++) {
        sum = sum + parseInt(table1.rows[i].cells[1].innerHTML);
    }
    document.getElementById("total").innerHTML = sum + "/-";

    //localStorage.removeItem("table_" + gid);

}


