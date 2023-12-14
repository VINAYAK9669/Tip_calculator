const billInput =document.querySelector(".bill-input");
// console.log(billInput);
const peopleInput=document.querySelector(".people-input");
// console.log(peopleInput);
const tipPerPerson=document.getElementById("tip-amount");
const totalPerPerson =document.getElementById("total-amount");
const tips=document.querySelectorAll(".tips");
const tipCustom= document.querySelector("#tip-custom")
// console.log(tipCustom);
const RestAll=document.querySelector(".reset");



billInput.addEventListener('input', billInputFun)
peopleInput.addEventListener('input', peopleInputFun)
tips.forEach(function(val)
{
    val.addEventListener("click", handleClick);
});

tipCustom.addEventListener('input', tipInputFun);


billInput.value="0.0";
peopleInput.value="1";
tipPerPerson.innerHTML= "$" +" "+ (0.0).toFixed(2);
totalPerPerson.innerHTML="$"+" "+ (0.0).toFixed(2);

let billValue=0.0;
let peopleValue=1;
let tipValue=0.15;


function billInputFun()
{
    billValue=parseFloat(billInput.value);
    // console.log(billValue);
    calculateTip();
}

function peopleInputFun()
{
    peopleValue=parseFloat(peopleInput.value);
    // console.log(peopleValue);
    calculateTip();
}

function  handleClick(event)
{
    tips.forEach(function(val)
    {
        val.classList.remove("active-tip");
        if(event.target.innerHTML == val.innerHTML)
        {
            val.classList.add("active-tip");
            tipValue=parseFloat(val.innerHTML)/100;
        }
    });
    // console.log(tipValue);
    calculateTip();
}

function tipInputFun()
{   console.log(tipCustom.value);
    tipValue=parseFloat((tipCustom.value))/100;
    tips.forEach(function(val)
    {
        val.classList.remove("active-tip");
    })
    calculateTip();
}


function calculateTip()
{
    if(peopleValue>=1)
    {
        let tipAmount=(billValue * tipValue);
        let total=(billValue + tipAmount)/peopleValue;

        tipPerPerson.innerHTML= "$" + tipAmount.toFixed(2);
        totalPerPerson.innerHTML="$"+ total.toFixed(2);
    }
}

RestAll.addEventListener('click', Reset);


function Reset()
{
    //console.log(RestAll);
    billInput.value="0.0";
    peopleInput.value="1";
    tipPerPerson.innerHTML= "$" +" "+ (0.0).toFixed(2);
    totalPerPerson.innerHTML="$"+" "+ (0.0).toFixed(2);

    tipPerPerson.innerHTML= "$" +" "+ (0.0).toFixed(2);
    totalPerPerson.innerHTML="$"+" "+ (0.0).toFixed(2);

}