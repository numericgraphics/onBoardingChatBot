import React, { useEffect, useState, Fragment, useContext } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BubblesFactory from '~/components/bubbles-factory'
import data from '~/assets/json/chat-bot.json'
import ChatBotContext from '~/providers/chatbot-provider'
import { ComponentsFactory } from '~/factories/components-factory'
import { RenderItems } from '~/tools/constants'

const ChatBot = (props) => {
    const [components, setComponents] = useState([])
    const { reducer } = useContext(ChatBotContext)
    const { state, dispatch } = reducer

    useEffect(() => {
        if (data) {
            setComponents([
                ...components,
                // eslint-disable-next-line react/jsx-key
                <BubblesFactory
                    data={data.chatBot[state.currentAction]}
                    bubble={ComponentsFactory(state.renderItem)}
                    interval={state.renderItem === RenderItems.CHAT_BUBBLE ? 3000 : 1500}
                    callback={() => {
                        state.nextAction && dispatch({ type: state.nextAction })
                    }}
                />
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
