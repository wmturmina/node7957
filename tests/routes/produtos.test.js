const { expect } = require('chai')
const request = require('supertest')
const app = require('../../app')

describe('# /produtos', () => {
  describe('## GET', () => {
    it('Deve retornar uma lista de livros', (done) => {
      request(app)
        .get('/produtos')
        .set('Accept', 'application/json')
        .end((error, response) => {
          if (error) throw error
          // expect(response.body).to.have.property('livros')
          expect(response.body).to.be.an('array')
          done()
        })
    })
  })
  describe('## POST', () => {
    it('Deve inserir um livro e retornar uma lista de livros', (done) => {
      const livro = {
        titulo: 'Teste',
        preco: 10,
        descricao: 'Teste de cadastro'
      }
      request(app)
        .post('/produtos')
        .send(livro)
        .set('Accept', 'application/json')
        .set('Content-type', 'application/json')
        .end((error, response) => {
          if (error) throw error
          expect(response.status).to.be.equal(302)
          expect(response.header).to.have.property('location')
          expect(response.header.location).to.be.equal('/produtos')
          done()
        })
    })
  })
})