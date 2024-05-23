const countvalue=document.querySelector('#counter');
const increment=()=>
{
    //get the valu efrom UI 
    // inner text give value as string so to convert into integer we used parseInt
    let value= parseInt(countvalue.innerText);
    //updating the value
    value=value+1;
    //set the value onto UI 
    countvalue.innerText=value;
};
const decrement=()=>
{
    //get the valu efrom UI 
    // inner text give value as string so to convert into integer we used parseInt
    let value= parseInt(countvalue.innerText);
    //updating the value
    value=value-1;
    //set the value onto UI 
    countvalue.innerText=value;
};