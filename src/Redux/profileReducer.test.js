import profileReducer, {addPost} from "./profileReducer";

it("increase PostsState length", () => {
    let action = addPost("Test Post")
    let state = {
        PostsState: [
            {id: 1, message: "Hello World!", likesCount: 11},
            {id: 2, message: "Hi Pal.", likesCount: 146},
        ]
    };

    let newState = profileReducer(state, action)

    expect(newState.PostsState.length).toBe(5);
})