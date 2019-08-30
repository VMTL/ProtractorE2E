import * as using from 'jasmine-data-provider';
import { PageCalculator } from '../pages/PageCalculator';

let calcPage = new PageCalculator();
let Jasmine = require('jasmine');

describe('Protractor sample test', () => {
 
    beforeEach(async () => {
        await calcPage.goToHomePage();
    });
    
    afterAll(async () => {
        await calcPage.getBrowser().quit();
    });

    it('Should have a title', () => {
        expect<any>(calcPage.getTitle()).toEqual('Super Calculator');
    });
  
    using(multipleProvider, (data: any) => {
        it('Should calculate ' + data.c + ' of ' + data.a + ' and ' + data.b, async () => {
            await calcPage.getFisrtNumber().sendKeys(data.a);
            await calcPage.getSecondNumber().sendKeys(data.b);
            await calcPage.getOperatorButton().$('[value="'+ data.c +'"]').click();
            await calcPage.getGoButton().click();
            expect<any>(await calcPage.getLatestResult().getText()).toEqual((data.expected).toString());
        });
    });
    

    it('Should read the value from an input', async () => {
        await calcPage.getFisrtNumber().sendKeys(1);
        expect<any>(await calcPage.getFisrtNumber().getAttribute('value')).toEqual('1');
    });
    
    function multipleProvider() {
        return [
            {a: 2, b: 3, c: 'MULTIPLICATION', expected: 2*3},
            {a: 15, b: 3, c: 'DIVISION', expected: 15/3},
            {a: 12, b: 14, c: 'MODULO', expected: 12%14},
            {a: 333, b: 444, c: 'ADDITION', expected: 333+444},
            {a: 32, b: 12, c: 'SUBTRACTION', expected: 32-12},
        ];
    }

});