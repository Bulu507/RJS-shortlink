import { useState } from 'react';

const useForm = (data) => {
    const [values, setValues] = useState(data);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name] : value
        })
    }

    console.log(values);

    return{
        values,
        handleChange,
        setValues
    }
}

export default useForm;