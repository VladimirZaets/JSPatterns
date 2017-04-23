function Events () {
	this.subscribers = {};
}

Events.prototype.publish = function(name, data){
	this.notify(name, data);
}

Events.prototype.subscribe = function(name, callback) {
	this.subscribers[name].push(callback);
}

Events.prototype.notify = function(name, data) {
	this.subscribers[name].forEach(function(callback){
		callback(data);
	}, this);
}

Events.set('product_id', '2');