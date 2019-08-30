import { browser, element, protractor, by, WebElement } from 'protractor';
import { IKey } from "selenium-webdriver";
import { code as dragAndDrop } from 'html-dnd';

let path = require("path");

export class BasePage{
    
    key : IKey
    
    getBrowser(){
        return browser;
    }
    
    getLocator(){
        return by;
    }

    getElement(locator : any){
        return element(locator);
    }

    getTitle() {
        return browser.getTitle();
    }
    
    switchToAlert(timeOut = 5000){
        var EC = protractor.ExpectedConditions;
        try{
            browser.wait(EC.alertIsPresent(), timeOut);
            browser.switchTo().alert().accept();
        }
        catch (e) {
            return "Alert isn't present";
        }
    }
    
    browserNavigate(){
        return browser.navigate();
    }
    
    browserActions(){
        return browser.actions();
    }
    
    browserManage(){
        return browser.manage();
    }
    
    browserWait(locator : any, milliSec = 5000){
        browser.wait(protractor.ExpectedConditions.presenceOf(locator), milliSec);
    }
    
    /**
    for example key = key.ENTER
     */
    pressKey(key: any) {
        return this.browserActions().sendKeys(key).perform();
    }
    
    fileUpload(filePath : string, webElem : WebElement, clickButton : WebElement){
        let fpath = path.resolve(__dirname, filePath);
        webElem.sendKeys(fpath);    
        clickButton.click();
    }
    
    dynamicTable(locator : any) : WebElement{
        return element(locator).all(by.tagName("tr")).all(by.xpath("./*"));
    }
    
    dragDropDnd(draggable : any, droppable : any){
        browser.executeScript(dragAndDrop, draggable, droppable);
    }
}