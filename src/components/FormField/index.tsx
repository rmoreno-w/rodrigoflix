import React from 'react';
import styled, { css } from 'styled-components';
import { Categoria } from '../Carousel/index';

type FormFieldProps = {
    label: string;
    name: string;
    type: string;
    value: string;
    // eslint-disable-next-line no-unused-vars
    onChange: (e: any) => void;
    categoryList?: Categoria[];
};

const FormFieldWrapper = styled.div`
    position: relative;
    textarea {
        min-height: 150px;
    }
    input[type='color'] {
        padding-left: 56px;
    }
`;

const Label = styled.label``;

const LabelText = styled.span`
    color: #e5e5e5;
    height: 57px;
    position: absolute;
    top: 0;
    left: 16px;

    display: flex;
    align-items: center;

    transform-origin: 0% 0%;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;

    transition: 0.1s ease-in-out;
`;

const Input = styled.input<Partial<FormFieldProps> & { type: string }>`
    background: #53585d;
    color: #f5f5f5;
    display: block;
    width: 100%;
    height: 57px;
    font-size: 18px;

    outline: 0;
    border: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid #53585d;

    padding: 16px 16px;
    margin-bottom: 45px;

    resize: none;
    border-radius: 4px;
    transition: border-color 0.3s;

    &:focus {
        border-bottom-color: var(--primary);
    }
    &:focus:not([type='color']) + ${LabelText} {
        transform: scale(0.6) translateY(-10px);
    }
    ${({ value }) => {
        const hasValue = value!.length > 0;
        return (
            hasValue &&
            css`
                &:not([type='color']) + ${LabelText} {
                    transform: scale(0.6) translateY(-10px);
                }
            `
        );
    }}
`;

const TextArea = styled.textarea<Partial<FormFieldProps> & { type: string }>`
    background: #53585d;
    color: #f5f5f5;
    display: block;
    width: 100%;
    height: 57px;
    font-size: 18px;

    outline: 0;
    border: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid #53585d;

    padding: 16px 16px;
    margin-bottom: 45px;

    resize: none;
    border-radius: 4px;
    transition: border-color 0.3s;

    &:focus {
        border-bottom-color: var(--primary);
    }
    &:focus:not([type='color']) + ${LabelText} {
        transform: scale(0.6) translateY(-10px);
    }
    ${({ value }) => {
        const hasValue = value!.length > 0;
        return (
            hasValue &&
            css`
                &:not([type='color']) + ${LabelText} {
                    transform: scale(0.6) translateY(-10px);
                }
            `
        );
    }}
`;

const Select = styled.select<Partial<FormFieldProps> & { id: string }>`
    background: #53585d;
    color: #f5f5f5;
    display: block;
    width: 100%;
    height: 57px;
    font-size: 18px;

    outline: 0;
    border: 0;

    padding: 16px 16px;
    margin-bottom: 45px;

    resize: none;
    border-radius: 4px;
    transition: border-color 0.3s;

    &:focus {
        border-bottom-color: var(--primary);
    }

    &:focus + ${LabelText} {
        transform: scale(0.6) translateY(-10px);
    }
    ${({ value }) => {
        const hasValue = value!.length > 0;
        return (
            hasValue &&
            css`
                &:not([type='color']) + ${LabelText} {
                    transform: scale(0.6) translateY(-10px);
                }
            `
        );
    }}
`;

function FormField({ label, type, name, value, onChange, categoryList }: FormFieldProps) {
    const fieldID = `id_${name}`;

    type itemDeObjetoComChaveString = {
        [key: string]: string;
    };

    // Cria a variavel tagType que compara o tipo recebido com os campos do objeto e denota a tag HTML a ser criada
    const tagType: itemDeObjetoComChaveString = {
        textarea: 'textarea',
        select: 'select',
        text: 'input',
    };

    const tag = tagType[type];

    return (
        <FormFieldWrapper>
            {(tag === 'select' && (
                <Label htmlFor={fieldID}>
                    <Select name={name} id={fieldID} value={value} onChange={onChange}>
                        <option value='' hidden>
                            {' '}
                        </option>
                        {categoryList!.map((categoriaAtual: Categoria) => (
                            <option key={categoriaAtual.id} value={categoriaAtual.titulo}>
                                {categoriaAtual.titulo}
                            </option>
                        ))}
                    </Select>
                    <LabelText>{label}:</LabelText>
                </Label>
            )) ||
                (tag === 'input' && (
                    <Label htmlFor={fieldID}>
                        <Input
                            id={fieldID}
                            value={value}
                            type={type}
                            name={name}
                            onChange={onChange}
                            categoryList={categoryList}
                        />
                        <LabelText>{label}:</LabelText>
                    </Label>
                )) ||
                (tag === 'textarea' && (
                    <Label htmlFor={fieldID}>
                        <TextArea id={fieldID} value={value} type={type} name={name} onChange={onChange} />
                        <LabelText>{label}:</LabelText>
                    </Label>
                ))}
        </FormFieldWrapper>
    );
}

export default FormField;
