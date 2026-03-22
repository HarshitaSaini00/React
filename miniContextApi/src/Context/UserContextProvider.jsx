import React from 'react'
import UserContext from "./UserContext"

const UserContextProvider =({children}) =>{ // yahan humne UserContextProvider ko ek component banaya hai jisme humne children ko as a props pass kiya hai
    const [user,setUser]=React.useState(null) // yahan humne user state banaya hai jisme humne initial value null di hai aur setUser function banaya hai jisse hum user state ko update kar sakte hai
    return( // yahan humne UserContext.provider ko use kiya hai jisme humne value prop me user aur setUser ko pass kiya hai jisse hum user state ko context ke through access kar sakte hai
        <UserContext.Provider value={{user,setUser}}>
            {children} 
        </UserContext.Provider>// yahan humne UserContext.provider ko close kiya hai
    ) /*yahan humne children ko render kiya hai jisse hum UserContextProvider ke andar jo bhi component hoga wo children ke through render hoga aur usme user state ko access kar sakta hai*/

}

export default UserContextProvider;