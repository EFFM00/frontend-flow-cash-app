import { useFormik } from "formik";
import * as Yup from "yup";
import FieldGeneric from "../../components/FieldGeneric/FieldGeneric";
import axios from "axios";
import SpanError from "../../components/SpanError/SpanError";
import BtnSubmit from "../../components/BtnSubmit/BtnSubmit";
import { FieldGroup, FormContainer, LoginForm, PageForm } from "./styled";
import TitleSection from "../../components/TitleSection/TitleSection";
import LinkText from "../../components/LinkText/LinkText";
import AuthLayout from "../../components/AuthLayout";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { loginUser } from "../../service/authService";
import FieldPassword from "../../components/FieldPassword/FieldPassword";

const Login = () => {

    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

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
            dispatch(loginUser(values))
            .then(res => {
                console.log(res);
            })
        
            .catch(err => {
                console.log(err);
            })
        }
    })

    return(
        <AuthLayout authentication={false}>
            <PageForm>
                <FormContainer>
                    <LoginForm onSubmit={formik.handleSubmit}>
                        <TitleSection ubication={"center"} text={"Login"}/>
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
                            <FieldPassword
                            title="Contraseña"
                            name="password"
                            id="password" 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur} 
                            placeholder="Contraseña"
                            conditionalType={showPassword}
                            onClickEye={togglePasswordVisibility}
                            />
                            
                            {/* <FieldGeneric 
                            title="Contraseña" 
                            type={showPassword ? 'text' : 'password'}
                            // type="password"
                            name="password"
                            id="password" 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur} 
                            placeholder="Contraseña"/> */}

                            {
                                formik.touched.password && formik.errors.password && (
                                    <SpanError text={formik.errors.password}/>
                                )
                            }
                        </FieldGroup>

                        <LinkText text="¿No tienes cuenta? Créala acá" path="/register" ubication="left"/>

                        <BtnSubmit type="submit" text="Iniciar sesión" disabled={!formik.isValid} color="#59d999" colorText={"black"} ubication="center"/>
                    </LoginForm>
                </FormContainer>
            </PageForm>
        </AuthLayout>
    );
}

export default Login