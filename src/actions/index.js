/* Define Action Types */
export const USER_LOGOUT = "USER_LOGOUT";
export const ADD_ACTIVITY = "ADD_ACTIVITY";




/* Action Creators */
export function addActivity(activity){
    return { type: "ADD_ACTIVITY", payload: {activity}}
}
