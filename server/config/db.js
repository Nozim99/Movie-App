// connect MongoDB with mongoose
import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,  // 'useNewUrlParser' - This is an option that can be passed to 'mongoose.connect()' method in order to use the latest MongoDB connection string parser. The MongoDB Node.js driver (which Mongoose is built on top of) has changed its connection string parser implementation in the past, so if you are using an older version of Mongoose or the driver, you may encounter compatibility issues with newer MongoDB versions. Using 'useNewUrlParser: true' ensures that Mongoose uses the latest parser, which helps to prevent these issues.
      useUnifiedTopology: true, // "useUnifiedTopology" - This is another option that can be passed to "mongoose.connect()" method to use the new Server Discovery and Monitoring engine in the MongoDB Node.js driver, which provides faster and more reliable connection management. It replaces the older connection management system with a more modern one. Using "useUnifiedTopology: true" is recommended for new applications that use MongoDB version 3.0 or later.
      family: 4,
    });
    console.log("MongoDB Connected")
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);  // "process.exit()" - This is a method in the Node.js core "process" module that can be used to terminate the current Node.js process. The argument passed to the method is used as the exit code for the process. A status code of 0 means the process exited successfully, while a non-zero code indicates an error occurred. In the code you provided, "process.exit(1)" is called if an error occurs during the database connection process, which terminates the Node.js process with a non-zero exit code to indicate that an error occurred.
  }
};
