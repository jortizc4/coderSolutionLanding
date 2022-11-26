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
    <SectionContainer contact>
      <h2>Contact us!</h2>

      <p>
        Let's get the conversation started. Tell us a bit about yourself, and
        we'll be in touch soon
      </p>

      <FormContainer>
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          onSubmit={onFormikSubmit}
          validationSchema={ContactSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <label>Name:</label>
              <Field
                type="text"
                name="name"
                placeholder="Name"
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
              <label>Message:</label>
              <Field
                name="message"
                as="textarea"
                placeholder="message"
                className={errors.message && touched.message && "error"}
              />
              {errors.message && touched.message && (
                <ErrorMessage>
                    <img src={errorImg} alt='error alert'/>
                    {errors.message}</ErrorMessage>
              )}
              <Button as="button" type="submit">
                Submit
              </Button>
                <ToastContainer />
            </Form>
          )}
        </Formik>


      </FormContainer>

    </SectionContainer>
  );
};
