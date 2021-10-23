//!BÀI 1:
//?WHILE:
/*document.getElementById("btnResultChanLe").onclick= function () {
var soChan= "";
var soLe= "";

var n1= 1;
while (n1 < 100){
    if (n1 %2 ==0){
        soChan += "" +n1;
    }else {
        soLe += "" +n1;
    }
    n1++;
}
console.log(soChan);
console.log(soLe);
document.getElementById("txtResultChan").innerHTML= "Số chẵn: " +soChan;
document.getElementById("txtResultLe").innerHTML= "Số lẻ: " +soLe;
}
*/
//?FOR:
document.getElementById("btnResultChanLe").onclick = function () {
  var soChan = "";
  var soLe = "";

  for (var i = 0; i < 100; i++) {
    if (i % 2 == 0) {
      soChan += "" + i;
    } else {
      soLe += "" + i;
    }
  }
  console.log(soChan);
  console.log(soLe);
  document.getElementById("txtResultChan").innerHTML = "Số chẵn: " + soChan;
  document.getElementById("txtResultLe").innerHTML = "Số lẻ: " + soLe;
};

//!BÀI 2:
//?WHILE:
/*document.getElementById("btnChiaHet3").onclick= function () {
    var soChiaHetCho3= "";
    var soKoChiaHetCho3= "";
    console.log(soChiaHetCho3, soKoChiaHetCho3);

    var n2= 0;
    while (n2 < 1000){
        if (n2 %3 ==0){
            soChiaHetCho3 += "" +n2;
        }else {
            soKoChiaHetCho3 += ""+n2;
        }
        n2++;
    }
    document.getElementById("txtChiaHet3").innerHTML= "Số chia hết cho 3 nhỏ hơn 1000: " + soChiaHetCho3;
}
*/
//?FOR:
document.getElementById("btnChiaHet3").onclick = function () {
  var soChiaHetCho3 = "";
  var soKoChiaHetCho3 = "";
  console.log(soChiaHetCho3, soKoChiaHetCho3);

  for (var i = 0; i < 1000; i++) {
    if (i % 3 == 0) {
      soChiaHetCho3 += "" + i;
    } else {
      soKoChiaHetCho3 += "" + i;
    }
  }
  document.getElementById("txtChiaHet3").innerHTML =
    "Số chia hết cho 3 nhỏ hơn 1000: " + soChiaHetCho3;
};

//!BÀI 3:
//?WHILE:
/*
document.getElementById("btnNguyenDuong").onclick= function () {
    var tong= "";
    console.log(tong);

    var n =0;
    while (n >0){
        if (tong > 10000){
            tong += ""+ n;
        }
        n++;
    }
    document.getElementById("txtNguyenDuong").innerHTML= "Số nguyên dương nhỏ nhất: "+ n;
}
*/
//?FOR:
/*
document.getElementById("btnNguyenDuong").onclick= function () {
    var tong= "";
    console.log(tong);

    for (var i=0; i>0; i++){
        if (tong >10000){
            tong += "" +i;
        }
    }
    document.getElementById("txtNguyenDuong").innerHTML= "Số nguyên dương nhỏ nhất: "+ n;
}
*/

//!BÀI 4:

document.getElementById("btnTong").onclick = function () {
    var x= document.getElementById("soX").value;
    var n= document.getElementById("soN").value;
    var sum= 0;
    console.log(x, n, sum);

    for (var i=0; i<=n; i++){
        sum += Math.pow(x, i);
    }
    document.getElementById("txtTong").innerHTML= "Tổng: "+sum;
};



//!BÀI 5:
document.getElementById("btnTinh").onclick= function () {
    var n= document.getElementById("soNgiaithua").value;
    var giaiThua= 0;
    console.log(n, giaiThua);

    for (var i=0; i <=n; i++){
        if (i==0){
            giaiThua = 1;
        } else {
            giaiThua = giaiThua * i;
        }
    }
    document.getElementById("txtTinh").innerHTML= "Giai thừa: "+ giaiThua;
}


//!BÀI 6:
document.getElementById("btnTaoThe").onclick= function (){
    var divContent= document.getElementsByTagName("div");
    console.log(divContent);

    for (var i=1; i<= divContent.length; i++){
        if (i%2 ==0){
            divContent[i].style.background= "red";
        }else {
            divContent[i].style.background= "blue";
        }
    }
}


//!BÀI 7:
function kiem_tra_soNguyenTo(){
    var n = +document.getElementById("tapSo").value;
    console.log(n);

    //!Kiểm tra là số nguyên tố hay không:
    if (n<2){
        document.getElementById("txtInSo").innerHTML= n + ": không phải là số nguyên tố"
    } else if (n ==2){
        document.getElementById("txtInSo").innerHTML= n + ": là số nguyên tố"
    } else if (n%2 ==0){
        document.getElementById("txtInSo").innerHTML= n + ": không phải là số nguyên tố"
    } else {
        //n là số nguyên tố thì trong khoảng từ 2 đến căn bậc hai cua n sẽ không tồn tại số mà n chia hết
        for (var i=3; i<= Math.sqrt(n); i++){
            if (n%i ==0){
                document.getElementById("txtInSo").innerHTML= n + ": không phải là số nguyên tố"
            }
        }
        //?WHILE:
        /*
        var i =3;
        while (i <= Math.sqrt(n)){
            if (n%i ==0){
                document.getElementById("txtInSo").innerHTML= n + ": không phải là số nguyên tố"
            }
            i++;
        }
        */
    }
    return n;
}

    //!In số nguyên tố:
document.getElementById("btnInSo").onclick= function (){
    var soNguyenTo= "";
    console.log(soNguyenTo);

    for (var i=1; i<= n; i++){
        if (kiem_tra_soNguyenTo(i)){
            soNguyenTo += i;
        }
    }
    document.getElementById("txtInSo").innerHTML= soNguyenTo;
}