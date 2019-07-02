import MyPrototype from './MyPrototype';
import MyClass from './MyClass';

// STOP USING JQUERY FOR DOMREADY CALLBACK
function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(_ => {
    console.log('in domready !');
    
    const c = new MyClass();
    c.printValue();

    const p = new MyPrototype();
    p.printValue();
});