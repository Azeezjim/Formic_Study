import React from 'react';
import { useFormik } from 'formik'

function YoutubeForm() {
  const formik = useFormik({
    initialValues: {
      name: '', 
      email: '',
      channel: ''
    }
  })
  return (
    <div>
    <form>
      <label thmlFor="">Name</label>
      <input type="text" id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />

      <label thmlFor="">E-mail</label>
      <input type="email" id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
      
      <label thmlFor="">Channel</label>
      <input type="text" id='channel' name='channel' onChange={formik.handleChange} value={formik.balues.channel} />
    </form>
    </div>
  )
}








  
+

export default YoutubeForm