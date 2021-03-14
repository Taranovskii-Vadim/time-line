import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      required: true,
      type: String,
    },
    surname: {
      required: true,
      type: String,
    },
    position: {
      required: true,
      type: String,
    },
    employmentType: {
      required: true,
      type: String,
    },
    avatarUrl: String,
    skills: {
      type: Object,
    },
    projects: {
      type: Object,
    },
  },
  { versionKey: false }
);

userSchema.set("toJSON", {
  transform: function (doc, user) {
    user.id = user._id;
    delete user._id;
    return user;
  },
});

export const userModel = model("user", userSchema);
