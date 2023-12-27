import { useFormik } from "formik";
import * as Yup from "yup";
import FieldGeneric from "../../components/FieldGeneric/FieldGeneric";
import axios from "axios";
import SpanError from "../../components/SpanError/SpanError";
import BtnSubmit from "../../components/BtnSubmit/BtnSubmit";
import { FieldGroup, FormContainer, LoginForm, PageForm } from "./styled";
import TitleSection from "../../components/TitleSection/TitleSection";
import LinkText from "../../components/LinkText/LinkText";

const Register = () => {

    const formik = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            number: "",
            document_id: ""
        },
        validationSchema: Yup.object({

            first_name: Yup.string().required("Nombre es requerido"),

            last_name: Yup.string().required("Apellido es requerido"),

            email: Yup.string()
            .email("Email inválido")
            .required("El email es requerido"),

            password: Yup.string()
            .min(12, "La contraseña debe tener a partir de 12 caracteres")
            .max(50)
            .required("La contraseña es requerida"),

            number: Yup.string().required("Es requerido un celular"),

            document_id: Yup.string().required("Es requerido el número de documento"),
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
                    <TitleSection ubication={"center"} text={"Registro"}/>
                    <FieldGroup>
                        <FieldGeneric 
                        title="Nombre" 
                        type="text" 
                        name="first_name" 
                        id="first_name" 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} 
                        placeholder="Nombre"/>
                        {
                            formik.touched.first_name && formik.errors.first_name && (
                                <SpanError text={formik.errors.first_name}/>
                            )
                        }
                    </FieldGroup>

                    <FieldGroup>
                        <FieldGeneric 
                        title="Apellido" 
                        type="text" 
                        name="last_name" 
                        id="last_name" 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} 
                        placeholder="Apellido"/>
                        {
                            formik.touched.last_name && formik.errors.last_name && (
                                <SpanError text={formik.errors.last_name}/>
                            )
                        }
                    </FieldGroup>

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
                                <SpanError text={formik.errors.email}/>
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
                                <SpanError text={formik.errors.password}/>
                            )
                        }
                    </FieldGroup>

                    <LinkText text="¿No tienes cuenta? Créala acá" path="/register" ubication="left"/>

                    <BtnSubmit type="submit" text="Iniciar sesión" onClick={() => {}} color="#59d999" colorText={"black"} ubication="center"/>
                </LoginForm>
            </FormContainer>
        </PageForm>
    );
}

export default Register