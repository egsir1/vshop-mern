import User from "../models/User.js";

const signup = async (req, res) => {
  try {
    console.log("POST => contr/signup User");
    const data = req.body;
    console.log("🚀 ~ file: UserController.js:7 ~ signup ~ data:", data);
    const user = new User();
    const new_member = await user.signupData(data);
    console.log(
      "🚀 ~ file: UserController.js:9 ~ signup ~ new_member:",
      new_member
    );
    res.json({ state: "success", data: new_member });
  } catch (err) {
    console.log(`Errorr: ${err}`);
    res.json({ state: "fail", message: err.message });
  }
};

export { signup };
