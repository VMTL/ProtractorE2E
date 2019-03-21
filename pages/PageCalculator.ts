import { browser, element, by } from 'protractor';

export class PageCalculator{
    
    goToHomePage(){
        browser.get('http://juliemr.github.io/protractor-demo/');
    }

    getTittle() {
        return browser.getTitle();
    };

    getFisrtNumber() {
       return element(by.model('first'));
    };
  
    getSecondNumber() {
        return element(by.model('second'));
    };

    getGoButton() {
        return element(by.id('gobutton'));
    };
    
    getLatestResult() {
        return element(by.binding('latest'));
    };
    
    getOperatorButton() {
        return element(by.model('operator'));
    };
}