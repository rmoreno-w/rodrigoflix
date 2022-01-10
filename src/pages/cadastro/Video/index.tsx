import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, ButtonContainer, ClearButton } from '../../../components/Buttons';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks';
import PageDefault from '../../PageDefault';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import { Categoria } from '../../../components/Carousel';

function CadastroVideo() {
    const history = useHistory();
    const { handleMudancas, limpaInputsFormulario, valores } = useForm({
        titulo: '',
        url: '',
        categoria: '',
    });
    const [categoriasCadastradas, setCategoriasCadastradas] = useState<Categoria[]>([]);

    useEffect(() => {
        categoriasRepository
            .getAllCategs()
            .then((categorias: Categoria[]) => {
                setCategoriasCadastradas(categorias);
            })
            // eslint-disable-next-line no-unused-vars
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log('erro pegando categoria');
            });
    }, []);

    return (
        <PageDefault>
            <h1>Cadastro de Video</h1>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    // setCategorias([...categorias, valores]);

                    // limpaInputsFormulario();
                    // eslint-disable-next-line no-alert
                    const categoriaEscolhida = categoriasCadastradas.find(
                        (categoria) => categoria.titulo === valores.categoria
                    );

                    // eslint-disable-next-line no-unused-expressions
                    categoriaEscolhida &&
                        videosRepository
                            .insertVideo({
                                titulo: valores.titulo,
                                url: valores.url,
                                categoria: categoriaEscolhida.id,
                            })
                            .then(() => {
                                // eslint-disable-next-line no-alert
                                alert('Video Cadastrado com Sucesso!!1');
                                history.push('/');
                            })
                            .catch((error) => {
                                // eslint-disable-next-line no-console
                                console.log(error);
                            });
                }}
            >
                <FormField
                    label='Titulo do Video'
                    name='titulo'
                    type='text'
                    value={valores.titulo}
                    onChange={(e) => handleMudancas('titulo', e)}
                />

                <FormField
                    label='URL do Video'
                    name='url'
                    type='text'
                    value={valores.url}
                    onChange={(e) => handleMudancas('url', e)}
                />

                <FormField
                    label='Categoria do Video'
                    name='categoria'
                    type='select'
                    value={valores.categoria}
                    categoryList={categoriasCadastradas}
                    onChange={(e) => handleMudancas('categoria', e)}
                />

                <ButtonContainer>
                    <Button>Cadastrar</Button>
                    <ClearButton onClick={limpaInputsFormulario} type='button'>
                        Limpar
                    </ClearButton>
                </ButtonContainer>
            </form>

            <Link to='/cadastro/categoria'>Cadastrar Categoria</Link>
        </PageDefault>
    );
}

export default CadastroVideo;
