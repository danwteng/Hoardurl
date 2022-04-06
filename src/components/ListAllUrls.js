import React, { Fragment, useEffect, useState } from 'react';

const ListAllUrls = () => {

  const getAllUrls = async() =>{
    try {
      const response = await fetch('/')
      // const jsonData = await response.json()
      console.log('DID IT WORK HERE?')
      console.log('this is jsondata', response)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getAllUrls();
  })

  return (<Fragment>
    <h1>ALL HOARDED URLS</h1>
  <table className="table">
      <thead>
        <tr>
          <td>Title</td>
          <td>Description</td>
          <td>URL</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>
  </Fragment>
  );
}

export default ListAllUrls;