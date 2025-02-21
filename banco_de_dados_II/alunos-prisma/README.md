1. **Criar um campo “tipo” na tabela de Student para categorizar alunos da seguinte forma:**
   1. Aluno matriculado (código M)
   2. Aluno tech helper (código T)
   3. Aluno formado (código F)
2. **Refatorar a rota para criar alunos de modo que seja necessário informar o campo “tipo”.**
3. **Criar um mecanismo de autorização para as rotas de avaliação:**
   1. Criar avaliação: só pode ser acessada por alunos M ou T
   2. Atualizar e deletar: apenas por alunos T
   3. Listar: todos os alunos
