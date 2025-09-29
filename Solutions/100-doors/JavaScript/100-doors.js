// Task: There are 100 doors in a row that are all initially closed. You make 100 passes by the doors. 
//The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it). 
//The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. 
//The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.
// Implement a function to determine the state of the doors after the last pass. Return the final result in an array, with only the door number included in the array if it is open.

//Solution:


function getFinalOpenedDoors(numDoors) {

  //I have decided to complete this task by making an array that will contain boolean valus. 
  
  let doorsArrBool=[];

  //This for loop will be our character who goes around to toggle the doors. 
  //the i variable will help us with only toggling every 2nd, every 3rd and every ... door
  //eg.: i=2 => we will toggle every second door
  
  for(let i=1; i<=numDoors; i++)

  {

    //The n variable acts as the doors. 
    //I have used a simple if-else statement to set the doors to either open (true) or closed (false)
    for(let n=i; n<=numDoors;)

      {

        if(doorsArrBool[n]==true)

          {

            doorsArrBool[n]=false;

          }

        else

          {

            doorsArrBool[n]=true;

          }
        n+=i;
        
      }
    
  }

  //The doorsArrInt array will contain the room number of every door thats open. 
  //the n variable is used as an index number for the array.
  
    let doorsArrInt=[];
    let n=0;

  for(let i=0; i<= doorsArrBool.length; i++)

    {

      if(doorsArrBool[i]==true)

        {

          doorsArrInt[n]=i
          n++;
        }
    
    }
  
  return doorsArrInt;

}

getFinalOpenedDoors(100);


