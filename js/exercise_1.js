var JonsGenerators = {
  generateRandomNumbers : function (quantity) {
    // generate [quantity] ordered numbers
    var number_container = [];
    for (var i = 1; i < quantity+1; i++) {
      number_container.push(i);
    }

    // scramble the numbers
    var scramble_times = quantity;
    for (var k = 0; k < scramble_times; k++) {

      // 1st random index
      var idx1 = Math.floor(Math.random()*quantity);
      // 2nd random index
      var idx2 = Math.floor(Math.random()*quantity);
      
      // cache value of first index
      var cached_1st = number_container[idx1];
      // swap
      number_container[idx1] = number_container[idx2];
      number_container[idx2] = cached_1st;
    }

    return number_container;
  }
};

(function () {



  window.onload = function () {

    var main = document.getElementById('main');
    
    // generate, and store in an array
    var one_thousand_randoms = JonsGenerators.generateRandomNumbers(1000);

    // print the array
    main.innerHTML = one_thousand_randoms.join("\n<br />");
  };
  
})();