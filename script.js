let bill = document.getElementById("bill");
let people = document.getElementById("people");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");
const fifth = document.getElementById("fifth");
let custom = document.getElementById("custom");
let tip = 1;
let cant = document.getElementById("cant");
const re = document.getElementById("re");

first.addEventListener("click", () => {
    
    if (people.value > 0){
        document.getElementById("one").innerHTML = `$${(bill.value * 0.05).toFixed(2)}`;
        document.getElementById("two").innerHTML = `$${(Number(bill.value * 0.05) * people.value).toFixed(2)}`
        people.style.border = "none";
        cant.style.display = "none";
    }else {
        people.style.border = "2px solid red";
        cant.style.display = "block";
    };
    }
)
second.addEventListener("click", () => {
    
    if (people.value > 0){
        document.getElementById("one").innerHTML = `$${(bill.value * 0.1).toFixed(2)}`;
        document.getElementById("two").innerHTML = `$${(Number(bill.value * 0.1) * people.value).toFixed(2)}`
        people.style.border = "none";
        cant.style.display = "none";
    }else {
        people.style.border = "2px solid red";
        cant.style.display = "block";
    };
    }
)
third.addEventListener("click", () => {
    
    if (people.value > 0){
        document.getElementById("one").innerHTML = `$${(bill.value * 0.15).toFixed(2)}`;
        document.getElementById("two").innerHTML = `$${(Number(bill.value * 0.15) * people.value).toFixed(2)}`
        people.style.border = "none";
        cant.style.display = "none";
    }else {
        people.style.border = "2px solid red";
        cant.style.display = "block";
    };
    }
)
fourth.addEventListener("click", () => {
    
    if (people.value > 0){
        document.getElementById("one").innerHTML = `$${(bill.value * 0.25).toFixed(2)}`;
        document.getElementById("two").innerHTML = `$${(Number(bill.value * 0.25) * people.value).toFixed(2)}`
        people.style.border = "none";
        cant.style.display = "none";
    }else {
        people.style.border = "2px solid red";
        cant.style.display = "block";
    };
    }
)
fifth.addEventListener("click", () => {
    
    if (people.value > 0){
        document.getElementById("one").innerHTML = `$${(bill.value * 0.5).toFixed(2)}`;
        document.getElementById("two").innerHTML = `$${(Number(bill.value * 0.5) * people.value).toFixed(2)}`
        people.style.border = "none";
        cant.style.display = "none";
    }else {
        people.style.border = "2px solid red";
        cant.style.display = "block";
    };
    }
)
custom.addEventListener("click", () => {
    
    if (people.value > 0){
        document.getElementById("one").innerHTML = `$${(bill.value * custom.value/100).toFixed(2)}`;
        document.getElementById("two").innerHTML = `$${(Number(bill.value * custom.value/100) * people.value).toFixed(2)}`
        people.style.border = "none";
        cant.style.display = "none";
    }else {
        people.style.border = "2px solid red";
        cant.style.display = "block";
    };
    }
)

re.addEventListener("click", ()=>{
    bill.value = 0
    people.value = 0
    custom.value = 0
    document.getElementById("one").innerHTML = "$0.00"
    document.getElementById("two").innerHTML = "$0.00"

} )