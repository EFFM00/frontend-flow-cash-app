import { useFormik } from "formik";
import * as Yup from "yup";
import FieldGeneric from "../../components/FieldGeneric/FieldGeneric";
import axios from "axios";
import SpanError from "../../components/SpanError/SpanError";
import BtnSubmit from "../../components/BtnSubmit/BtnSubmit";
import { FieldGroup, FormContainer, LoginForm, PageForm } from "./styled";

const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
            .email("Email inválido")
            .required("El email es requerido"),
            password: Yup.string()
            .min(12, "La contraseña debe tener a partir de 12 caracteres")
            .max(50)
            .required("La contraseña es requerida")
        }),
        onSubmit: async (values) => {
            const url = "#";

            const headers = {
                headers: {
                    "Content-type": "application/json",
                }
            }
        
            axios.post(url, values, headers)
            .then(res => {
                console.log(res);
            })
        
            .catch(err => {
                console.log(err);
            })
        }
    })


    return(
        <PageForm>
            <FormContainer>
                <LoginForm>
                    <FieldGroup>
                        <FieldGeneric 
                        title="Email" 
                        type="email" 
                        name="email" 
                        id="email" 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} 
                        placeholder="Email"/>
                        {
                            formik.touched.email && formik.errors.email && (
                                <SpanError text={"formik.errors.email"}/>
                            )
                        }
                    </FieldGroup>

                    <FieldGroup>
                        <FieldGeneric 
                        title="Contraseña" 
                        type="password"
                        name="password"
                        id="password" 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} 
                        placeholder="Contraseña"/>
                        {
                            formik.touched.password && formik.errors.password && (
                                <SpanError text={"formik.errors.password"}/>
                            )
                        }
                    </FieldGroup>

                    <BtnSubmit type="submit" text="Iniciar sesión" onClick={() => {}} color="#59d999" colorText={"black"} ubication="center"/>
                </LoginForm>
            </FormContainer>
        </PageForm>
    );
}

export default Login