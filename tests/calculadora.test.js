const calculadora = require('./calculadora')
const chai = require('chai')

describe('# calculadora', () => {
    describe('## somar()', () => {
        it('1+1 deve ser 2', () => {
            chai.expect(calculadora.somar(1,1)).to.be.equal(2)
        })
    })
    describe('## subtrair()', () => {
        it('1-1 deve ser 0', () => {
            chai.expect(calculadora.subtrair(1,1)).to.be.equal(0)
        })
    })
    describe('## dividir()', () => {
        it('6/2 deve ser 3', () => {
            chai.expect(calculadora.dividir(6,2)).to.be.equal(3)
        })
    })
    describe('## multiplicar()', () => {
        it('2*2 deve ser 4', () => {
            chai.expect(calculadora.multiplicar(2,2)).to.be.equal(4)
        })
    })
})