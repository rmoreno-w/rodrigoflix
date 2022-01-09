import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks';
import categoriasRepository from '../../../repositories/categorias';
import { Categoria } from '../../../hooks';

function CadastroCategoria() {
    const objInicialCategorias: Categoria = {
        titulo: '',
        descricao: '',
        cor: '#624CAB',
    };

    const { valores, handleMudancas, limpaInputsFormulario } = useForm(objInicialCategorias);
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    useEffect(() => {
        categoriasRepository
            .getAllCategsWithVideos()
            .then((categoriasRecebidas: Categoria[]) => {
                setCategorias(categoriasRecebidas);
            })
            .catch((error) => {
                console.log('TRATAR ERRO AQUI');
            });
    }, []);

    return (
        <PageDefault>
            <h1>
                Cadastro de Categoria
                {valores.titulo}
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
                    onChange={(e: any) => handleMudancas('titulo', e)}
                />

                <FormField
                    label='Descrição'
                    name='descricao'
                    type='textarea'
                    value={valores.descricao}
                    onChange={(e: any) => handleMudancas('descricao', e)}
                />

                <FormField
                    label='Cor'
                    name='cor'
                    type='color'
                    value={valores.cor}
                    onChange={(e: any) => handleMudancas('cor', e)}
                />

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
