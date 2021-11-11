import React, { useEffect, useState, useRef, Fragment } from 'react'
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import BubblesFactory from '../components/bubbles-factory'
import UserBubble from '../components/user-bubble'
import data from '~/assets/json/chat-bot.json'

const ChatBot = () => {
    const [components, setComponents] = useState([])
    const SwimLaneRef = useRef(null)

    useEffect(() => {
        if (data) {
            setComponents([
                ...components,
                // eslint-disable-next-line react/jsx-key
                <BubblesFactory data={data?.chatBot.firstStep.messages} bubble={<UserBubble/>}/>
            ])
        }
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                ref={SwimLaneRef}
                contentContainerStyle={styles.scrollViewContainer} // instead of contentInset={{ bottom: 100 }} for ios only
                onContentSizeChange={() => {
                    SwimLaneRef.current.scrollToEnd({ animated: true, duration: 600 })
                }}
            >
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
