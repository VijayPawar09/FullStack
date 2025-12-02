import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    //API call ko simulate karte hain
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Submitting the form", data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        <input
          className={errors.FirstName ? "input-error" : ""}
          {...register("FirstName", {
            required: true,
            minLength: { value: 3, message: "min length at least 3" },
            maxLength: { value: 6, message: "max length at most 6 " },
          })}
        />
        {errors.FirstName && (
          <p className="error-msg">{errors.FirstName.message}</p>
        )}
      </div>
      <br />
      <div>
        <label>Middle Name:</label>
        <input
          className={errors.FirstName ? "input-error" : ""}
          {...register("MiddleName")}
        />
      </div>
      <br />
      <div>
        <label>Last Name:</label>
        <input
          className={errors.FirstName ? "input-error" : ""}
          {...register("LastName", {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "last name is not as per the rules ",
            },
          })}
        />
        {errors.LastName && <p className="error-msg">{errors.LastName} </p>}
      </div>
      <br />
      <input
        disabled={isSubmitting}
        value={isSubmitting ? "Submitting" : "Submit "}
      >
        {" "}
        Submit{" "}
      </input>
    </form>
  );
}

export default App;
