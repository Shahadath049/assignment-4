//Problem-1(Radian to Degree Conversion)
 
function radianToDegree( radian){
    if( typeof radian !== 'number'){
      return 'Please provide a valid number';
    }
    const degreeData = radian * (180/Math.PI);
    const degree = parseFloat(degreeData.toFixed(2));
    return degree;
}
const radianValue = 3.1416;
const degreeValue = radianToDegree( radianValue);
console.log(degreeValue);

//--------------------------------------------------------------------------------------------------------------------------------------


//Problem-2(File type....)


 function isJavaScriptFile( file){
   if(typeof file !== "string"){
    return 'Please provide recomanded data';
   } 
  
   else if ( file.endsWith('.js') ){
    return true;
   }
   else{
    return false;
   }
 }
 const fileName = 'ajy.js';
 const documentType = isJavaScriptFile(fileName);
 console.log(documentType);


//---------------------------------------------------------------------------------------------------------------------------------

//Problem-3(Oil Price in Bangladesh)

const diselPrice = 114;
const petrolPrice = 130;
const octanePrice = 135;

function oilPrice ( diselQuanity,petrolQuantity,octaneQuantity){
 
  if(typeof diselQuanity !== "number" && petrolQuantity !== "number" && octaneQuantity !== "number"){
    return 'Please provide recomanded data';
   } 
   const diselTotalPrice = diselPrice * diselQuanity;
   const petrolTotalPrice = petrolPrice * petrolQuantity;
   const octaneTotalPrice = octanePrice * octaneQuantity;
   const totalPrice = diselTotalPrice+ petrolTotalPrice+ octaneTotalPrice;
   return totalPrice;
}
const oilLitre = 1;
const petrolLitre = 1;
const octaneLitre =1 ;
const totalPrice = oilPrice(oilLitre,petrolLitre,octaneLitre);
console.log(totalPrice);


//--------------------------------------------------------------------------------------------------------------------------------------

//Problem-4 ( Picnic Bus Fare)

function publicBusFare (passangers){
  const reserveBusCapacity = 50;
  const microBusCapacity = 11;
  const publicBusTicketPrice = 250;

  if(typeof passangers !== 'number'){
    return 'Please input a valid number';
  }
  else if(passangers <50 ){
    const busFare = passangers * publicBusTicketPrice;
    return busFare;
  }
  else if( passangers <= 50){
    const extraPassanger = passangers % reserveBusCapacity;
    const busFare = extraPassanger * publicBusTicketPrice;
    return busFare;
  }

  else if( passangers <= 100){
     const microBusPassanger = passangers % reserveBusCapacity;
     const extraPassanger = microBusPassanger % microBusCapacity;
     const busfare = extraPassanger * publicBusTicketPrice;
     return busfare;
  }

  else{
    const microBusPassanger = passangers % reserveBusCapacity;
    const extraPassanger = microBusPassanger % microBusCapacity;
    const busfare = extraPassanger * publicBusTicketPrice;
    return busfare;
  }

}
const extraPeople = 51;
const totalBusFare = publicBusFare( extraPeople);
console.log(totalBusFare);

 //-----------------------------------------------------------------------------------------------------------------
 
 //Problem-5 ( Looking for Best Friends)


 function isBestFriend (friendshipOne,friendshipTwo){
  if(typeof friendshipOne !== 'object' && friendshipTwo !== 'object' ){
    return 'Please input a valid object';
  }
    else if( friendshipOne.name == friendshipTwo.friend && friendshipOne.friend == friendshipTwo.name ){
      return true;
    }
    else{
      return false;
    }
 }
 const bestFriendsOne = {name:'jon', friend:'don'};
 const bestFriendsTwo = {name:'don',friend:'jon'};
 const bestFriends = isBestFriend(bestFriendsOne,bestFriendsTwo);
 console.log(bestFriends);

 //-----------------------------------------------------------------------------------------------------------------------------------
 console.log("123" + 123);