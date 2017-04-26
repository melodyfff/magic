function f(a, b, c){
    alert(arguments.length);   // result: "2"
    a = 100;
    alert(arguments[0]);       // result: "100"
    arguments[0] = "qqyumidi";
    alert(a);                  // result: "qqyumidi"
    alert(c);                  // result: "undefined"
    c = 2012;
    alert(arguments[2]);       // result: "undefined"
}

f(1, 2);
