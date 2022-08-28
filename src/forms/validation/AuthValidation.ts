import * as yup from 'yup';

export const authValidation = yup.object().shape({
    email: yup.string().email(),
    password: yup.string().min(8)
})