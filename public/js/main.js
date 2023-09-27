 document.writeln("bai 11.1<br>")
 var  a=1;
 var sum=0;
 while(a<=100){
 sum=sum+a;
 a++;
 }
 document.writeln("tong cua 1 den 100 la :"+sum+"<br>")

 document.writeln("bai 11.2<br>");
 var  n=parseFloat(prompt("Nhap vao mot so tu nhien n: "));
 var b=0;
 var tong=0;
 while(b<n){
     if(b%3==0)
      tong=tong+b;
   b++;
 }
 document.writeln("tong cua cac so be hon n va chia het cho 3  la :"+tong+"<br>");


 document.writeln(" bài 11.3 in ra 100 số Fibonacci đầu tiên:<br>");

 var N = 100; // Số lượng số Fibonacci cần in
 var a = 0; //   thỏ thứ nhất
 var b = 1; // thỏ thứ hai
 var count = 0; // Biến đếm

 while (count < N) {
   document.writeln(a + " "); // In số thỏ hiện tại
   var next = a + b; 
   a = b; 
   b = next; 
   count++; 
 }

var m = parseInt(prompt("Nhập một số nguyên:"));
// Lưu giá trị ban đầu của m
var originalNumber = m;

// Khởi tạo một biến để lưu số đảo ngược của m
var reversedNumber = 0;

// Sử dụng vòng lặp while để đảo ngược số
while (m > 0) {
  var digit = m % 10; // Lấy chữ số cuối cùng
  reversedNumber = reversedNumber * 10 + digit; // Đảo ngược số
  m = Math.floor(m / 10); // Loại bỏ chữ số cuối cùng
}

// So sánh số ban đầu và số đảo ngược để kiểm tra xem có phải là số palindromic hay không
if (originalNumber === reversedNumber) {
  document.writeln(originalNumber + " là số palindromic.");
} else {
  document.writeln(originalNumber + " không phải là số palindromic.");
}




document.writeln("Các số từ 100 đến 999 có tổng các chữ số chia hết cho 3:<br>");
var so = 100;
while (so <= 999) {
  var tong =0;
  var sotamthoi = so;

  // Tính tổng các chữ số của số hiện tại
  while (sotamthoi > 0) {
    tong += sotamthoi % 10;//nếu sotamthoi là 263, thì sotamthoi % 10 sẽ là 3, bởi vì 263 chia cho 10 có phần dư là 3.
    sotamthoi = Math.floor(sotamthoi / 10);// lam tron (vd 26.3=26)
  }

  // Kiểm tra xem tổng có chia hết cho 3 không
  if (tong % 3 === 0) {
    document.writeln(so + "<br>");
  }

  so++;
}

