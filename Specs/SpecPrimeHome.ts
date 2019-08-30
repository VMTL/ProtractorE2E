import * as using from 'jasmine-data-provider';
import { PrimeNGHome } from '../pages/PrimeNGHome';

let primeHome = new PrimeNGHome();
let Jasmine = require('jasmine');
let arr2 : string[][] = [];

describe('Protractor PrimeNG test', () => {

    beforeEach(async() => {
        await primeHome.goToHomePage();
    });

    afterAll(() => {
        primeHome.getBrowser().quit();
    });

    it('Should have a title', async() => {
        expect<any>(await primeHome.getTitle()).toEqual('PrimeNG');
    });
    
    it('Should check first Dynamic Table ("Properties") displayed in Data->Carousel', async() => {
        await primeHome.getDataButton().click();
        await primeHome.getCarousel().click();        
        expect<any>(await primeHome.getBrowser().getCurrentUrl())
            .toEqual('https://www.primefaces.org/primeng/#/carousel');

        let arr = (await primeHome.getDocTable().getText() + '').split(",");
        let k = 0;
        for(let i = 0; i < arr.length / 4; i++){
            arr2[i] = [];
            for(let j = 0; j < 4; j++){
                arr2[i][j] = arr[k];
                k++;
            }
        }
        expect<any>(await arr2[0][3]).toBe('Description');
        expect<any>(await arr2[3][0]).toBe('firstVisible');
        expect<any>(await arr2[6][2]).toBe('boolean');
    });
    
    it('Should check name of the car DragnDroped into the Droppable table', async() => {
        await primeHome.getDragDropButton().click();
        await primeHome.getBrowser().sleep(1000);
        await primeHome.getDragDrop().click();
        let carName = await primeHome.getVWdraggable().getText();
        
        /*Neither of these two DragAndDrop approaches work
         
        await primeHome.browserActions().dragAndDrop(primeHome.getVWdraggable(),
                                                primeHome.getDroppableLocation()).perform();
        
        primeHome.browserWait(primeHome.getVWdraggable());
        await primeHome.browserActions()
                .mouseDown(primeHome.getVWdraggable())
                .mouseMove(primeHome.getDroppableLocation())
                .perform();
        */
        
        await primeHome.dragDropDnd(primeHome.getVWdraggable(), primeHome.getDroppableLocation());
        await primeHome.getBrowser().sleep(1000);
        let arr = (await primeHome.getDroppableTable().getText() + '');
        expect<any>(arr.includes(carName.substr(0, carName.indexOf(" -")))).toBeTruthy();
    });
    
    it('It check overlay action result', async() => {
       await primeHome.getOverlayButton().click();
       await primeHome.getBrowser().sleep(1000);
       await primeHome.getOverlayConfirmDialog().click();
       
       await primeHome.getConfirmButton().click()
       await primeHome.getBrowser().sleep(1000);
       await primeHome.getYesButton().click();
       await primeHome.getBrowser().sleep(1000);
       expect<any>(primeHome.getConfirmText().isPresent()).toBeTruthy();
    });
});