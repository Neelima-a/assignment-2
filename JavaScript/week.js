function is_weekend(date1){
    var date = new Date(date1)	;
     
    if(date.getDay() == 6 || date.getDay() == 0)
       {
        return "weekend";
        } 
        else{
        	return "weekday"
        }
}

console.log(is_weekend("10 sep 2017"));

