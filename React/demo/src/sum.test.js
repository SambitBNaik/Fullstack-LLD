import sum  from './sum';

test('Add numbers return sum',()=>{
    expect(sum(10,20)).toBe(30);
});