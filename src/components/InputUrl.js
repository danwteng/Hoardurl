import React, { Fragment, useState } from "react";

const InputUrl = () => {

  const [entry, setEntry] = useState({
    title: "",
    description: "",
    url: ""
  })
  
  const submittingEntry = async e => {
    e.preventDefault();
    try {
      const body = { title }
      const response = fetch('/hoarding',{
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
      <h1> HOARDING ALL THE URLS</h1>
      <form onSubmit={submittingEntry}>
          <input
            type="text" 
            // placeholder="title" 
            defaultValue={entry.title}
            onChange={e => setEntry(e.target.value)}/>
          <input
            type="text" 
            // placeholder="description" 
            defaultValue={entry.description}
            onChange={e => setEntry(e.target.value)}/>
          <input
            type="text" 
            // placeholder="url" 
            defaultValue={entry.url}
            onChange={e => setEntry(e.target.value)}/>
          <button>Add</button>
      </form>
    </Fragment>
  )
}

export default InputUrl;