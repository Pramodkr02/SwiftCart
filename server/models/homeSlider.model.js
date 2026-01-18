import mongoose from "mongoose";

const homeSliderSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    // Optional fields for future proofing or if needed
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    link: {
      type: String, // URL to redirect
      default: "",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const HomeSliderModel = mongoose.model("HomeSlider", homeSliderSchema);

export default HomeSliderModel;
