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
// TODO: удалить _id
// userSchema.method("toClient", function () {
//   const course = this.toObject();
//   course.id = course._id;
//   delete course._id;
//   return course;
// });

export const userModel = model("user", userSchema);
