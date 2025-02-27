class Calculator {
  public sun(x: number, y: number) {
    return x + y
  }
}

describe("Testes da classe Calculator", () => {
  // deve ... se/quando ...
  // Should ... when ...
  it('Deve retornar 10 quando eu somar dois números', () => {
    // 1 - sut (instância da classe que quero testar o método)
    const sut = new Calculator()

    // 2 - Chamar o método a ser testado
    const result = sut.sun(5, 5)

    // 3 - Validações (asserts)
    expect(result).toBeDefined() // tem valor definido?
    expect(result).toBe(10) // é igual a 10?
    expect(result).toBeGreaterThan(0)
  })
})