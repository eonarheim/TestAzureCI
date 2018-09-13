
import { greeter } from './index'

describe('A greeter', () => {
    it('should greet', () => {
        let greeting = greeter();
        expect(greeting).toBe("Hello, world");
    })
});