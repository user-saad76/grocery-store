import mongoose from 'mongoose';

const freshMilkSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description:String
});

 export const freshMilk = mongoose.model('freshMilk', freshMilkSchema);