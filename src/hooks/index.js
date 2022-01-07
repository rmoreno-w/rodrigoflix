import { useState } from 'react';

export default function useForm(valoresIniciais) {
    const [valores, setValores] = useState(valoresIniciais);

    function setField(chave, valor) {
        setValores({
            ...valores,
            [chave]: valor,
        }); // [] é a forma de fazer a atribuicao do valor da chave também ser dinamico
    }

    function handleMudancas(evento) {
        setField(evento.target.getAttribute('name'), evento.target.value);
    }

    function limpaInputsFormulario() {
        setValores(valoresIniciais);
    }

    return { valores, handleMudancas, limpaInputsFormulario };
}
