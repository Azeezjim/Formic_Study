import  React,  { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import TextError from "./TextError";
import * as Yup from "yup";
// import { validate } from "json-schema";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  socials: {
    facebook: "",
    twitter: "",
  },
  phoneNumber: ["", ""],
  PNA: [""],
};
const savedValues = {
  name: "Azeezjim",
  email: "azeexjim@gmail.com",
  channel: "Code Evolution",
  comments: "Let's study today",
  address: "",
  socials: {
    facebook: "",
    twitter: "",
  },
  phoneNumber: ["", ""],
  PNA: [""],
};


const onSubmit = (values) => {
  console.log("form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required Jor"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});

// const validationSchema = Yup.object({
//   name: Yup.string().required('Required'),     
//   email: Yup.string()
//     .email('Invalid email format')
//     .required('Required'),
//   channel: Yup.string().required('Required')
// })
const comVaidate = (value) => {
  let error;
  if(!value) {
    error =  "Required"
  }
  return error
}
function OldYoutubeForm() {
  const [formValue, setFormValue] = useState(null)
  
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit, 
  //   // validate,
  //   validationSchema
  // });
  // console.log("form error", formik.errors);

  return (
    <Formik
      initialValues={formValue || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {formik => {
        console.log("formik", formik       )
        return(

      <Form>
        <div classNam e="form-control">
          <label html        For="name">Name</label>
          <Field
            type="text"
            id="name"
            name="name"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.name}
          />
        </div>
        <ErrorMessage component={TextError} name="name" />
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
          <Field type="text" id="comments" name="comments" as="textarea" validate = {comVaidate} />
          <ErrorMessage name="comments" component={TextError} >
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
        </div>
        <div class="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {(props) => {
              const { field, meta } = props;
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
        </div>
        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <Field type="text" id="facebook" name="facebook" />
        </div>

        <div className="form-control">
          <label htmlFor="twitter">Tywitter</label>
          <Field type="text" id="twitter" name="twitter" />
        </div>

        <div class="form-control">
          <label htmlFor="primaryPNo">primaryPNo</label>
          <Field type="text" id="primaryPNo" name="phoneNumber[1]" />
        </div>
        <div class="form-control">
          <label >PNA</label>
          <FieldArray name="PNA">
            {(fieldArrayProps) => {
              const { push, remove, form } = fieldArrayProps;
              const { values } = form;
              const { PNA } = values;
              return <div> 
                {PNA.map((phoneNumber, index) => (
                    <div key={index}>
                        <Field name={`PNA[${index}]`}/>
                        <button type="button" onClick={() => remove(index)} > - </button>
                        <button type="button" onClick={() => push('')} > + </button>

                    </div>
                  ))}  
              </div>;
            }}
          </FieldArray>
        </div>
        {/* <button type='button' onClick={() => formik.validateForm('comment')}>Validate Comment</button>
        <button type='button' onClick={() => formik.validateField()}>Validate All</button>
        <button type='button' onClick={() => formik.setFieldTouched('comment')}>Visit Comment</button>
        <button type='button' onClick={() => fo+rmik. setTouched(
          {
            name: true,
            email: true,
            channel: true,
            comments: false

          }
        )}>Visit Fildes</button> */}
        <button type="reset">Reset</button>
        <button type="button" onClick={() => setFormValue(savedValues)}>Load Saved Data</button>
        <button type="submit" disabled={!formik.isValid }>Submit</button>
      </Form>
        )
      }}
    </Formik>
  );
}

export default OldYoutubeForm;
