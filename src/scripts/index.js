// import MyPrototype from './MyPrototype';
// import MyClass from './MyClass';

import TextAnimation from './TextAnimation';
import IntroMenu from './IntroMenu';

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
    
    // const textAnimation = new TextAnimation();
    const introMenu = new IntroMenu();
});