import mongoose from 'mongoose';

const freshMilkSchema = new mongoose.Schema({
  title: String,
  slug:String,
  price: Number,
  description:String,
  category:String,
  image:String,
  rating:{
    rate:Number,
    count:Number
  }
});

 export const freshMilk = mongoose.model('freshMilk', freshMilkSchema);



//  {

//     "category": "women's clothing",
//     "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
//     "rating": {
//       "rate": 4.5,
//       "count": 146
//     }
//   }