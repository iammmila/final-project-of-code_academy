import * as yup from 'yup';

export const postFormSchema = yup.object().shape({
    name: yup
        .string("name must be string").required("name is required"),
    information: yup
        .string("information must be string").required("information is required"),
    image: yup
        .string("image should be string")
        .required("image is required")
})