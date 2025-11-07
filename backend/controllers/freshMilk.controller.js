export const CreateNewfreshMilk = async (req, res) => {
     const data = req.body;
     console.log(data);
     
   res.json(
    { message:'Create product',
       data:data  
   }
   )
};


export const getAllfreshMilk = async (req, res) => {
    const Qdata = req.query;
    console.log(Qdata);
      res.json(
    { message:'get product',
        Qdata:Qdata  
     }
   
   )
};

export const getfreshMilkById = async (req, res) => {
      const pData =  req.params;
      console.log(pData);
      
      res.json({ message:'get single product',
         pData: pData
        })
};

export const updatefreshMilk= async (req, res) => {
 
};

export const deletefreshMilk = async (req, res) => {
 
};
