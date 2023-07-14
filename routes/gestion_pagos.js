const router = require("express").Router();
const dotenv = require("dotenv");

dotenv.config();
const STRIPE_PRIVATE_KEY = process.env.STRIPE_PRIVATE_KEY;

const stripe = require('stripe')(STRIPE_PRIVATE_KEY);




router.post("/procesar-pagos", async (req, res) => {
    const pedidos = req.body.pedidos;
  
    try {
      let line_items=[]
      const make_items = pedidos.map((item)=>{
      let a={ price_data: { product_data: {name: item.nombre}, currency: "pen",unit_amount: item.precio }, quantity: item.cantidad }
        line_items.push(a)
      });
      
      const session = await stripe.checkout.sessions.create({
        line_items:line_items,
        mode: "payment",
        success_url: "https://www.google.com.mx",
        cancel_url: "https://www.youtube.com",
      });
  

      return res.json({ url: session.url });
      
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
   
  });


module.exports = router;