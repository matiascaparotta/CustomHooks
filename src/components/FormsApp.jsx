import { useForm } from "../hooks/UseForm"

export const FormsApp = () => {
   const initialForm = {
        username: '',
        nickname: '',
        email:'',
        password: '',
    }
    const { username,nickname,password,email, onInputChange} = useForm(initialForm)

    const handleSubmit = (event) => {
    event.preventDefault()
    console.log(username,nickname,password,email)
   }

  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={username}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nickname" className="form-label">
            Nickname
          </label>
          <input
            type="text"
            className="form-control"
            id="nickname"
            name="nickname"
            value={nickname}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={onInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}