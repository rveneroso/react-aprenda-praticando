import React from 'react';
import { Link } from "react-router-dom";
const Programacao = ({ livros }) => (
    <main className='principal'>
        <h2>Categoria Programação</h2>
        {livros
            .filter(cat => cat.categoria === 'programacao')
            .map(livro => (
                <div className="card" key={livro.id}>
                    <div className = "thumb">
                        <img
                            src={"/imagens/capas/" + livro.id + ".jpg"}
                            alt="Thumbnail da capa do livro..."
                        />
                    </div>
                    {/*
                     No código do livro há outra sequência filter / map. Porém, ela era desnecessária
                     já que nesse ponto da execução, já temos o livro para o qual criar o link e os
                     detalhes dele.
                    */}
                    <span key={livro.slug}>
                        <Link to={`/livro/${livro.slug}`}>
                            {
                                <div className="detalhes">
                                    <h3>{livro.titulo}</h3>
                                    <p>{livro.descricao.slice(0, 130) + "..."}</p>
                                    <p>Leia mais &gt;</p>
                                </div>
                            }
                        </Link>
                    </span>
                </div>
            ))
        }
    </main>
);

export default Programacao;