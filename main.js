$(document).ready(function(){
    const tarefas = [];
    $('form').on('submit', function(e){
        e.preventDefault();
        const campoTarefa = $('#nome-tarefa').val();
        
        if (tarefas.includes(campoTarefa)){
            alert('Esta tarefa ja foi inserida')
        } else {
        tarefas.push(campoTarefa);
        const limparCampo = '';
        const addTarefa = $(`
            <li>
            ${campoTarefa}
            </li>
            `)
            $(addTarefa).appendTo('ul');
            $('#nome-tarefa').val('');
        }
        })

        $('ul').on('click', function(){
        const linhasTarefas = $('li').val('li');
        linhasTarefas.css('text-decoration', 'line-through')
        })
        })
    
