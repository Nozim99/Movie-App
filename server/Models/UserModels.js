import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please add a full name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
      trim: true, // "trim" - This is a schema option in Mongoose that can be applied to a string field in the schema. When "trim" is set to "true", Mongoose will automatically remove any whitespace characters (spaces, tabs, etc.) from the beginning and end of the string before saving it to the database. This can be useful for preventing user input errors, as extra whitespace characters at the beginning or end of a string can cause issues with comparisons or searches.
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    image: String,
    isAdmin: {
      type: Boolean,
      default: false,
    },
    likedMovies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movies",
      },
    ],
  },
  {
    timestamps: true, // "timestamps" - This is another schema option in Mongoose that can be set to "true" to automatically create two additional fields in the schema called "createdAt" and "updatedAt". These fields will automatically be updated by Mongoose to store the date and time that a document was created or updated, respectively. This can be useful for keeping track of when documents were modified or for sorting documents by creation or update date.
  }
);

export default mongoose.model("User", UserSchema);
