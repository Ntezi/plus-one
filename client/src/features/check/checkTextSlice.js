import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {post} from "../../app/api";
import {CHECK_URL} from "../../app/constants";

const initialState = {
    words: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const checkText = createAsyncThunk('check/text', async (text) => {
    const response = await post(CHECK_URL, text)
    return response.data
})

const checkTextSlice = createSlice({
    name: 'check',
    initialState,
    reducers: {
        clearText: {
            reducer(state, action) {
                state.status = action.payload
            },
        },
    },
    extraReducers(builder) {
        builder
            .addCase(checkText.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.words = action.payload.data
            })
    }
})

export const selectNonEnglishWords = (state) => state.check.words;
export const getStatus = (state) => state.check.status;

export const { clearText } = checkTextSlice.actions

export default checkTextSlice.reducer
