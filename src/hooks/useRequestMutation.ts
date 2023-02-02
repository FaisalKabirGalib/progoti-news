import {push,ref,remove} from 'firebase/database'
import firebaseApp from '../firebase'
import useMutation from "swr/mutation";
export const usePushToFirebase = (firebaseNode:string)=>{

        const getRequestFunction = (key:any =firebaseNode, {
            arg: {path, data }
        }:{
            arg:{data:any; path:string}
        })=> push(ref(firebaseApp.db, path), data)
        return useMutation(firebaseNode,getRequestFunction)
}



export const useDeleteFromFirebase = (firebaseNode:string)=>{
    const getRequestFunction = (key:any =firebaseNode, {
        arg: {path }
    }:{
        arg:{ path:string}
    })=> remove(ref(firebaseApp.db, path))
    return useMutation(firebaseNode,getRequestFunction)
}