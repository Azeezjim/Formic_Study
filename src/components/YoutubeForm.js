import React from 'react'

function YoutubeForm() {
  return (
    <div>
    <form>
      <label thmlFor="">Name</label>
      <input type="text" id='name' name='name' />

      <label thmlFor="">E-mail</label>
      <input type="email" id='email' name='email' />
      
      <label thmlFor="">Channel</label>
      <input type="text" id='channel' name='channel' />
    </form>
    </div>
  )
}

export default YoutubeForm