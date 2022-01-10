import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../PageDefault';
import FormField from '../../../components/FormField';
import { Button, ButtonContainer, ClearButton } from '../../../components/Buttons';
import useForm, { Categoria } from '../../../hooks';
import categoriasRepository from '../../../repositories/categorias';
import CategoriesTable from '../../../components/CategoriesTable';
import { Categoria as CategoriaCompleta } from '../../../components/Carousel';

function CadastroCategoria() {
    const objInicialCategorias: Categoria = {
        titulo: '',
        descricao: '',
        cor: '#624CAB',
    };

    const { valores, handleMudancas, limpaInputsFormulario } = useForm(objInicialCategorias);
    const [categorias, setCategorias] = useState<CategoriaCompleta[]>([]);

    useEffect(() => {
        categoriasRepository
            .getAllCategsWithVideos()
            .then((categoriasRecebidas: CategoriaCompleta[]) => {
                console.log(categoriasRecebidas);
                // const categoriasSimplificadas: Categoria[] = [];
                // categoriasRecebidas.forEach((categoria) => {
                //     categoriasSimplificadas.push({
                //         titulo: categoria.titulo,
                //         descricao: categoria.link_extra.text,
                //         cor: categoria.cor,
                //     });
                // });
                setCategorias(categoriasRecebidas);
            })
            .catch((error) => {
                console.log('TRATAR ERRO AQUI');
            });
    }, []);

    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>

            <form
                onSubmit={function handleSubmit(info) {
                    info.preventDefault();
                    setCategorias([
                        ...categorias,
                        {
                            cor: valores.cor,
                            id: '',
                            titulo: valores.titulo,
                            link_extra: {
                                text: valores.descricao,
                                url: '',
                            },
                            videos: [],
                        },
                    ]);

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

                <ButtonContainer>
                    <Button>Cadastrar</Button>
                    <ClearButton onClick={limpaInputsFormulario} type='button'>
                        Limpar
                    </ClearButton>
                </ButtonContainer>
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
            <CategoriesTable receivedCategories={categorias} />
        </PageDefault>
    );
}

export default CadastroCategoria;
