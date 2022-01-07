import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
    const objInicialCategorias = {
        titulo: '',
        descricao: '',
        cor: '#624CAB',
    };

    const [categorias, setCategorias] = useState([]);
    const { valores, handleMudancas, limpaInputsFormulario } = useForm(objInicialCategorias);

    useEffect(() => {
        categoriasRepository
            .getAllCategsWithVideos()
            .then((categoria) => {
                setCategorias(categoria);
            })
            .catch((error) => {
                console.log('TRATAR ERRO AQUI');
            });
    }, []);

    return (
        <PageDefault>
            <h1>
                Cadastro de Categoria
                {categorias.titulo}
            </h1>

            <form
                onSubmit={function handleSubmit(info) {
                    info.preventDefault();
                    setCategorias([...categorias, valores]);

                    limpaInputsFormulario();
                }}
            >
                <FormField
                    label='Nome da Categoria'
                    name='titulo'
                    type='text'
                    value={valores.titulo}
                    onChange={handleMudancas}
                />

                <FormField
                    label='Descrição'
                    name='descricao'
                    type='textarea'
                    value={valores.descricao}
                    onChange={handleMudancas}
                />

                <FormField label='Cor' name='cor' type='color' value={valores.cor} onChange={handleMudancas} />

                <Button>Cadastrar</Button>
            </form>

            <ul>
                {categorias.length === 0 ? (
                    <li>carregando</li>
                ) : (
                    categorias.map((cat, indice) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <li key={`${cat}${indice}`}>{cat.titulo}</li>
                    ))
                )}
            </ul>

            <Link to='/'>Home</Link>
        </PageDefault>
    );
}

export default CadastroCategoria;
