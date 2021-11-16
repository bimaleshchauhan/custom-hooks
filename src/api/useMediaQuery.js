import { useState, useEffect } from "react";

const useMediaQuery = (query) =>{
    const [matches, setMatches] = useState(window.matchMedia(query).matches)

    useEffect(() =>{
        let media = window.matchMedia(query);
        if(media.matches!==matches){
            setMatches(media.matches)
        }
        let listner = () =>setMatches(media.matches);
        media.addListener(listner);
        return () => media.removeListener(listner)
    },[query]) 

    return matches;
}

export default useMediaQuery;