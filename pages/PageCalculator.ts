import { BasePage } from "./BasePage";

var bp = new BasePage();
let url = 'http://juliemr.github.io/protractor-demo/'; 

export class PageCalculator extends BasePage{
    
    goToHomePage(){
        bp.getBrowser().waitForAngularEnabled(false);
        bp.browserNavigate().to(url);
        bp.getBrowser().waitForAngularEnabled(true);
    }
    
    getFisrtNumber() {
        return bp.getElement(bp.getLocator().model('first'));
    }
  
    getSecondNumber() {
        return bp.getElement(bp.getLocator().model('second'));
    }

    getGoButton() {
        return bp.getElement(bp.getLocator().id('gobutton'));
    }
    
    getLatestResult() {
        return bp.getElement(bp.getLocator().binding('latest'));
    }
    
    getOperatorButton() {
        return bp.getElement(bp.getLocator().model('operator'));
    }
}