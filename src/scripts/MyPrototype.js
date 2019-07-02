function MyPrototype () {
    this.value = 'value';

    this.printValue = this.printValue.bind(this);
}

MyPrototype.prototype.printValue = function () {
    console.log(this.value);
};

export default MyPrototype;