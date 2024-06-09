import React from "react";
const TabelaBody = (props) => ( // Os parênteses em props não são necessários.
    <tbody>
        { props.livros.map( ( livro, index ) => (
            // No livro diz que o atributo cujo valor será atribuído à key deve ser único.
            // Porém, quando fiz key={ livro.autor } não ocorreu nenhum erro. Eu havia incorporado
            // um quarto livro à lista, repetindo o autor. Então eu esperava ver um erro, mas isso
            // não aconteceu.
            <tr key={ livro.id }>
                <td>{ livro.id }</td>
                <td>{ livro.titulo }</td>
                <td>{ livro.autor }</td>
                <td>
                    <button 
                        className="botao remover"
                        onClick={ () => props.removerLinha(livro.id) }
                    >Remover
                    </button>
                </td>
            </tr>
        ))}
    </tbody>
);

export default TabelaBody;