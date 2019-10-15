str1 = "<table border= '1'>"
for(let i=9;i>0;--i){
    str1 += "<tr>"
    for(var j=9;j>0;--j){
        str1 += "<td>&nbsp;</td>"
    }
    str1 += "</tr>"
}
str1 += "</table>"
document.getElementById("table1").innerHTML = str1;
 
 str ='<table border="1">'
 for(let i=9;i>0;--i){
     str +='<tr>'
     for(var j=i;j>0;--j){
         str +='<td>&nbsp;</td>'
     }
     str +='</tr>'
 }
 
 str +='</table>'
 document.getElementById("table2").innerHTML =str
 
 str ='<table border="1">'
 for(let i=9;i>0;--i){
     str +='<tr>'
     for(var j=i;j>0;--j){
         str +='<td>'+j+'*'+i+'='+(j*i)+'</td>'
     }
     str +='</tr>'
 }
 
 str +='</table>'
 document.getElementById("table3").innerHTML =str