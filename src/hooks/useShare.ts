import { useState } from "react"

export const useToggle = () => {
    const [isShare, setIsShare] = useState<boolean>(false)

    const openShare = ():void => setIsShare(true)
    const closeShare = ():void => setIsShare(false)
    const toggleShare = ():void => setIsShare(!isShare)

    return {openShare, closeShare, isShare, toggleShare}
}