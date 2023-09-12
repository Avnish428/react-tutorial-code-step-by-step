import React, { createContext, useContext, useState } from "react";
const ChatContext = createContext();

const Provider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState("avnish")
    const [age,setAge] = useState(24)

    return (
        <ChatContext.Provider
            value={{
                count, setCount,
                data, setData,
                age,setAge
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export const ProviderState = () => {
    return useContext(ChatContext);
};

export default Provider;
