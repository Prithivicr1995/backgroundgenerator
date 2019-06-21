var s1 =document.getElementById("sub1");
var s2 = document.getElementById("sub2");
var s3 = document.getElementById("sub3");
var s4 = document.getElementById("sub4");
var s5 = document.getElementById("sub5");
var s6 = document.getElementById("sub6");
var i1 = document.getElementById("int1");
var i2 = document.getElementById("int2");
var i3 = document.getElementById("int3");
var i4 = document.getElementById("int4");
var i5 = document.getElementById("int5");
var i6 = document.getElementById("int6");
var totalMarks = document.getElementById("total");
var averageMarks = document.getElementById("avg");
var button   = document.getElementById("button")

var s11 = s1.value;
var i11 = i1.value;
button.addEventListener('click',function(){
    var total = s11+s2.value+s3.value+s4.value+s5.
    value+s6.value+i11+i2.value+i3.value+i4.value+i5.value+i6.value;
    var average = (total/600)*100;
    console.log("Your total mark is  "+total+ "and your total average is "+average);
});