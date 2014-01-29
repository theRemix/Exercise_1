describe("A Random Number Generator", function() {
  
  it("should contain 1000 numbers", function() {
    // generate 1000
    var random_numbers = JonsGenerators.generateRandomNumbers(1000);

    // should have 1000
    expect(random_numbers.length).toBe(1000);
  });

  it("should generate different random numbers", function() {
    // take 2 small samples of random numbers generated
    var gen1 = JonsGenerators.generateRandomNumbers(50);
    var gen2 = JonsGenerators.generateRandomNumbers(50);

    // test that the first and last numbers are different
    // expecting that there are 50 numbers in each array
    expect(gen1[0]).not.toBe(gen2[0]);
    expect(gen1[49]).not.toBe(gen2[49]);
  });
});