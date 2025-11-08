import { freshMilk } from "../models/freshMilk.model.js";

export const CreateNewfreshMilk = async (req, res) => {
     const data = req.body;
      await freshMilk.create(data)
     console.log(data);
     
   res.json(
    { message:'Create product',
       data:data  
   }
   )
};


export const getAllfreshMilk = async (req, res) => {
   // const Qdata = req.query;
      const milk = await freshMilk.find({}) 
    //console.log(Qdata);
      res.json(
    { message:'get product',
        milk
     }
   
   )
};

export const getfreshMilkById = async (req, res) => {
      const {id} =  req.params;
        const milk = await freshMilk.findById(id)
      //console.log(pData);
      
      res.json({ message:'get single product', milk})
};

export const updatefreshMilk= async (req, res) => {
     const {id} = req.params;
       const updataData = req.body;
      await freshMilk.findByIdAndUpdate(id,updataData)
         res.json({message:'update freshMilk',updataData})

};

export const deletefreshMilk = async (req, res) => {
    const {id} = req.params;
    await freshMilk.findByIdAndDelete(id)
    res.json({message:'delete freshMilk'})
};
