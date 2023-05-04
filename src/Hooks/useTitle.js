import { useEffect } from "react"

const useTitle = (title) => {
useEffect(() => {
    window.document.title = `${title} - Dragon News`;
},[title])
}


export default useTitle;