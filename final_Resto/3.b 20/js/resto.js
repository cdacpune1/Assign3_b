var table_1 = new Array();
var table_2 = new Array();
var table_3 = new Array();
var table_4 = new Array();
var table_5 = new Array();
var table_6 = new Array();
var table_7 = new Array();
var table_8 = new Array();
var gid;
var btnSelected;

var arr = new Array();

function hideTable() {
    document.getElementById("tab1").style.visibility = "hidden";
}

function fun(event,id) {
    //console.log(document.getElementsByClassName("button1"));
    var btnColl = document.getElementsByClassName("button1");//.style.backgroundColor("green");

    for (let index = 0; index < btnColl.length; index++) {
        const element = btnColl[index];
        //document.getElementById(element.id).style.backgroundColor("green");
        element.style.backgroundColor = "green";
    }
    document.getElementById(event.target.id).style.backgroundColor = "red";

    let btnclr = document.querySelector('#id1');

    var getButtonValue = 'table_' + id;

    var getTableID = document.getElementById("tab1");

    for (var i = getTableID.rows.length - 1; i > 0; i--) {

        getTableID.deleteRow(i);
    }

    var data = JSON.parse(localStorage.getItem(getButtonValue));


    if (data != null) {
        for (let i = 1; i <= data.length; i++) {
            var row = getTableID.insertRow(i);
            var titem = row.insertCell(0);
            var tprice = row.insertCell(1);
   
            /////////////////////////////////////////
            var action = row.insertCell(2);

            titem.innerHTML = data[i - 1].iname;
            tprice.innerHTML = data[i - 1].iprice;
            //debugger;
            action.innerHTML = '<button onclick="dltrow('+i+',\''+getButtonValue+'\')">Rm</button>';
        }
    }

    gid = id;
    Total();
}
function dltrow(index,table_name){
    //debugger;
    var getTableID = document.getElementById("tab1");
    getTableID.deleteRow(index);
    
    console.log(table_name.toString());
    
    var data = JSON.parse(localStorage.getItem(table_name));

    console.log(typeof(data));
    console.log(data);
    //let i = index-1;

    data.splice(index-1,1);

    localStorage.setItem(table_name,JSON.stringify(data));

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

    switch (gid) {
        case 1:
            if (JSON.parse(localStorage.getItem('table_1')) !== null){
                table_1 = JSON.parse(localStorage.getItem('table_1'));
            }

            table_1.push({
                iname: document.getElementById("iname").value,
                iprice: document.getElementById("iprice").value
            });


            localStorage.setItem('table_1', JSON.stringify(table_1));
            ClearFields();

            break;
        case 2:
            if (JSON.parse(localStorage.getItem('table_2')) !== null){
                table_2 = JSON.parse(localStorage.getItem('table_2'));
            }

            table_2.push({
                iname: document.getElementById("iname").value,
                iprice: document.getElementById("iprice").value
            });

            localStorage.setItem('table_2', JSON.stringify(table_2));
            ClearFields();

            break;
        case 3:

            if (JSON.parse(localStorage.getItem('table_3')) !== null){
                table_3 = JSON.parse(localStorage.getItem('table_3'));
            }
            table_3.push({
                iname: document.getElementById("iname").value,
                iprice: document.getElementById("iprice").value
            });

            localStorage.setItem('table_3', JSON.stringify(table_3));
            ClearFields();


            break;
        case 4:
            if (JSON.parse(localStorage.getItem('table_4')) !== null){
                table_4 = JSON.parse(localStorage.getItem('table_4'));
            }

            table_4.push({
                iname: document.getElementById("iname").value,
                iprice: document.getElementById("iprice").value
            });

            localStorage.setItem('table_4', JSON.stringify(table_4));
            ClearFields();


            break;

        case 5:
            if (JSON.parse(localStorage.getItem('table_5')) !== null){
                table_5 = JSON.parse(localStorage.getItem('table_5'));
            }
            table_5.push({
                iname: document.getElementById("iname").value,
                iprice: document.getElementById("iprice").value
            });

            localStorage.setItem('table_5', JSON.stringify(table_5));
            ClearFields();


            break;
        case 6:
            if (JSON.parse(localStorage.getItem('table_6')) !== null){
                table_6 = JSON.parse(localStorage.getItem('table_6'));
            }
            table_6.push({
                iname: document.getElementById("iname").value,
                iprice: document.getElementById("iprice").value
            });

            localStorage.setItem('table_6', JSON.stringify(table_6));
            ClearFields();


            break;
        case 7:
            if (JSON.parse(localStorage.getItem('table_7')) !== null){
                table_7 = JSON.parse(localStorage.getItem('table_7'));
            }
            table_7.push({
                iname: document.getElementById("iname").value,
                iprice: document.getElementById("iprice").value
            });

            localStorage.setItem('table_7', JSON.stringify(table_7));
            ClearFields();


            break;
        case 8:

            if (JSON.parse(localStorage.getItem('table_8')) !== null){
                table_8 = JSON.parse(localStorage.getItem('table_8'));
            }
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

    // localStorage.removeItem('table_' + );


}
