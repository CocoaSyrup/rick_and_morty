
const Form = () => {
  return(
    <form>
      <label htmlFor="email">Name: </label>
      <input name="email" type="text" />
      <label htmlFor="password">Password: </label>
      <input name="password" type="text" />

      <button>Submit</button>
    </form>
  )
}

export default Form;