function answer(){
    const deatil1 = {firstname:"Ram",firstage: "25",firstyuga: "Treta"};
  
    const deatil2 = {secondname:"krsna",secondage: "35",secondyuga:  "Yeta" };
   
   if(deatil1[1]>deatil2[1]){
     console.log("The older among two: ");
     console.log(deatil1.firstage);
   }
   else{
     console.log("The older among two: ");
     console.log(deatil2.secondage);
   }
  }
  answer();