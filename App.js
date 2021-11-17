import React from 'react'
import ChatBot from '~/screens/chat-bot'
import { ChatBotProvider } from './src/providers/chatbot-provider'

export default function App () {
    return (
        <ChatBotProvider>
            <ChatBot />
        </ChatBotProvider>
    )
}
