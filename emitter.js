function Emitter(){
    this.events = {};
}

// listening
Emitter.prototype.on = function(type, listener){
    // make sure array exist for the event type
    this.events[type] = this.events[type] || [];
    // adding listener functions into the array //
    this.events[type].push(listener);
}

// emit a particular type of event
Emitter.prototype.emit = function(type){
    // check if we have that type of event 
    if(this.events[type]){
        // loop the array to check for listener functions //
        this.events[type].forEach(function(listener){
            // execute listener function
            listener();
        });
    }
}

// making object available
module.exports = Emitter;