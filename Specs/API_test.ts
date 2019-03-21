let Jasmine = require('jasmine');
var request = require('request');
var rp = require('request-promise');
var jp = require('jsonpath');

describe('API sample test with a promise and a callback', function() {    

    const options = {
            method: 'GET',
            uri: 'https://www.alphavantage.co/query?',
            headers: {
                'content-type': 'application/json'
            },
            qs: {
                function: 'CURRENCY_EXCHANGE_RATE',
                from_currency: 'BTC',
                to_currency: 'USD',
                datatype: 'json',
                apikey: 'LIVJTOW4U128DCFI'
            }
            /*
            body: {
                some: 'payload'
            },*/
            //,body: JSON.stringify({foo: 'bar', _attachments: {'message.txt': {follows: true, length: 18, 'content_type': 'text/plain' }}})
            ,resolveWithFullResponse: true // Returns a full response with all the parameters (not only a body)
            //,json: true // Automatically parses the JSON string in the response
    };
    
    it('Verifying response with a promise', function(done) {
        
        rp(options)
            .then(function (response: { statusCode: number; statusMessage: string; body: any}) {
                console.log("resp.statusCode = ", response.statusCode);
                console.log("resp.statusMessage = ", response.statusMessage);
                console.log("resp.body = ", response.body);
                
                var parsedBody = JSON.parse(response.body);                
                var curName = jp.query(parsedBody, "$..['2. From_Currency Name']");
                
                console.log("parsed body = ", parsedBody);
                console.log("curName = ", curName);
                
                expect<number>(response.statusCode).toEqual(200);
                expect<string>(response.statusMessage).toEqual('OK');
                expect<string>(curName[0]).toEqual('Bitcoin');
                done();                
            })
            .catch(function (err: any) {
                console.log('ERROR = ', err);
            })
            .finally(function () {
                console.log('REQUEST is finished');
            });
    }),
    
    it('Verifying response with a callback', function(done) {        
        function callBack (error: any, response: { statusCode: number; statusMessage: string; body: any}, body: any) {
            if(!error){
                console.log("resp.statusCode = ", response.statusCode);
                console.log("resp.statusMessage = ", response.statusMessage);
                console.log("resp.body = ", response.body);
                
                var parsedBody = JSON.parse(response.body);                
                var curName = jp.query(parsedBody, "$..['3. To_Currency Code']");
                
                console.log("parsed body = ", parsedBody);
                console.log("curName = ", curName);
                
                expect<number>(response.statusCode).toEqual(200);
                expect<string>(response.statusMessage).toEqual('OK');
                expect<string>(curName[0]).toEqual('USD');
                console.log('REQUEST is finished');
            }
            else
                console.log('ERROR ', error);
            done();
        };
        request(options, callBack);
    })
});