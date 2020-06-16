import { expect } from 'chai';
import { greet } from '../src/hello-world'

describe('Globals', () => {
    it('greet is correct', () => {
        expect(greet('John')).to.include('Hello, John');
    });
})
