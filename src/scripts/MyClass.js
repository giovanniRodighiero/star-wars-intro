class MyClass {
    constructor () {
        this.value = 'value';

        this.printValue = this.printValue.bind(this);
    }

    printValue () {
        console.log(this.value);
    }
};

export default MyClass;