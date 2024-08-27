
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "../ContactForm/ContactForm.module.css";

const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
const ProfileValidationSchema = Yup.object().shape({
  userName: Yup.string()
    .required("Ім'я профілю є обов'язковим")
    .min(2, "Ім'я профілю має бути мінімум в 2 символи")
    .max(50, "Ім'я профілю має бути меншим за 50 символів"),
  telNumber: Yup.string()
    .matches(
      phoneRegExp,
      "Номер телефону має співпадати з форматом 'xxx-xx-xx'"
    )
    .required("Номер телефону є обов'язковий")
});

  const initialValues = {
    userName: "",
    telNumber: "",
};
  
const ContactForm = ({ onAddContact }) => {


  const handleSubmit = (values, actions) => {
    const profileObject = {
      name: values.userName,
      number: values.telNumber,
    };
    onAddContact(profileObject);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ProfileValidationSchema}
    >
      {({ errors }) => (
        <Form className={css.form}>
          <label className={css.file}>
            <span className={css.name}>Name</span>
            <Field
              type="text"
              name="userName"
              required
              className={css.userName}
            />
            <ErrorMessage
              className={css.errorText}
              name="userName"
              component="span"
            />
          </label>
          <label className={css.file}>
            <span className={css.number}>Number</span>
            <Field
              type="tel"
              name="telNumber"
              required
              className={css.userNumber}
            />

            <ErrorMessage
              className={css.errorText}
              name="telNumber"
              component="span"
            />
          </label>

          <button
            disabled={Object.keys(errors).length > 0}
            type="submit"
            className={css.submitBtn}
          >
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
