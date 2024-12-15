import { Document, model, models, ObjectId, Schema } from "mongoose";

export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  securedURL: string; // Using string instead of URL for simplicity in TypeScript
  width?: number;
  height?: number;
  config?: Record<string, unknown>; // Represents an object with unknown properties
  transformationURL?: string; // Using string for URL
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author?: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  createdAt?: Date; // Optional since default is `Date.now`
  updatedAt?: Date; // Optional since default is `Date.now`
}

const ImageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  transformationType: {
    type: String,
    required: true,
  },
  publicId: {
    type: String,
    required: true,
  },
  securedURL: {
    type: URL,
    required: true,
  },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationURL: { type: URL },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Image = models.Image || model("Image", ImageSchema);

export default Image;
