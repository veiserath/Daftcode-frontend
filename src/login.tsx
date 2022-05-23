import { loginInterface, useForm } from "./hooks/useForm";

function Login() {
    // defining the initial state for the form
    const initialState: loginInterface = {
        email: "",
        password: "",
    };

    // getting the event handlers from our custom hook
    const { onChange, onSubmit, values } = useForm(
        loginUserCallback,
        initialState
    );

    // a submit function that will execute upon form submission
    async function loginUserCallback() {
        // send "values" to database
        localStorage.setItem("email", values.email)
        localStorage.setItem("password", values.password)
        console.log(localStorage.getItem("email"))
        console.log(localStorage.getItem("password"))
    }

    const isValidInput = (inputValue:string) => {
        if (inputValue.length > 20 || inputValue.length < 3) {
            return false
        }
        return true
    }

    return (
        <form onSubmit={onSubmit}>
        <div>
            <input
                name='email'
                color="blue"
                id='email'
                type='email'
                placeholder='Email'
                onChange={onChange}
                required
                />

            <input
                name='password'
                id='password'
                type='password'
                placeholder='Password'
                onChange={onChange}
                required
                />
            <button disabled={!isValidInput(values.email) || !isValidInput(values.password)} type='submit'>Login</button>
        </div>
        </form>
    );
}

export default Login;