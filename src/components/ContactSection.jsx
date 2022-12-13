import {
  Button,
  SectionContainer,
  ErrorMessage,
  FormContainer,
    ContactInfo
} from "./styles/styledComponents.js";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import errorImg from '../assets/error.svg'
const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Let us know your name"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Leave us a message"),
});

import { Field, Formik, Form } from "formik";
export const ContactSection = () => {
  const onFormikSubmit = () => {
      toast.success('We will be in contact soon!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      });
  };

  return (
    <SectionContainer contact id="contact">
      <h2>Contacto</h2>

      <p>
        Cuéntanos mas acerca de tu proyecto para ponernos en contacto
      </p>

      <FormContainer>
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          onSubmit={onFormikSubmit}
          validationSchema={ContactSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <label>Nombre:</label>
              <Field
                type="text"
                name="name"
                placeholder="Nombre"
                className={errors.name && touched.name && "error"}
              />
              {errors.name && touched.name && (
                <ErrorMessage>
                    <img src={errorImg} alt='error alert'/>
                    {errors.name}</ErrorMessage>
              )}
              <label>Email:</label>
              <Field
                type="email"
                name="email"
                placeholder="email"
                className={errors.email && touched.email && "error"}
              />
              {errors.email && touched.email && (
                <ErrorMessage>
                    <img src={errorImg} alt='error alert'/>
                    {errors.email}</ErrorMessage>
              )}
              <label>Mensaje:</label>
              <Field
                name="message"
                as="textarea"
                placeholder="mensaje"
                className={errors.message && touched.message && "error"}
              />
              {errors.message && touched.message && (
                <ErrorMessage>
                    <img src={errorImg} alt='error alert'/>
                    {errors.message}</ErrorMessage>
              )}
              <Button as="button" type="submit">
                Enviar
              </Button>
                <ToastContainer />
            </Form>
          )}
        </Formik>


      </FormContainer>

    </SectionContainer>
  );
};
