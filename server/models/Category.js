import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a category name"],
      unique: true,
      trim: true,
      maxlength: [50, "Category name cannot be more than 50 characters"],
    },
    slug: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

// Generate slug from name before saving
CategorySchema.pre("save", function (next) {
  if (!this.isModified("name")) return next();
  this.slug = this.name.toLowerCase().replace(/[\W_]+/g, "-");
  next();
});

const Category = mongoose.model("Category", CategorySchema);
export default Category;
