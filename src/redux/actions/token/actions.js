export const actionTypes = {
    SAVE_TOKEN: 'TOKEN',
};

export const saveToken = token => ({
    type: actionTypes.SAVE_TOKEN,
    token,
});
