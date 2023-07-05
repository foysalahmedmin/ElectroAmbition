import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `ElectroAmbition | ${title}` ;
    }, [title])
}

export default useTitle ;