function unique_char(str1)
{
 var unique="";
 for (var x=0;x < str1.length;x++)
 {

 if(unique.indexOf(str1.charAt(x))==-1)
  {
  unique += str1[x];  
  
   }
  }
  return unique;  
}  
console.log(unique_char("thebrowndogshoutingonroad"));
