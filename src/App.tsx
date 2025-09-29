import { useState, type ChangeEvent } from "react";
import { InputField } from "./components/input-field";
import { motion } from "motion/react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const handleSubmit = () => {
    if (username === "" || password === "" || password.length < 8) {
      setUsernameErrorMessage(username === "" ? "Username is required" : "");
      setPasswordErrorMessage(
        password === ""
          ? "Password is required"
          : password.length < 8
          ? "Password must be at least 8 characters"
          : ""
      );
    } else {
      setUsernameErrorMessage("");
      setPasswordErrorMessage("");
      console.log("Login successful", { username, password });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-gray-900">Login</h2>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <InputField
              placeholder="Enter your username"
              helperText="This is your unique identifier."
              errorMessage={usernameErrorMessage}
              invalid={!!usernameErrorMessage}
              variant="outlined"
              size="md"
              type="text"
              value={username}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
              clearable
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <InputField
              placeholder="Enter your password"
              helperText="Password must be at least 8 characters."
              errorMessage={passwordErrorMessage}
              invalid={!!passwordErrorMessage}
              variant="outlined"
              size="md"
              type="password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              clearable
            />
          </div>
        </div>

        <motion.button
          type="button"
          onClick={handleSubmit}
          className="w-full py-3 px-4 bg-green-700 hover:bg-green-800 text-white font-medium rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 0.999 }}
        >
          Submit
        </motion.button>
      </div>
    </div>
  );
};

export default App;
