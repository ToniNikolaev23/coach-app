export default {
    getRequests(state, _, _2, rootGetters){
        const coachId = rootGetters.userId


        return state.requests.filter(req => req.coachId === coachId);
    },
    hasRequests(state){
        return state.requests.length > 0 && state.requests
    }
}