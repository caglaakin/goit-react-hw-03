import { Form, Formik, ErrorMessage, Field } from "formik";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const initialValues = {
  name: "",
  number: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short! At least 3 characters must be entered.")
    .max(50, "No more than 50 characters can be entered.")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short! At least 3 characters must be entered.")
    .max(50, "No more than 50 characters can be entered.")
    .required("Required"),
});

export default function ContactForm({onAddContact}) {
  const handleSubmit = ( values, actions ) => {
    onAddContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnBlur={true}
      validateOnChange={true}
    >
      <Form className={css.form}>
        <label className={css.formLabel} htmlFor="name">
          Name
        </label>
        <Field className={css.formInput} id="name" name="name" type="text" />
        <ErrorMessage
          className={css.errorMessage}
          name="name"
          component="div"
        />

        <label className={css.formLabel} htmlFor="number">
          Number
        </label>
        <Field
          className={css.formInput}
          id="number"
          name="number"
          type="text"
        />
        <ErrorMessage
          className={css.errorMessage}
          name="number"
          component="div"
        />

        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
