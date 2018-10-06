class ProdutosDAO {
  constructor(connection) {
    this.connection = connection
  }
  pegaTodos() {
    console.log('1 - pegaTodos()')
    return new Promise((resolve, reject) => {
      console.log('2 - dentro do new Promise')
      this.connection.query('select * from livros', (error, result) => {
        if(error){
          reject(error)
        }
        console.log('3 - Dentro do Callback do Banco')
        resolve(result)
      })
    })
  }
  pegaUmPorId(id) {
    console.log('1 - pegaUmPorId()')
    return new Promise((resolve, reject) => {
      console.log('2 - dentro do new Promise')
      this.connection.query(`select * from livros where id = ${id}`, (error, result) => {
        if(error){
          reject(error)
        }
        console.log('3 - Dentro do Callback do Banco')
        resolve(result)
      })
    })
  }
}

module.exports = ProdutosDAO