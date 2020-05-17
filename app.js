var queen = {
    direction:"s",
    position : {
          x:4,
          y:0
    }
};


function changedDirection(direction,steps){
    switch(direction){
        case  "s":
            //  queen.position.x=queen.position.x+steps;
            temp=queen.position.x+steps;
            if(cb1(temp))
            {
              console.log(temp,queen.position.y);
            }
            else{
                console.log("outof boundary");
                
            }
            break;
        case "n":
            //queen.position.x=queen.position.x-steps;
            temp=queen.position.x-steps;
            if(cb1(temp)){
            console.log(temp,queen.position.y);
            }
            else{
                console.log("outof boundary");
            }
            break;
        case "e":
            temp=queen.position.y+steps;
            if(cb1(temp)){
                console.log(temp,queen.position.x);
            }
            else{
                console.log("outof boundary");
            }
            break;
        case "w":
            temp=queen.position.y-steps;
            if(cb1(temp)){
                console.log(temp,queen.position.x);
            }
            else{
                console.log("outof boundary");
            }
            break;
        case"ne":
            temp1=queen.position.x-steps;
            temp2=queen.position.y+steps;
            if(cb2(temp1,temp2)){
                console.log(temp1,temp2);
            }
            else{
                console.log("outof boundary");
            }
            break;
        
        case "nw":
            temp1=queen.position.x-steps;
            temp2=queen.position.y-steps;
            if(cb2(temp1,temp2)){
                console.log(temp1,temp2);
            }
            else{
                console.log("outof boundary");
            }
            break;
        
        case "se":
            temp1=queen.position.x+steps;
            temp2=queen.position.y+steps;
            if(cb2(temp1,temp2)){
                console.log(temp1,temp2);
            }
            else{
                console.log("outof boundary");
            }
            break;
        
        case "sw":
            temp1=queen.position.x+steps;
            temp2=queen.position.y-steps;
            if(cb2(temp1,temp2)){
                console.log(temp1,temp2);
            }
            else{
                console.log("outof boundary");
            }
            break;
        default:
            direction:"s"
    }
}
changedDirection("se",2);
function cb1(temp) {
    if (temp== 0 || temp == 1 || temp== 2 || temp == 3 || temp == 4 || temp == 5 || temp == 6 || temp == 7)
        return true;
    else
        return false;
    
}
function cb2(temp1,temp2) {
    if ((temp1 == 0 || temp1 == 1 || temp1 == 2 || temp1 == 3 || temp1 == 4 || temp1 == 5 || temp1 == 6 || temp1 == 7) &&
        (temp2 == 0 || temp2 == 1 || temp2 == 2 || temp2 == 3 || temp2== 4 || temp2 == 5 || temp2 == 6 || temp2 == 7))
        return true;
    else
        return false;
}