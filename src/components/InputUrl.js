import React, { Fragment, useState } from "react";

const InputUrl = () => {

  const [entry, setEntry] = useState({
    title: "",
    description: "",
    url: ""
  })

    //function to handle changes to the input field:
    const handleChange = (event) =>{
      const { value, name } = event.target
      // console.log('THIS IS THE EVENT', event)
      // console.log('content', name)
      // console.log('value', value)
      setEntry({
        ...entry,
        [name]: value
      })
      // console.log('ENTRY', entry)
    }
  
  const submittingEntry = async e => {
    // e.preventDefault();
    try {
      const body = {
        title: entry.title,
        description: entry.description,
        url: entry.url,
      }
      
      const response = await fetch('/hoarding',{
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(body),
      })

      console.log(response)
    } catch (error) {
        console.log(error.message)
    }
  }


  return (
    <Fragment>
      <h1>HOARDUR(L)</h1>
      <h2>What are you hoarding today?</h2>
      <form onSubmit={submittingEntry}>
          <input
            type="text" 
            placeholder="title" 
            defaultValue={entry.title}
            name='title'
            onChange={handleChange}/>
          <input
            type="text" 
            placeholder="description" 
            defaultValue={entry.description}
            name='description'
            onChange={handleChange}/>
          <input
            type="text" 
            placeholder="url" 
            defaultValue={entry.url}
            name='url'
            onChange={handleChange}/>
          <button>Add</button>
      </form>
    </Fragment>
  )
}

export default InputUrl;