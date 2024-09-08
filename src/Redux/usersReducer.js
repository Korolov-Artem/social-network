const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN-FOLLOW";

let initialState = {
  UsersState: [
    {
      id: "23",
      name: "Arkey",
      photo: "https://www.pngall.com/wp-content/uploads/5/Profile.png",
      status: "Everything is OK",
      location: { city: "Edmonton", country: "Canada" },
      followStatus: false,
    },
    {
      id: "32",
      name: "Tronay",
      photo: "https://www.pngall.com/wp-content/uploads/5/Profile.png",
      status: "eh...",
      location: { city: "Edmonton", country: "Canada" },
      followStatus: false,
    },
    {
      id: "8",
      name: "Keray",
      photo: "https://www.pngall.com/wp-content/uploads/5/Profile.png",
      status: "Noice",
      location: { city: "Edmonton", country: "Canada" },
      followStatus: false,
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      let selectedUser = (action) => {
        state.UsersState.find((user) => user.id === action.id);
      };
      return {
        ...state,
        UsersState: [...(state.UsersState[selectedUser].followStatus = true)],
      };
    }
    case UN_FOLLOW: {
      let selectedUser = (action) => {
        state.UsersState.find((user) => user.id === action.id);
      };
      return {
        ...state,
        UsersState: [...(state.UsersState[selectedUser].followStatus = false)],
      };
    }
    default:
      return state;
  }
};

export const followActionCreator = (id) => ({ type: FOLLOW, id: id });
export const unFollowActionCreator = (id) => ({ type: UN_FOLLOW, id: id });

export default usersReducer;
