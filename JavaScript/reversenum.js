// var  a=32243;

// function number(x) {
// 	var rem;
// 	var rev=0;
// 	var x;
// 	while( x > 0){
// 			rem = x % 10;
// 			rev = rev * 10 + rem;
// 			x /10;
// 	}
// 	return rev;
// }
// console.log(number(24356));

function number(value){
	var a="";
	var b= value.toString();
	for( var i=b.length-1;i>=0;i--){
		a +=b[i];
		c=parseInt(a);
	}
	return c;
}
console.log(number(132576));