//!BÀI 1:
//?WHILE:
/*document.getElementById("btnResultChanLe").onclick= function () {
var soChan= "";
var soLe= "";

var n1= 1;
while (n1 < 100){
    if (n1 %2 ==0){
        soChan += " " +n1;
    }else {
        soLe += " " +n1;
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
      soChan += " " + i; 
    } else {
      soLe += " " + i;
    }
  }
  console.log(soChan);
  console.log(soLe);
  document.getElementById("txtResultChan").innerHTML = "Số chẵn: " + soChan;
  document.getElementById("txtResultLe").innerHTML = "Số lẻ: " + soLe;
};

//!BÀI 2:
//?WHILE:
document.getElementById("btnChiaHet3").onclick= function () {
    var count= 0;
    console.log(count);

    var i=0;
    while (i< 1000){
        if (i %3 ==0){
           count++;
        }
        i++;
    }
    document.getElementById("txtChiaHet3").innerHTML= "Số chia hết cho 3 nhỏ hơn 1000: " + count;
}
//?FOR:
/*
document.getElementById("btnChiaHet3").onclick = function () {
  var count=0;
  console.log(count);

  for (var i = 0; i < 1000; i++) {
    if (i % 3 == 0) {
      count ++;
    }
  }
  document.getElementById("txtChiaHet3").innerHTML =
    "Số chia hết cho 3 nhỏ hơn 1000: " + count;
};*/

//!BÀI 3:
//?WHILE:
/*
document.getElementById("btnNguyenDuong").onclick= function () {
    var tong= "";
    console.log(tong);

    var n =0;
    while (n >0){
        if (tong <= 10000){
            tong += ""+ n;
        }
        n++;
    }
    document.getElementById("txtNguyenDuong").innerHTML= "Số nguyên dương nhỏ nhất: "+ n;
}
*/
//?FOR:
document.getElementById("btnNguyenDuong").onclick= function () {
    var tong = 0;
    var i;
    for (i=0; tong <= 10000; i++){
        tong += i;
    document.getElementById("txtNguyenDuong").innerHTML= "Số nguyên dương nhỏ nhất: "+ (i);
    }
    //document.getElementById("txtNguyenDuong").innerHTML= "Số nguyên dương nhỏ nhất: "+ (i-1);
}


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
}


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
    var content = document.querySelectorAll(".bai6 .content div"); // lấy tất cả thẻ div ở trong .bai6 .content

    // javascript bắt đầu mảng bằng index: 0
    // lặp qua tất cả thẻ div
    for (var i=0; i< content.length; i++){
        if (i%2 ==0){
            content[i].innerHTML = "Thẻ lẻ";
            content[i].style.background= "red";
        }else {
            content[i].innerHTML = "Thẻ chẵn";
            content[i].style.background= "blue";
        }
    }
}

//!Bài 7:
//!Kiểm tra là số nguyên tố hay ko:
function kiem_tra_soNguyenTo(n){
    if (n < 2) {
        return true;
    } else if (n ==2){
        return true;
    } else if (n%2 ==0){
        return false;
    } else {
        //n là số nguyên tố thì trong khoảng từ 2 đến căn bậc hai cua n sẽ không tồn tại số mà n chia hết => nếu n%i==0 thì n ko phải là snt
        for (var i=3; i <= Math.sqrt(n); i++){
            if (n%i ==0){
                return false;
            }
        }
        return true;
    }
}

//!In snt:
document.getElementById("btnInSo").onclick= function (){
    var n = +document.getElementById("tapSo").value;
    var soNguyenTo= "";
    console.log(n, soNguyenTo);

    for (var i=1; i <= n; i++){
        if (kiem_tra_soNguyenTo(i)){
            soNguyenTo += " "+ i;
        }
    }
    document.getElementById("txtInSo").innerHTML= soNguyenTo;
}