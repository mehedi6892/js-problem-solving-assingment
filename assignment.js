//Convert Feet To Mile
function feetToMile(feet){  

      let mile = (feet/5280).toFixed(5);
      if(feet < 0 || feet == 0){
          console.log("not a valid number"); 
      }
      else{
        return mile;
      }     
}
let result = feetToMile(10000)
console.log(result);



//WoodCalculator output total woodNumber
function woodCalculator(chair,table,bed){
    var chair = chair * 1;
    var table = table * 3;
    var bed = bed * 5;
    var sumOfWood = (chair + table + bed);
    return sumOfWood;
}
var totalWood = woodCalculator(12,6,3);
console.log(totalWood);



//BrickCalculator output total brickNumber
function brickCalculator(floor){  

     let numberOfBrick ;

    for(i = 1; i<=floor; i++){

        if (floor>0 && floor<=10){
            numberOfBrick = floor*15*1000; 
        }      
        else if(floor>10 && floor<=20){
            numberOfBrick = ((floor-10)*12*1000) + ((floor-(floor-10))*15*1000);

        }
        else if  (floor>20){
            numberOfBrick = ((floor-20)*10*1000) + ((floor-(floor-10))*12*1000) + ((floor-(floor-10))*15*1000);
            
        }         
        else {            
            numberOfBrick ="Invalid Floor Number";          
        }
     }
     return numberOfBrick;           
 }
let totalNumberOfBrick = brickCalculator(12);
console.log(totalNumberOfBrick);



//tinyFriend output small name of friend
function tinyFriend(friendArray){

    let shortLength = Infinity;
    let  shortestName = "";

   if(friendArray.length > 0){
        for( let i=0; i<friendArray.length; i++){
            if( typeof friendArray[i]=== 'string' && friendArray[i].length < shortLength){
                shortestName =friendArray[i];
                shortLength = friendArray[i].length;
            }
       }   
   }
   return shortestName;
} 
let shortestFriendName = tinyFriend(['nishat', 'mehedi', 'raka', 'santo']);
console.log(shortestFriendName);
   


