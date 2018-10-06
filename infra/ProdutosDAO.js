class ProdutosDAO {
  constructor(connection) {
    this.connection = connection
  }
  pegaTodos() {
    return new Promise((resolve, reject) => {
      this.connection.query('select * from livros', (error, result) => {
        if (error) {
          reject(error)
        }
        resolve(result)
      })
    })
  }
  pegaUmPorId(id) {
    return new Promise((resolve, reject) => {
      this.connection.query(`select * from livros where id = ${id}`, (error, result) => {
        if (error) {
          reject(error)
        }
        resolve(result)
      })
    })
  }
  adicionar(produto) {
    return new Promise((resolve, reject) => {
      this.connection.query(`insert into livros set ?`, produto, (error, result) => {
        if (error) {
          reject(error)
        }
        resolve(result)
      })
    })
  }
}

module.exports = ProdutosDAO