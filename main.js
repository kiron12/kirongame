let sign ="X";
let button = document.getElementById("btn");
let display = document.getElementById("player");



function fill(number){
    let box= document.getElementById("div" + number);
    console.log(box);

    if(box.innerText ==""){
        box.innerHTML =sign;
        check();
        
        display.innerHTML = "Now '" + sign + "' Turn";

    }

    if(winner()){
        alert("WIN");
    }

    else{
        if(drew()){
            alert("MATCH DREW");
        }
    }

}

function check(){
    if (sign=="X"){
        sign = "O"
        
    }
    else {
        sign = "X";
    }
}

function getedata(div){
    return document.getElementById(div).innerHTML;
    
}

function winner(){
    if(checkcondition('div1',"div2","div3")||checkcondition('div4',"div5","div6")||checkcondition('div7',"div8","div9")||checkcondition('div1',"div4","div7")||checkcondition('div2',"div5","div8")||checkcondition('div3',"div6","div9")||checkcondition('div3',"div5","div7")||checkcondition('div1',"div5","div9"))
    {
        return true;
    }

}




function checkcondition(ex1,ex2,ex3){
    if(getedata(ex1)!="" &&
    getedata(ex1)!="" &&
    getedata(ex1)!="" &&
    
    getedata(ex1)==getedata(ex2)&&
    getedata(ex2)==getedata(ex3)
    )
    {
        return true;
    }

}
function drew(){
    if (getedata("div1")!=""&&
    getedata("div2")!=""&&
    getedata("div3")!=""&&
    getedata("div4")!=""&&
    getedata("div5")!=""&&
    getedata("div6")!=""&&
    getedata("div7")!=""&&
    getedata("div8")!=""&&
    getedata("div9")!="")

    {
        return true;
    }
}
function reset(){
    for( var i=1; i<=9;i++){
        document.getElementById('div' + i).innerHTML="";
    }
}