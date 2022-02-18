const { fileContentsToArray , fileContentsToArrayPromises} = require('../fileReader');
describe('fileContentsToArray function', ()=>{
    it('should print contents in an array when valid file is passed', (done)=>{
       const spy = jest.spyOn(console,"log");
       fileContentsToArray('Fruits.txt');
       setTimeout(()=>{
        expect(spy).toHaveBeenCalledWith([ 'Apple', 'Mango', 'Banana', 'Grapes' ]);
        done();
       },2000);
    });
});
describe('fileContentsToArrayPromise function', () =>{
    it('should return contents in an array when valid file is passed', () => {
        fileContentsToArrayPromises('./Fruits.txt').then((data) => {
            expect(data).toEqual([ 'Apple', 'Mango', 'Banana', 'Grapes' ]);
        })});
    it('should return error when invalid file is passed', () => {
        fileContentsToArrayPromises('ts.txt').catch((data) => {
            expect(data).toEqual("ERROR!");
       })})

})