import React, {useState} from 'react'
import PageDefault from '../../PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    
    const objInicialCategorias = {
        nome: '',
        descricao: '',
        cor: ''
    }

    const [novaCategoria, setNovaCategoria] = useState(objInicialCategorias);

    const [categorias, setCategorias] = useState([]);

    function setNovaCat(chave, valor) {
        setNovaCategoria({...novaCategoria,
        [chave]: valor});   // [] é a forma de fazer a atribuicao do valor da chave também ser dinamico
    }

    function funcaoDisparada (evento) {
        setNovaCat(evento.target.getAttribute('name'),
        evento.target.value)
    }
    
    return (
        <PageDefault>
             <h1>Cadastro de Categoria {categorias.nome}</h1>

                <form onSubmit={function handleSubmit(info){
                    info.preventDefault();
                    setCategorias([
                        ...categorias,novaCategoria]);

                    setNovaCategoria(objInicialCategorias)
                    }}>
                    
                    <FormField label="Nome da Categoria: " name="nome" type="text" value={novaCategoria.nome} onChange={funcaoDisparada}/>

                    <FormField label="Descrição: " name="descricao" type="textarea" value={novaCategoria.descricao} onChange={funcaoDisparada}/>

                    <FormField label="Cor: " name="cor" type="color" value={novaCategoria.cor} onChange={funcaoDisparada}/>

                    <button>Cadastrar</button>
                </form>

                <ul>
                    { categorias.map((cat, indice) => {
                        return (
                            <li key={`${cat}${indice}`}>{cat.nome}</li>
                        )
                    })}
                </ul>

             <Link to="/">
                 Home
             </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;