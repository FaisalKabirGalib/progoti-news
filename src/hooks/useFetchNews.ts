import {get, ref } from 'firebase/database'
import firebaseApp from '../firebase'
import useSWR from 'swr'


const useFetchNews = (firebaseNode:string) => {

    const getRequestFunction = ()=> get(ref(firebaseApp.db, firebaseNode))
    
    return useSWR(firebaseNode,getRequestFunction,)
}

export default useFetchNews  