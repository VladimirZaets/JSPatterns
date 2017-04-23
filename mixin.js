function circleMixin() {
	this.grow = function() {
		this.radius++;
	}

	this.shrink = function () {
		this.radius--;
	}
}

function Circle(radius) {
	this.radius = radius;
}

circleMixin.call(Circle.prototype);

var cl = new Circle(2);
cl.shrink();
cl.radius;

function eventMixin () {
	this.on = function (name, handler) {
		if (!this.events[name]) {
			this.events[name] = [];
		}

		this.events[name].push(handler);
	}

	this.off = function (name, handler) {
		this.events[name].forEach(function(callback, index, array){
			if (callback === handler) {
				array.splice(index, 1);
			}
		})
	}

	this.trigger = function (name, data) {
		this.events[name].forEach(function(callback) {
			callback(data);
		})
	}
}

function Menu () {};
eventMixin.call(Menu.prototype);

var menu = new Menu(),
	menuSelectHandler = function (data) {
		return data;
	};
menu.on('select', menuSelectHandler);
menu.trigger('select', data);
menu.off('select', menuSelectHandler);
