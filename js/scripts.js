let btn=document.getElementById("clicker");

let rstBtn=document.getElementById("reset");

let inc=document.getElementById("income");
let exp=document.getElementById("expense");

let res=document.getElementById("resultStatement");


btn.onclick=()=>{
    
    let savings=inc.value-exp.value;
    
    if(savings>0){
        res.innerHTML= `Hooray!!! You have saved Rs. ${savings}/- :)`;


    }
    else if(savings===0){
        res.innerHTML=`Oh! No you did not save money Savings: Rs. ${savings}/-`;
    }
    else{
        res.innerHTML=`Your bank balance is at risk!!!! Savings: Rs. ${savings}/- :(`;
    }
};

rstBtn.onclick=()=>{
    inc.value = "";
    exp.value = "";
    res.innerHTML="";   
}