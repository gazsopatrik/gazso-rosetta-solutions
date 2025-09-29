
using System.Reflection.Metadata.Ecma335;
using System;

//Task: There are 100 doors in a row that are all initially closed. You make 100 passes by the doors. 
//The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it). 
//The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. 
//The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.
//Implement a function to determine the state of the doors after the last pass. Return the final result in an array, with only the door number included in the array if it is open.

//Solution:

public class Doors100 {

    public static void Main() {

        bool[] doorsArrBool=new bool[100];


        for (int i = 1; i <= 100; i++)

        {

            for (int n = i; n <= 100;)

            {

                if (doorsArrBool[n-1] == true)

                {

                    doorsArrBool[n-1] = false;

                }

                else

                {

                    doorsArrBool[n-1] = true;

                }

                n += i;

            }

        }

        int[] doorsArrInt = new int[100];

        int num = 0;

        for (int i = 1; i <= 100; i++)

        {

            if (doorsArrBool[i-1] == true)

            {

                doorsArrInt[num] = i-1;
                num++;

            }

        }

    }


}

