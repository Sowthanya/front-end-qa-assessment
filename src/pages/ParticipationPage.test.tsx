export function discordFormatTest(tagName:string)
{
    if(tagName.includes('#') && tagName !== '')    
        return true;
    else
        return false;
}
describe('Test Disord Tag Format', () => {
    test('Discord tag with # , TestData:discord#1234', () => {
      expect(discordFormatTest('discord#1234')).toBe(true);     
    });
  });

  describe('Test Disord Tag Format', () => {
    test('Discord tag without # , TestData:discord1234', () => {
      expect(discordFormatTest('discord1234')).toBe(true);     
    });
});
   
  describe('Test Discord Tag Format', () => {
    test('Discord tag with only name , TestData:discord#', () => {
            expect(discordFormatTest('discord#')).toBe(true);     
        });

  });