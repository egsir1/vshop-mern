import UserModel from "../schema/userModel.js";
import bcrypt from "bcryptjs";

class User {
  constructor() {}

  // signup

  async signupData(input) {
    console.log("🚀 ~ file: User.js:12 ~ User ~ signupData ~ input:", input);
    try {
      const salt = await bcrypt.genSalt();
      input.mb_password = await bcrypt.hash(input.mb_password, salt);
      const new_user = new UserModel(input);

      let result;
      try {
        result = await new_user.save();
        console.log(
          "🚀 ~ file: User.js:20 ~ User ~ signupData ~   result:",
          result
        );
      } catch (mongo_err) {
        console.log(mongo_err);
        throw new Error("mongodb validation failed");
      }
      result.mb_password = "";
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default User;
