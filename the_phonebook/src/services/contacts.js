/*jslint es6 */
import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
 'use-strict';
  const request = axios.get(baseUrl);
  const nonExisting = {
    id: 10000,
    content: 'This note is not saved to server',
    date: '2019-05-30T17:30:31.098Z'
  };
  return request.then((response) => response.data.concat(nonExisting))
};

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}
const remove = id  =>{
    //Get the id or name by filtering
    // remove the perons selecte
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
  //console.log("url link",`${baseUrl}/${id}`)
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, create, update, remove }