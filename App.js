import React from 'react'
import { StatusBar } from 'expo-status-bar'
import ChatBot from '~/screens/chat-bot'
import { GlobalProvider } from '~/providers/global-provider'

export default function App () {
    return (
        <GlobalProvider>
            <ChatBot />
            <StatusBar style="auto" />
        </GlobalProvider>
    )
}
