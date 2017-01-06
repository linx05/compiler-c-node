Array.prototype.clean = function() {
	for(let i = 0; i < this.length; i++) {
		if(this[i] === "") {
			this.splice(i, 1);
		}
	}
	return this;
};

String.prototype.isChar = function() {
	return this.match(/[a-z]/i);
};

String.prototype.isNumeric = function() {
	return !isNaN(parseFloat(this)) && isFinite(this);
};

Array.prototype.peek = function () {
	return this[this.length - 1];
};