var table_1 = new Array();
var table_2 = new Array();
var table_3 = new Array();
var table_4 = new Array();
var table_5 = new Array();
var table_6 = new Array();
var table_7 = new Array();
var table_8 = new Array();
var gid;

var arr = new Array();

function hideTable() {
    document.getElementById("tab1").style.visibility = "hidden";
}

function fun(id) {

    let btnclr = document.querySelector('#id1');
    // debugger;
    btnclr.addEventListener('click', () => btnclr.style.backgroundColor = 'red')

    //debugger;
    //style =  "color:green; font-size: 20px; font-weight: bold;"

    //var btnId = event.target.id;
    var getButtonValue = 'table_' + id//document.getElementById(btnId).getAttribute("array-name");
    //debugger;
    //  localStorage.getItem('table_' + id);


    var getTableID = document.getElementById("tab1");

    for (var i = getTableID.rows.length - 1; i > 0; i--) {

        getTableID.deleteRow(i);
    }

    var data = JSON.parse(localStorage.getItem(getButtonValue));

    // localStorage.setItem('table_' + id, JSON.stringify('table_'+id));

    // document.getElementById("tablerows").innerHTML = data.value;

    //   if(data != "null"){
    //      arr = data.filter(function(obj,index){
    //             console.log(obj)
    //             console.log("index",index)

    //             //console.log(data);

    //         });


    //    }
    //var datalen = data.length;

    // Data which will write in a file. 
    //let data =  JSON.parse(localStorage.getItem(getButtonValue));
    // document.getElementById("result1").innerHTML = odser;

    if (data != null) {
        for (let i = 1; i <= data.length; i++) {
            var row = getTableID.insertRow(i);
            var titem = row.insertCell(0);
            var tprice = row.insertCell(1);
            /////////////////////////////////////////
          //  var action = row.insertCell(2);

            titem.innerHTML = data[i - 1].iname;
            tprice.innerHTML = data[i - 1].iprice;
            //action.innerHTML = '<button onclick="dltrow('+index+')">Rm</button>';
        }
    }

    gid = id;
    Total();
}
function dltrow(index){
    var getTableID = document.getElementById("tab1");
    getTableID.deleteRow(index);

}
function ClearFields() {

    document.getElementById("iname").value = "";
    document.getElementById("iprice").value = "";
}

function Add1() {
    // var data = JSON.parse(localStorage.getItem('table_' + gid));

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
    //var cell3 = row.insertCell(2);

    row.style.height = "40px";

    cell1.innerHTML = iname;
    cell2.innerHTML = iprice;
    //cell3.innerHTML = '<button onclick="dltrow('+index+')">Rm</button>';
    // data = JSON.parse(localStorage.getItem('table_'+ gid));

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

