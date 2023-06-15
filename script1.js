// Função para exibir uma mensagem de boas-vindas
function exibirMensagemBoasVindas() {
    console.log('Bem-vindo à Escola Técnica de Saúde!');
  }
  
  // Função para mostrar os detalhes de um curso
  function mostrarDetalhesCurso(curso) {
    console.log('Detalhes do curso:', curso);
  }
  
  // Função para lidar com o clique no botão "Conheça nossos cursos"
  function handleConhecerCursos() {
    // Redirecionar o usuário para a página de cursos
    window.location.href = 'cursos.html';
  }
  
  // Event listener para o carregamento completo da página
  window.addEventListener('load', function() {
    // Chamar a função de boas-vindas
    exibirMensagemBoasVindas();
  
    // Adicionar event listener para o botão "Conheça nossos cursos"
    var btnConhecerCursos = document.querySelector('.btn');
    btnConhecerCursos.addEventListener('click', handleConhecerCursos);
  
    // Mostrar os detalhes de um curso específico quando clicado
    var cursos = document.querySelectorAll('#courses ul li');
    cursos.forEach(function(curso) {
      curso.addEventListener('click', function() {
        var nomeCurso = this.textContent;
        mostrarDetalhesCurso(nomeCurso);
      });
    });
  });
  