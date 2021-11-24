import React, { useEffect, createContext, useReducer } from 'react'
import { ChatBotReducer, InitialChatBotState } from '~/reducers/chatbot-reducer'
import ChatBotStates from '~/tools/constants'

const ChatBotContext = createContext(undefined)

export default ChatBotContext

export function ChatBotProvider ({ children }) {
    const [state, dispatch] = useReducer(ChatBotReducer, InitialChatBotState)
    const reducer = { dispatch, state, ChatBotStates }
    useEffect(() => { }, [])

    return (
        <ChatBotContext.Provider value={{ reducer }}>
            {children}
        </ChatBotContext.Provider>
    )
}
