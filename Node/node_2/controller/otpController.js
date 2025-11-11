import Otp from "../models/otpModel.js";
import User from "../models/userModel.js";
import otpGenerator from "otp-generator";

const sendOtp = async (req, res) => {
    console.log("hello from send otp")
  try {
    const { email } = req.body;
    const checkUserPresent = await User.findOne({ email });
    if (checkUserPresent) {
      return res.status(401).json({ message: "User is already registerted" });
    }
    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    let result = await Otp.findOne({ otp: otp });
    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
      });
      result = await Otp.findOne({ otp: otp });
    }
    const otpPayload = { email, otp };
    const otpBody = await Otp.create(otpPayload);
    console.log(otpBody, "otpbodyyy");
    res
      .status(200)
      .json({ success: true, message: "OTP sent successfully", otp });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};
export default { sendOtp };
