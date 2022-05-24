import { useState } from "react";


export interface loginInterface {
    email: string;
    password: string;
}

// useForm functional component
export const useForm = (callback: any, initialState: loginInterface) => {
    const [values, setValues] = useState<loginInterface>(initialState);

// onChange
const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
};

// onSubmit
const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callback(); // triggering the callback
};


// return values
return {
    onChange,
    onSubmit,
    values,
};
}

