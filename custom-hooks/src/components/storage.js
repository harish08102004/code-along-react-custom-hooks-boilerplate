import {useEffect } from "react";

const Storage=(data)=>{
    useEffect(()=>{
        localStorage.setItem('content', data);
        sessionStorage.setItem('content', data);
    },[data])
}

export default Storage;