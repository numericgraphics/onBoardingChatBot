import React, { useEffect, useState, Fragment } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import BubblesFactory from '~/components/bubbles-factory'
import UserBubble from '~/components/user-bubble'
import data from '~/assets/json/chat-bot.json'

const ChatBot = () => {
    const [components, setComponents] = useState([])

    useEffect(() => {
        if (data) {
            setComponents([
                // eslint-disable-next-line react/jsx-key
                <BubblesFactory data={data?.chatBot.messages} bubble={<UserBubble/>}/>
            ])
        }
    }, [])

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
