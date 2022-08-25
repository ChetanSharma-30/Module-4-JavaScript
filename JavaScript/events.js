// Events and Event object in JavaScript

console.log('Welcome to tut 17');

document.getElementById('heading').addEventListener('click', function(e){
         let variable;
    console.log('You have clicked the heading');
    variable = e.target;
    console.log(variable);
    // variable = e.target.classname

})