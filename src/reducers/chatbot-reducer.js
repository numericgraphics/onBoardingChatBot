import { ChatBotStates, RenderItems } from '~/tools/constants'

export const InitialChatBotState = {
    currentAction: ChatBotStates.PART_ONE,
    renderItem: RenderItems.CHAT_BUBBLE,
    showButton: false,
    showModal: false,
    nextAction: ChatBotStates.PART_TWO
}

export function ChatBotReducer (state, action) {
    switch (action.type) {
    case ChatBotStates.PART_ONE :
        return {
            ...state,
            currentAction: action.type,
            renderItem: RenderItems.CHAT_BUBBLE,
            showButton: false,
            showModal: false,
            nextAction: ChatBotStates.PART_TWO
        }
    case ChatBotStates.PART_TWO :
        return {
            ...state,
            currentAction: action.type,
            renderItem: RenderItems.USER_BUBBLE,
            showButton: true,
            showModal: false,
            nextAction: null
        }
    }
}

/*
    case ChatBotStates.PART_THREE :
        return {
            ...state,
            currentAction: action.type,
            renderItem: RenderItems.BUTTON,
            showButton: false,
            showModal: false,
            nextAction: null
        }
 */
