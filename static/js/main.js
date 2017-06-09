
//require('html-loader!../sample.html');
//import '../css/app.css';

(function(){
    /*
    var hello = document.createElement('p');
    hello.innerText = 'Hello World';
    document.getElementsByTagName('div').item(0).appendChild(hello);
    */
    
    $('.wrapper').append($('<p>Hello World</p>'));
})();