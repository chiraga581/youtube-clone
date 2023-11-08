import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const liveChatSlice = createSlice ({
    name: "liveChat",
    initialState: {
        messages : [],
    },
    reducers:{
        addMessage : (state , action) => {
            state.messages.splice(OFFSET_LIVE_CHAT,50)
            state.messages.push(action.payload)
        }
    }

})

export const {addMessage} = liveChatSlice.actions;
export default liveChatSlice.reducer;