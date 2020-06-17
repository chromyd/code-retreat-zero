import { expect } from 'chai';
import { nextGeneration } from '../src/conway'

describe('Conway Game of Life', () => {
    it('zero life : no change', () => {
        // arrange
        const currentGeneration = [];
        // act
        const nextGen = nextGeneration(currentGeneration);
        // assert
        expect(nextGen).to.be.empty
    });

    it('single cell dies', () => {
        // arrange
        const currentGeneration = [{x:0,y:0}];
        // act
        const nextGen = nextGeneration(currentGeneration);
        // assert
        expect(nextGen).to.be.empty
    });

    it('cell with two neighbors survives', () => {
        // arrange
        const currentGeneration = [{x:0,y:0},{x:1,y:1},{x:2,y:2}];
        // act
        const nextGen = nextGeneration(currentGeneration);
        // assert
        expect(nextGen).to.deep.contain({x:1,y:1});
    });

    it('dead cell with three neighbors is resurrected', () => {
        // arrange
        const currentGeneration = [{x:0,y:0},{x:0,y:1},{x:0,y:2}];
        // act
        const nextGen = nextGeneration(currentGeneration);
        // assert
        expect(nextGen).to.deep.contain({x:0,y:1});
        expect(nextGen).to.deep.contain({x:-1,y:1});
        expect(nextGen).to.deep.contain({x:1,y:1});
    });


})