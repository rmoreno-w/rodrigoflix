import React, { useState } from 'react';

export interface Video {
    titulo: string;
    url: string;
    categoria: string;
}

export interface Categoria {
    cor: string;
    titulo: string;
    descricao: string;
}

// type TipoObjetoRecebido = Categoria | Video;
// type TipoObjetoRecebido = {
//     [K of possibleKeys]: string
// }

export default function useForm<TipoObjetoRecebido extends Categoria | Video>(valoresIniciais: TipoObjetoRecebido) {
    const [valores, setValores] = useState(valoresIniciais);

    function setField(chave: keyof TipoObjetoRecebido, valor: string) {
        setValores({
            ...valores,
            [chave]: valor,
        }); // [] é a forma de fazer a atribuicao do valor da chave também ser dinamico
    }

    function handleMudancas(fieldName: keyof TipoObjetoRecebido, evento: React.ChangeEvent<HTMLInputElement>) {
        setField(fieldName, evento.target.value);
    }

    function limpaInputsFormulario() {
        setValores(valoresIniciais);
    }

    return { valores, handleMudancas, limpaInputsFormulario };
}
