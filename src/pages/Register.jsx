import { useFormik } from "formik";
import * as Yup from "yup";
import useCreateUser from "../hooks/api/useCreateUser";
import YupPassword from "yup-password";
import { useNavigate } from "react-router-dom";
import useGetUserByEmail from "../hooks/api/useGetUserByEmail";
YupPassword(Yup);

const validationSchema = Yup.object({
  name: Yup.string().min(6, "Min character : 6").required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required!"),
  password: Yup.string()
    .min(6, "Min character: 6")
    .required("Required!")
    .minLowercase(1)
    .minUppercase(1)
    .minNumbers(1)
    .minSymbols(1),
});

const Register = () => {
  const { createUser } = useCreateUser();
  const navigate = useNavigate();
  const { getUserByEmail } = useGetUserByEmail();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const user = await getUserByEmail(values.email);
      if (user.length) return alert("email already exist");
      await createUser(values);
      alert("create user success");
      navigate("/users");
    },
  });

  return (
    <div className="container">
      <div>
        <div className="w-[500px] h-[450px] mx-auto mt-20 bg-blue-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="font-bold text-xl text-center mb-6">Page Register</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight"
              />
              {formik.errors.name && formik.touched.name && (
                <p>{formik.errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight"
              />
              {formik.errors.email && formik.touched.email && (
                <p>{formik.errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight"
              />
              {formik.errors.password && formik.touched.password && (
                <p>{formik.errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
