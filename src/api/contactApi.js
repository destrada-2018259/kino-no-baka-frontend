import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
const URL = "http://localhost:8085/api/service/"

export const contactApi = async(name, email, message) => {
    try{
        const response = await axios.post(`${URL}send`,{
            to: email,
            name
        })

        if(response){
            toast.success('Message Sent!',{
                position: "bottom-right"
            })
        }
    } catch(error){
        console.log(error)
    }
    try{
        await axios.post(`${URL}notification`,{
            email,
            name,
            message
        })
    } catch(error){
        console.log(error)
    }
}
