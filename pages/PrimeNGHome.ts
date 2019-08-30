import { BasePage } from "./BasePage";

var bp = new BasePage();
let url = 'https://www.primefaces.org/primeng/#/'; 

export class PrimeNGHome extends BasePage{

    goToHomePage(){
        //bp.getBrowser().waitForAngularEnabled(false);
        bp.browserNavigate().to(url);
        //bp.getBrowser().waitForAngularEnabled(true);
    }
    
    getDataButton() {
        return bp.getElement(bp.getLocator().id('data_menutitle'));
    }
    
    getCarousel() {
        return bp.getElement(bp.getLocator().xpath("//a[@href='#/carousel']"));
    }
    
    getDocTable() {
        return bp.dynamicTable(bp.getLocator().xpath("//div//table[@class='doc-table']"));
    }
    
    getDragDropButton() {
        return bp.getElement(bp.getLocator().id('menu_dnd'));
    }
    
    getDragDrop() {
        return bp.getElement(bp.getLocator().xpath("//*[@href='#/dragdrop'][contains(text(), 'Drag&Drop')]"));
    }
    
    getVWdraggable(){
        return bp.getElement(bp.getLocator().xpath("//*[@pdraggable='cars']//*[contains(text(), 'dsad231ff')]"));
    }
    
    getDroppableLocation(){
        return bp.getElement(bp.getLocator().xpath("//div[@pdroppable='cars']"));
    }
    
    getDroppableTable() {
        return bp.dynamicTable(bp.getLocator().xpath("//*[@class='ui-table-wrapper ng-star-inserted']//table"));
    }
    
    getOverlayButton() {
        return bp.getElement(bp.getLocator().id('menu_overlay'));
    }
    
    getOverlayConfirmDialog() {
        return bp.getElement(bp.getLocator().xpath("//*[@href='#/confirmdialog'][contains(text(), 'ConfirmDialog')]"));
    }
    
    getConfirmButton() {
        return bp.getElement(bp.getLocator().xpath("//*[@type='button'][@label='Confirm']"));
    }
    
    getYesButton() {
        return bp.getElement(bp.getLocator().xpath("//*[@type='button']//*[contains(text(), 'Yes')]"));
    }
    
    getConfirmText() {
        return bp.getElement(bp.getLocator().xpath("//span[contains(text(), 'Confirmed')]"))
    }
}