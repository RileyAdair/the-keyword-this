//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer

      /*
      Whenever we invoke a function, it is given data about the context, or where it was invoked from. The purpose of the 'this keyword' is to give access to the context. Essentially, 'this keyword' is a pointer.
      */

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      /*
      1. Implicit: means implied context. Context is inferred to be the object left of the dot when the function is invoked, not when it is defined.
      2. Explicit: is a over ride behavior used to reference the object calling the function. The following methods are

      .bind() method creates a new function, binding the function and the parameter that is passed in. However, it is not invoked when it is bound. This keyword is set to provided value when invoked

      .call() method will invoke the function as it's being bound with a given this value and arguments provided individually

      .apply() does the same as call(), however, with arguments provided as an array.
      3. Default
      4. New
      */

  // 3) What does .bind do?

      //Answer
      /*
      .bind takes a function and an object, and creates a new object with those two permanently attached together.
      It is good for creating new objects by re-using a function over and over again with different objects.
      */


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var user = {
      username: "rileyda",
      email: "rileyda@yup.com",
      getUsername: function(){
        return this.username;
      }
    };
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();


//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.

  //Function Invocations Here
function Car(make, model, year){
  this.make = make,
  this.model = model,
  this.year = year,
  this.move = 0,
  this.moveCar = function(){
    this.move += 10;
    return this.move;
  }
}


var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.





//Continuation of previous problem

var getYear = function(){
  return this.year;
};



// Above you are given a getYear function.  Use the bind function to bind the prius object to the function and save it in a variable called getPriusYear
// Then use the bind function to bind the mustang to the function and save it in a varabile called getMustangYear
// Console Log the results of the getPriusYear and getMustangYear to see that they are returning the correct years.


//Note(no tests)
  //Code Here
var getPriusYear = getYear.bind(prius);
var getMustangYear = getYear.bind(mustang);

console.log(getPriusYear(), getMustangYear());

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.bind(myUser); //Fix this

// !!! set variable userName to the result of invoked function username()
// equal to 'iliketurtles'
userName = userName();


//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //Answer Here
  // userName is not a function
//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here
  // It is bound to the window.

//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.
