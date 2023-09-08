import { createSlice } from '@reduxjs/toolkit';

var initialState = {
    email: '',
    name: '',
    facebookId: null,
    pageName: '',
    accessToken: null,
    status: '',
    login: false,
}

export var userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser: (state, action) => {
            const user = action.payload;
            if(user.email) state.email = user.email;
            if(user.name) state.name = user.name;
            if(user.facebookId) state.facebookId = user.facebookId;
            if(user.accessToken) state.accessToken = user.accessToken;
            if(user.pageName) state.pageName = user.pageName;
            if(user.status) state.status = user.status;
            if(user.login) state.login = user.login;
        }
    }
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;