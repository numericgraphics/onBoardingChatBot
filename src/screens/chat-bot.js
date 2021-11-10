import React, { useEffect, useState, useRef, Fragment } from 'react'
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import BubblesFactory from '../components/bubbles-factory'
import UserBubble from '../components/user-bubble'

const data = {
    content: [
        {
            text: 'test 1'
        },
        {
            text: 'test 2'
        },
        {
            text: 'test 3'
        }
    ],
    nextAction: 'next action'
}

const ChatBot = () => {
    const [components, setComponents] = useState([])
    const SwimLaneRef = useRef(null)

    useEffect(() => {
        setComponents([
            ...components,
            // eslint-disable-next-line react/jsx-key
            <BubblesFactory data={data} bubble={<UserBubble/>}/>
        ])
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
