var Emitter = require('events');
var eventsConfig = require('./config').events;

var emtr= new Emitter();

emtr.on(eventsConfig.GREET,function(){
    console.log('Somewhere, some said hello.');
});

emtr.on(eventsConfig.GREET, function(){
    console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit('greet');
