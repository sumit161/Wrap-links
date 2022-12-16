cl=console.log;
//html file deta get js file using id & request
request=document.getElementById("info");

cl(request.innerHTML)//what is deta we show >>request.innerHTML is string name

//avoid empty space use trim method
let text=request.innerHTML.trim();
cl(text);
//we convert string to Array by using split method>>text is a new string method

let array=text.split(" ");//space>> result comes one word >>then search any word
cl(array);

let result=" ";
for(let i=0;i<array.length;i++){
cl(array[i])
if(array[i].indexOf('http')>-1){
	result+=`<a href="${array[i]}" target="_blank">${array[i]}</a> `
}else{
	result+=array[i]+" ";
}

}
//includes method
// for(let i=0;i<array.length;i++){
// cl(array[i])
// if(array[i].includes('http')){
	// result+=`<a href="${array[i]}" target="_blank">${array[i]}</a> `
// }else{
	// result+=array[i]+" ";
// }

// }

request.innerHTML=result


request2=document.getElementById("info1");
cl(request2.innerHTML);
newstring=request2.innerHTML.trim();
cl(newstring);
newarray=newstring.split(" ");
cl(newarray);

//for indexOf
result3="";
for(i=0;i<newarray.length;i++){
	if(newarray[i].indexOf('www')>-1){
		result3+=`<a href="${newarray[i]} target=_blank">${newarray[i]+"   "}</a>`
	}else{
		result3+=newarray[i]+" "
	}
};
request2.innerHTML=result3

//sports;

let request4=document.getElementById("info2");
cl(request4.innerHTML);

let str=request4.innerHTML.trim();
cl(str);

arr=str.split(" ");
cl(arr)

result5=" ";

for(i=0;i<arr.length;i++){
	if(arr[i].indexOf('www')>-1){
		result5+=`<a href="${arr[i]} target=_blank">${arr[i]}</a>`
	}else{
		result5+=arr[i]+" "//space important
	}
};
request4.innerHTML=result5;

//includes
request5=document.getElementById("info3");
cl(request5.innerHTML)
str2=request5.innerHTML.trim();
cl(str2)
arr2=str2.split(" ");
cl(arr2);

result6=" ";

for(i=0;i<arr2.length;i++){
	if(arr2[i].includes('com')){
		result6+=`<a href="${arr2[i]} target=_blank">${arr2[i]}</a>`
	}else{
		result6+=arr2[i]+" ";
	}
}


request5.innerHTML=result6;







