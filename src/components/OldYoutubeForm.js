import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
// import { validate } from "json-schema";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: ""
};

const onSubmit = values => {
  // console.log("form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required Jor'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('Required')
})

// const validationSchema = Yup.object({
//   name: Yup.string().required('Required'),
//   email: Yup.string()
//     .email('Invalid email format')
//     .required('Required'),
//   channel: Yup.string().required('Required')
// })
function OldYoutubeForm() {
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   // validate, 
  //   validationSchema
  // });
  // console.log("form error", formik.errors);

  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
      <Form >
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            id="name"
            name="name"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.name}
          />
        </div>
          <ErrorMessage className='name' name="name" />
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field
            type="email"
            id="email"
            name="email"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.email}
          />
          <ErrorMessage className='error  ' name="email" />
        </div>
        <div className="form-control">
          <label htmlFor="channel ">Channel</label>
          <Field
            type="text"
            id="channel"
            name="channel"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.channel}
          />
          <ErrorMessage className='name' name="channel" />
        </div>

        <div className="form-control">
          <label htmlFor="comments"></label>
          <Field 
          type="text"
          id="comments"
          name="comments"
          as="textarea"
          />

        </div>
        <button type="button">Submit</button>
      </Form>
    </Formik>
  );
}

export default OldYoutubeForm;
