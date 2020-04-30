const express=require('express')
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express()
const port=3000

let products=[{
    "productId":17,
    "producttitle":"hygygy",
    "productname":"hujgyft",
    "publish_date":"97867867",
    "manu_date":"43657",
    "expdate":"42756475",
},
{
    "productId":19,
    "producttitle":"hygygy",
    "productname":"hujgyft",
    "publish_date":"97867867",
    "manu_date":"43657",
    "expdate":"42756475",
},
{
    "productId":18,
    "producttitle":"hygygy",
    "productname":"hujgyft",
    "publish_date":"97867867",
    "manu_date":"43657",
    "expdate":"42756475",
},
]

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/product',(req,res)=>{
    const product=req.body;

    console.log(product);
    products.push(product);

    res.send('product is added to the db');
})

app.get('/product',(req,res)=>{
    res.json(products);
});

app.get('/product/:productId',(req,res)=>{
    const productId=req.params.productId;

    for(let product of products){
        if(product.productId===productId){
            res.json(product);
            return;
        }
    }

    res.status(404).send('product not found');
});

app.delete('/product/:productId',(req,res)=>{
    const productId=req.params.productId;
//remove
products=products.filter(i=>{
if(i.productId!==productId){
    return true;
}

return false;
});

res.send("product is deleted");
});


app.put('/product/:productId',(req,res)=>{
    const productId=req.params.productId;
    const newProduct=req.body;

    for(let i=0;i<products.length;i++){
        let product=products[i]

        if(product.productId===productId){
            products[i]=newProduct;
        }
    }
    res.send('product is edited');
});
app.listen(port,()=>
console.log(`Hello world listening on port ${port}!`));