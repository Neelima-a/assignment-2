function longest_Country_Name(country){
	var max="";
for(i=0;i<country.length;i++){
	if(country[i].length>max.length){
		max=country[i];
	}
}
return max;
}
var country=longest_Country_Name(["Australia", "Germany", "United States of America"]);
console.log(country);