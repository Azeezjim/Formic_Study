import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import * as Yup from 'yup';
// import { validate } from "json-schema";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  socials : {
    facebook: "",
    twitter: ""
  },
  phoneNumber: ['', '']
};

const onSubmit = values => {
  console.log("form data", values);
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
          <ErrorMessage component={TextError}  name="name" />
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
          <ErrorMessage component={TextError} name="email" />
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
          <ErrorMessage component={TextError} name="channel" />
        </div>

        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field 
          type="text"
          id="comments"
          name="comments"
          as="textarea"
          />
          <ErrorMessage name='comments'>
            {errorMsg => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
        </div>
        <div class="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {props => {
              const { field, meta } = props
              return (
                <div>
                  <input type= "text" id="address" { ...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              )
            }}  
            
          </Field>
        </div>
        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <Field type='text' id='facebook' name='facebook'/>
        </div>

        <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          <Field type='text' id='twitter' name='twitter'/>
        </div>

        <div class="form-control">
          <label htmlFor="primaryPNo">primaryPNo</label>
          <Field type='text' id='primaryPNo' name='phoneNumber[1]' />
        </div>
        <div class="form-control">
          <label htmlFor="SecondaryPNo">SecondaryPNo</label>
          <Field type='text' id='SecondaryPNo' name='phoneNumber[1]' />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default OldYoutubeForm;
