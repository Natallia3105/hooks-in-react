import { useReducer } from "react";

type State = {
    username: string;
    email: string;
    error: boolean;
    loading: boolean;
}

const initialState = {
    username: '',
    email: '',
    error: false,
    loading: false,
}

type Action = 
| { type: "SET_USERNAME"; payload: string }
| { type: "SET_EMAIL"; payload: string }
| { type: "SET_ERROR"; payload: boolean }
| { type: "SET_LOADING"; payload: boolean }

const reducer = (state: State, action: Action): State => {
  switch(action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload }
    case 'SET_EMAIL':
      return { ...state, email: action.payload} 
    case 'SET_ERROR':
      return { ...state, error: action.payload }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
}
}

const StateFullForm = () => {
const [state, dispatch] = useReducer(reducer, initialState);

const handleUserNameChange = (event : React.ChangeEvent<HTMLInputElement>) => {
  dispatch({ type: 'SET_USERNAME', payload: event.target.value })
  dispatch({ type: 'SET_ERROR', payload: false})
  console.log(state)
}

const handleEmailChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_EMAIL', payload: event.target.value })
    dispatch({ type: 'SET_ERROR', payload: false})
  } 

  const handleSubmit = (event : React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (state.username === '' || state.email === '') {
      dispatch({ type: 'SET_ERROR', payload: true});
        return;
    }  
      dispatch({ type: 'SET_LOADING', payload: true});

      setTimeout(() => {
        dispatch({ type: 'SET_LOADING', payload: false});
      }, 2000)

  }

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="username">User Name</label>
              <input 
                id="username"
                type="text" 
                placeholder="user name"
                value={state.username}
                onChange={handleUserNameChange}
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input 
                id="email"
                type="text" 
                placeholder="email"
                value={state.email}
                onChange={handleEmailChange}
              />
            </div>
            {state.error && (<p>Please, fill in all the filds</p>)}

            <div>
                <button
                type="submit"
                disabled={state.loading}
                 >
                    {state.loading ? 'Loading' : 'Submit'}{''}

                </button>
            </div>
        </form>
    )
}

export default StateFullForm;