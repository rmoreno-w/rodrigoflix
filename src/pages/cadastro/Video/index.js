import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks';
import PageDefault from '../../PageDefault';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
    const history = useHistory();
    const { handleMudancas, valores } = useForm({
        titulo: '',
        url: '',
        categoria: '',
    });
    const [categoriasCadastradas, setCategoriasCadastradas] = useState([]);

    useEffect(() => {
        categoriasRepository
            .getAllCategs()
            .then((categorias) => {
                setCategoriasCadastradas(categorias);
            })
            .catch((error) => {
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
                    console.log(categoriaEscolhida);

                    videosRepository
                        .insertVideo({
                            titulo: valores.titulo,
                            url: valores.url,
                            categoriaId: categoriaEscolhida.id,
                        })
                        .then(() => {
                            alert('Video Cadastrado com Sucesso!!1');
                            history.push('/');
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }}
            >
                <FormField
                    label='Titulo do Video'
                    name='titulo'
                    type='text'
                    value={valores.titulo}
                    onChange={handleMudancas}
                />

                <FormField label='URL do Video' name='url' type='text' value={valores.url} onChange={handleMudancas} />

                <FormField
                    label='Categoria do Video'
                    name='categoria'
                    type='select'
                    value={valores.categoria}
                    categoryList={categoriasCadastradas}
                    onChange={handleMudancas}
                />

                <Button>Cadastrar</Button>
            </form>

            <Link to='/cadastro/categoria'>Cadastrar Categoria</Link>
        </PageDefault>
    );
}

export default CadastroVideo;
