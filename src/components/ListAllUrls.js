import React, { Fragment, useEffect, useState } from 'react';

const ListAllUrls = () => {
  const [allUrls, setAllUrls] = useState([])

  //delete Function to remove the entry

  const deleteOneUrl = async (id) =>{
    try {
      const deleteOneUrl = await fetch(`/hoarding/${id}`, {
        method: "DELETE"
      });
      //shows just the ones that aren't being deleted
      setAllUrls(allUrls.filter(url => url.hoardedurls_id !== id))
    } catch (error) {
      console.log(error.message)
    }
  }

  //function to get data from database
  const getAllUrls = async() =>{
    try {
      const response = await fetch('/hoarding')
      const jsonData = await response.json()
      // console.log('this is jsondata', jsonData)
      setAllUrls(jsonData);
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getAllUrls();
  },[]);



  return (<Fragment>
  <table className="table">
      <tbody>
        <tr>
          <td><h3>Title</h3></td>
          <td><h3>Description</h3></td>
          <td><h3>URL</h3></td>
          <td></td>
        </tr>
        {allUrls.map( allurls => (
          <tr key={allurls.hoardedurls_id}>
            {/* <td>{allurls.hoardedurls_id}</td> */}
            <td>{allurls.title}</td>
            <td>{allurls.description}</td>
            <td><a href={allurls.url} target="_blank">Link Here</a></td>
            {/* <td>Edit</td> */}
            <td>
              <button 
              className='delButton'
              onClick={() => deleteOneUrl(allurls.hoardedurls_id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </Fragment>
  );
}

export default ListAllUrls;