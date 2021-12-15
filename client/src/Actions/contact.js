import axios from "axios";
import store from "../store";
import types from "../Types/types";
import apiUrls from "../services/ApiUrls";

export const getAllContact = async (token) => {
  try {
      return await axios.get(apiUrls.contact,{
          headers: {
            'Content-Type': 'application/json',
            token: token
        } 
      }).then(response => {
        if(response.data){
            store.dispatch({
              type: types.GET_ALL_CONTACT_SUCCESS,
              payload: response.data
            });
        }else{
          store.dispatch({
            type: types.GET_ALL_CONTACT_FAIL,
            payload: response.data
          })
        }
      })
  } catch (error) {
      console.log(error.response.data);
  }
}

export const addContact = async (e,token,email,firstname,lastname) => {
    e.preventDefault()
    try {
        return await axios.post(apiUrls.contact,{
          email: email,
          firstname: firstname,
          lastname : lastname 
          },
          {
            headers: {
              'Content-Type': 'application/json',
              token: token
          }
          
        }).then(response => {
          console.log(response.data);
          if(response.data){
              store.dispatch({
                type: types.ADD_CONTACT_SUCCESS,
                payload: response.data
              });
          }else{
            store.dispatch({
              type: types.ADD_CONTACT_FAIL,
              payload: response.data
            })
          }
        })
    } catch (error) {
        console.log(error.response.data);
    }
}

export const deleteContact = async (e,token,email) => {
  e.preventDefault()
  try {
      return await axios.delete(apiUrls.contact,{
        email: email
        },
        {
          headers: {
            'Content-Type': 'application/json',
            token: token
        }
      }).then(response => {
        if(response.data){
            store.dispatch({
              type: types.DELETE_CONTACT_SUCCESS,
            })
            store.dispatch({
              type: types.SET_MESSAGE,
              payload: response.data
            })
        }else{
          store.dispatch({
            type: types.DELETE_CONTACT_FAIL,
            payload: response.data
          })
        }
      })
  } catch (error) {
      console.log(error.response.data);
  }
}

export const deleteAllContact = async (e,token) => {
  e.preventDefault()
  try {
    if(token){
      return await axios.delete(apiUrls.allContact,{
        headers: {
          token: token
        }
      }).then(response => {
          if(response.data){
            store.dispatch({
              type: types.DELETE_ALL_CONTACT_SUCCESS,
            })
            store.dispatch({
              type: types.SET_MESSAGE,
              payload: response.data
            })
          }else{
            store.dispatch({
              type: types.DELETE_ALL_CONTACT_FAIL,
              payload: response.data
            })
          }
      })
    } 
  } catch (error) {
      console.log(error.response.data);
  }
}
