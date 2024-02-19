import { useFormik } from "formik";
import * as Yup from "yup";
import FieldGeneric from "../../components/FieldGeneric/FieldGeneric";
import { useCookies } from 'react-cookie';
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
import CheckRememberPwd from "../../components/CheckRememberPwd/CheckRememberPwd";

const Login = () => {

    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);
    const [rememberPassword, setRememberPassword] = useState(false);
    const [cookies, setCookie] = useCookies(['user']);

    const toggleRememberPwd = () => {
        setRememberPassword(!rememberPassword)
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const markCheckIfRememberTrue = () => {
        cookies.email && cookies.password && setRememberPassword(true)
    }

    const savePasswordCookie = (email, password) => {

        const options = {
            path: '/',
            secure: true,
            sameSite: 'strict',
            domain: import.meta.env.VITE_REACT_APP_DOMAIN
        };

        setCookie('email', email, options);
        setCookie('password', password, options)
    }

    useEffect(() => {
        markCheckIfRememberTrue()
    }, [cookies])
    

    const formik = useFormik({
        initialValues: {
            email: cookies.email ?? "",
            password: cookies.password ?? "",
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

            const {email, password} = values

            rememberPassword && savePasswordCookie(email, password);

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
                            placeholder="Email"
                            value={cookies.email}
                            />
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
                            value={cookies.password}
                            />

                            {
                                formik.touched.password && formik.errors.password && (
                                    <SpanError text={formik.errors.password}/>
                                )
                            }
                        </FieldGroup>

                        <CheckRememberPwd value={rememberPassword} onClick={toggleRememberPwd} title="Recordar contraseña" checked={rememberPassword}/>

                        <LinkText text="¿No tienes cuenta? Créala acá" path="/register" ubication="left"/>

                        <BtnSubmit type="submit" text="Iniciar sesión" disabled={!formik.isValid} color="#59d999" colorText={"black"} ubication="center"/>
                    </LoginForm>
                </FormContainer>
            </PageForm>
        </AuthLayout>
    );
}

export default Login