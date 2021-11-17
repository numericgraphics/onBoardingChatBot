import React, { useEffect, useState, Fragment, useContext } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import BubblesFactory from '~/components/bubbles-factory'
import ChatBubble from '~/components/chat-bubble'
import data from '~/assets/json/chat-bot.json'
import ChatBotContext from '~/providers/chatbot-provider'

const ChatBot = ({ props }) => {
    const [components, setComponents] = useState([])
    const { reducer } = useContext(ChatBotContext)
    const { state } = reducer

    useEffect(() => {
        if (data) {
            setComponents([
                // eslint-disable-next-line react/jsx-key
                <BubblesFactory data={data.chatBot[state.currentAction]} bubble={<ChatBubble/>} interval={3000}/>
            ])
        }
    }, [state])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {components.map((component, index) => {
                    return (
                        <Fragment key={index}>
                            { component }
                        </Fragment>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}

export default ChatBot

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray'
    },
    scrollViewContainer: {
        paddingBottom: 120
    }
})

/* <BubblesFactory data={data?.chatBot.messages} bubble={<ChatBubble/>} interval={3000}/> */
