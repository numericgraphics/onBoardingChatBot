export const ChatBotStates = Object.freeze({
    PART_ONE: 'partOne',
    PART_TWO: 'partTwo',
    PART_THREE: 'partThree',
    FINISHED: 'finished'
})

export const InitialChatBotState = {
    currentAction: ChatBotStates.PART_ONE,
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
            showButton: false,
            showModal: false,
            nextAction: ChatBotStates.PART_TWO
        }
    case ChatBotStates.PART_TWO :
        return {
            ...state,
            currentAction: action.type,
            showButton: true,
            showModal: false,
            nextAction: ChatBotStates.PART_THREE
        }
    case ChatBotStates.PART_THREE :
        return {
            ...state,
            currentAction: action.type,
            showButton: false,
            showModal: false,
            nextAction: ChatBotStates.PART_THREE
        }
    }
}
