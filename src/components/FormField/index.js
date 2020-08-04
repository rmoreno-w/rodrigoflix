import React from 'react';

function FormField({label, type, name, value, onChange}) {

    return(
        <div>
            <label> {label}
                        <input value={value} type={type} name={name} onChange={onChange} />
            </label>
        </div>
        
    )
}


export default FormField;