var Emitter = require('./emitter');

var emtr = new Emitter();

// Property name => 'greet'
emtr.on('greet', function(){
    console.log('Somewhere, someone said hello');
});

emtr.on('greet', function(){
    console.log('A greeting occured!');
});

console.log('Hello!');

// manually emit the event, and runs all the functions in the array 
emtr.emit('greet');
