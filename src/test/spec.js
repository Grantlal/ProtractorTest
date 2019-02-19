// spec.js
describe('Protractor Demo App', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));
  var history = element.all(by.repeater('result in memory'));

  function add(a, b) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    goButton.click();
  }

  function subtract(a,b) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(-b);
    goButton.click();
  }

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should have a history', function() {
    add(1, 2);
    add(3, 4);
    add(7,12);
    add(19,23);
    add(21,10000);
    subtract(100,400);

    //expect(latestResult).toEqual(300);
    expect(history.count()).toEqual(6);

    add(5, 6);

    //expect(history.count()).toEqual(0); // This is wrong!
  });
});