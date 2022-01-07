import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
    const objInicialCategorias = {
        nome: '',
        descricao: '',
        cor: '',
    };

    const [novaCategoria, setNovaCategoria] = useState(objInicialCategorias);

    const [categorias, setCategorias] = useState([]);

    function setNovaCat(chave, valor) {
        setNovaCategoria({
            ...novaCategoria,
            [chave]: valor,
        }); // [] é a forma de fazer a atribuicao do valor da chave também ser dinamico
    }

    function funcaoDisparada(evento) {
        setNovaCat(evento.target.getAttribute('name'), evento.target.value);
    }

    useEffect(() => {
        const URL_BACKEND = window.location.hostname.includes('localhost')
            ? 'http://localhost:8080/categorias'
            : 'urlProd';

        fetch(URL_BACKEND).then(async (respostaDoServidor) => {
            const respostaConvertidaDoServidor = await respostaDoServidor.json();
            setCategorias([...respostaConvertidaDoServidor]);
        });
    }, []);

    return (
        <PageDefault>
            <h1>
                Cadastro de Categoria
                {categorias.nome}
            </h1>

            <form
                onSubmit={function handleSubmit(info) {
                    info.preventDefault();
                    setCategorias([...categorias, novaCategoria]);

                    setNovaCategoria(objInicialCategorias);
                }}
            >
                <FormField
                    label='Nome da Categoria'
                    name='nome'
                    type='text'
                    value={novaCategoria.nome}
                    onChange={funcaoDisparada}
                />

                <FormField
                    label='Descrição'
                    name='descricao'
                    type='textarea'
                    value={novaCategoria.descricao}
                    onChange={funcaoDisparada}
                />

                <FormField label='Cor' name='cor' type='color' value={novaCategoria.cor} onChange={funcaoDisparada} />

                <Button>Cadastrar</Button>
            </form>

            <ul>
                {categorias.length === 0 ? (
                    <li>carregando</li>
                ) : (
                    categorias.map((cat, indice) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <li key={`${cat}${indice}`}>{cat.nome}</li>
                    ))
                )}
            </ul>

            <Link to='/'>Home</Link>
        </PageDefault>
    );
}

export default CadastroCategoria;
