import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  try {
    console.log("helllo");
    const hearderToken = req.headers.authorization;
    console.log(hearderToken);
    const token = hearderToken.split(" ")[1];
    console.log("tokennnnnnnverify", token);
    if (!token) return res.status(401).json({ error: "Access denied" });
    const decoded = jwt.verify(token, "p123");
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

export default verifyToken;
