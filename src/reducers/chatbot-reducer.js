import { ChatBotStates, RenderItems } from '~/tools/constants'

export const InitialChatBotState = {
    currentAction: ChatBotStates.STATE_ONE,
    renderItem: RenderItems.CHAT_BUBBLE,
    showButton: false,
    showModal: false,
    nextAction: ChatBotStates.STATE_TWO
}

export const ChatBotReducer = (state, action) => {
    switch (action.type) {
    case ChatBotStates.STATE_ONE :
        return {
            currentAction: action.type,
            renderItem: RenderItems.CHAT_BUBBLE,
            showButton: false,
            showModal: false,
            nextAction: ChatBotStates.STATE_TWO
        }
    case ChatBotStates.STATE_TWO :
        return {
            currentAction: action.type,
            renderItem: RenderItems.USER_BUBBLE,
            showButton: true,
            showModal: false,
            nextAction: ChatBotStates.STATE_THREE
        }
    case ChatBotStates.STATE_THREE :
        return {
            currentAction: action.type,
            renderItem: RenderItems.CHAT_BUBBLE,
            showButton: false,
            showModal: false,
            nextAction: null
        }
    }
}
