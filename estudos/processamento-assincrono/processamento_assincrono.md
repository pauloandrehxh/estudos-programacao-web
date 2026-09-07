# Processamento Assíncrono no JavaScript

### O Problema da Sincronicidade

O JavaScript é **single-thread**, o que significa que ele executa uma linha de código por vez em uma única trilha.

* **Código Síncrono (Bloqueante):** Executa as tarefas sequencialmente. Se uma tarefa pesada (como o download de uma imagem) for iniciada, a página inteira congela até que o download termine.
* **Código Assíncrono (Não Bloqueante):** Delega a tarefa pesada para o navegador (Web APIs) e continua executando o restante do código. Quando a tarefa termina, ela é enviada de volta para o fluxo principal.
* **Event Loop:** É o mecanismo do motor JavaScript que monitora a "Pilha de Execução" (Call Stack) e a "Fila de Tarefas" (Task Queue). O Event Loop garante que o código síncrono termine primeiro e, em seguida, puxa as tarefas assíncronas concluídas da fila para serem executadas.

### Promises (Promessas)
Uma `Promise` é um objeto JavaScript que representa o sucesso ou a falha futura de uma operação assíncrona. 

* **Os 3 Estados de uma Promise:**
  1. **Pending (Pendente):** Estado inicial. A operação ainda não foi concluída nem rejeitada.
  2. **Fulfilled (Resolvida):** A operação foi concluída com sucesso.
  3. **Rejected (Rejeitada):** A operação falhou (ex: erro de rede ou servidor fora do ar).

* **Encadeamento (.then e .catch):**
  Usamos o método `.then()` para dizer ao código o que fazer quando a Promise for resolvida (Fulfilled) e o `.catch()` para capturar e tratar erros caso ela seja rejeitada.

### Async / Await
É uma sintaxe introduzida no ES8 que atua como um "açúcar sintático" em cima das Promises, deixando o código assíncrono com cara de código síncrono.

* **A palavra `async`:** Quando colocada antes de uma função, ela força a função a retornar sempre uma Promise.
* **A palavra `await`:** Só pode ser usada dentro de funções `async`. Ela faz a execução da função pausar exatamente naquela linha até que a Promise seja resolvida, liberando o valor real (sem precisar usar `.then()`).
* **Tratamento de Erros (try/catch):** Em vez de usar `.catch()`, encapsulamos o código dentro de um bloco `try {}`. Se qualquer erro ocorrer ali dentro, a execução pula imediatamente para o bloco `catch (error) {}`.

---