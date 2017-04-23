var Proxy = function (argument) {
	this.delay = 50;
	this.timeout = null;
	this.collection = [];
}

Proxy.prototype.makeRequest = function (data) {
	this.collection.push(data);

	if (this.timeout) {
		this.timeout = setTimeout(function(){
			this.send(collection);
			this.flush();
		}, this.delay, this);
	}
}

Proxy.prototype.flush = function () {
	this.collection = [];
	this.timeout = null;
}



_.debounce = function(func, wait) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      if (!timeout) timeout = setTimeout(later, wait);
      
      return result;
    };
  };