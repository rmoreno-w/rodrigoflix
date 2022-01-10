import React from 'react';
import styled from 'styled-components';
import { Categoria } from '../Carousel';

const TableWrapper = styled.table`
    width: 100%;
    margin-top: 2em;
    border: 2px solid var(--primary);
    border-collapse: collapse;

    td {
        padding: 0.5rem;
    }

    @media (max-width: 800px) {
        visibility: hidden;
    }
`;

const TableHeadData = styled.td`
    border: 2px solid var(--primary);
`;

type CategoriesTableProps = {
    receivedCategories: Categoria[];
};

export default function CategoriesTable({ receivedCategories }: CategoriesTableProps) {
    return (
        <TableWrapper>
            <thead>
                <tr>
                    <TableHeadData>Nome</TableHeadData>
                    <TableHeadData>Descricao</TableHeadData>
                    <TableHeadData>Editar</TableHeadData>
                    <TableHeadData>Remover</TableHeadData>
                </tr>
            </thead>

            <tbody>
                {receivedCategories.map((categoria) => (
                    <tr key={categoria.cor}>
                        <td>{categoria.titulo}</td>
                        {categoria.link_extra ? <td>{categoria.link_extra.text}</td> : <td>-</td>}
                    </tr>
                ))}
            </tbody>
        </TableWrapper>
    );
}
