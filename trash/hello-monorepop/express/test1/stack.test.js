class Stack{
    constructor() {
        this.top = -1;
        this.items={};
    }
}


describe('My Stack', () => {
    let stack;
    beforeEach( () => {
        stack = new Stack();
    });
    
    it('op in the chat', () => {
        expect(stack.top).toBe(-1);
    });
    
    it('yeh boy!', () => {
        expect(stack.items).toEqual({});
    });
    
    it('that whatup', () => {
        expect(stack.items).toEqual({});
    });
}) 