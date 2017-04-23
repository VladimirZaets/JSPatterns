function Shipping(argument) {
	this.company = {};
}

Shipping.prototype.setStrategy = function (company) {
	this.company = company;
}

Shipping.prototype.calculate = function (package) {
	this.company.calculate(package);
}

function UPS = function () {
	this.calculate = function (package) {
		//...
		return 134;
	}
}

function Fedex = function () {
	this.calculate = function (package) {
		//...
		return 345;
	}
}

var shipping = new Shipping(),
	ups = new UPS(),
	fedex = new Fedex(),
	package = { from: "76712", to: "10012", weigth: "lkg" };

shipping.setStrategy(ups);
shipping.calculate(package);

shipping.setStrategy(fedex);
shipping.calculate(package);w
