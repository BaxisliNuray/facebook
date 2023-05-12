import * as yup from "yup"

const PASSWORD=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/

export const Validation=yup.object().shape({
    name:yup.string().min(4).required("What's your name?"),
    lastname:yup.string().required("What's your name?"),
    phonenum:yup.number().required("Error"),
    password:yup.string().matches(PASSWORD,"1 uppercase ,1lowercase,1specil,1number,min 8,max 30 character can be added").required("Yene aerror"),
    female:yup.boolean().oneOf([false]).required("ve yene error"),
    male:yup.boolean().oneOf([true]).required("ve yene error")




})