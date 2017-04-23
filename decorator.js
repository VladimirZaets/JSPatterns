function User(name, age) {
	this.name = name;
	this.age = age;
	this.getUserInfo = function() {
		return {
			age: this.age,
			name: this.name
		}
	}
}

function UserDecorator(user, city, street) {
	this.user = user;
	this.city = city;
	this.street = street;
	this.getUserInfo = function() {
		return Object.assign(this.user.getUserInfo(), {
			city: this.city,
			street: this.street
		});
	}
}