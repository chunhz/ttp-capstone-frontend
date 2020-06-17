import axios from "axios";



        //ACTION TYPES
const FETCH_USER = "FETCH_USER";
const ADD_USER = "ADD_USER";
const DELETE_USER ="DELETE_USER";




        //ACTION CREATORS
const fetchOneUser = (user) =>{
    return{
        type: FETCH_USER,
        payload: user
    };
};

const addUser = (user) =>{
    return{
        type: ADD_USER,
        payload: user,
    };
};

const deleteUser = (email) =>{
    return{
        type: DELETE_USER,
        payload : email,
    };
};



// THUNK CREATORS

            //FETCH A USER BASED ON EMAIL
    export const fetchOneUserThunk = (email) => (dispatch) => {
        return axios
        .get(`/users/find${email}`)
        .then((res) => res.data)
        .then((user) => dispatch(fetchOneUser(user)))
        .catch((err) => console.log(err));
    };

                //ADDUSER
  export const addUserThunk = (user) => (dispatch) => {
        return axios
        .post(`/users/`, user)
        .then((res) => res.data)
        .then((user) => dispatch(addUser(user)))
        .catch((err) => console.log(err));
    };
    
            //DELETE USER
  export const deleteUserThunk = (email) => (dispatch) => {
        return axios
        .delete(`/users/${email}`)
        .then((res) => res.data)
        .then(() => dispatch(deleteUser(email)))
        .catch((err) => console.log(err));
    };
  

  

            //REDUCER
    const reducer= (state=[], action) =>{
        switch(action.type)
        {
            case FETCH_USER:
                return action.payload;
            case ADD_USER:
                return [...state, action.payload]
            case DELETE_USER:
                return state.filter((user) => user.email !== action.payload);
            default:
                return state;
        }
    }



  export default reducer;