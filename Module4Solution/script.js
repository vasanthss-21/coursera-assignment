    var hello = {};
    hello.speak = function (name) {
      console.log("Hello" + " " + name);
    };

    var bye = {};
    bye.speak = function (name) {
      console.log("Goodbye" + " " + name);
    };

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    
    for (var i = 0; i < names.length; i++) {
      var f = names[i].charAt(0).toLowerCase();
      if (f === 'j') {
        bye.speak(names[i]);
      } else {
        hello.speak(names[i]);
      }
    }

  