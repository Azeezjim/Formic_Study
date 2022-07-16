import React from 'react';
import { useFormik } from 'formik'

function YoutubeForm() {
  const formik = useFormik({
    initialValues: {
      name: '', 
      email: '',
      channel: ''
    },
    onSubmit: values => {
      console.log('form data', values);
    },
    
    validate:  values => {
      let errors = {}
        if(!values.name) {
          errors.name = 'Required'
        }

      if(!values.email) {
        errors.elail = 'Required'
      } else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) {
        errors.email= 'Invalade email format'
      }

      if(!values.channel) {
        error.channel = 'Required'
      }
      
    }
  })
  return (
    <div>
    <form onSubmit={formik.handleSubmit}>
      <label thmlFor="name">Name</label>
      <input type="text" id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />

      <label thmlFor="email">E-mail</label>
      <input type="email" id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
      
      <label thmlFor="channel ">Channel</label>
      <input type="text" id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel} />

      <button>Submit</button>
    </form>
    </div>
  )
}

export default YoutubeForm