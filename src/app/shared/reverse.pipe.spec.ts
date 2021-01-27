import { ReversePipe } from "./reverse.pipe"

describe('ReversePipe', () => {
  it('should reverse the order of characters in a string', () =>{
    let reversePipe = new ReversePipe;
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });
});