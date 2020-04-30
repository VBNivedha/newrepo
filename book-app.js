const express=require('express')
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express()
const port=3000

let books=[{
    "isbin":75765465,
    "title":"hygygy",
    "author":"hujgyft",
    "publish_date":"97867867",
    "publisher":"ugyfrde",
    "numofpages":98,
},
{
    "isbin":75765465,
    "title":"hygygy",
    "author":"hujgyft",
    "publish_date":"97867867",
    "publisher":"ugyfrde",
    "numofpages":98,
},
{
    "isbin":75765465,
    "title":"hygygy",
    "author":"hujgyft",
    "publish_date":"97867867",
    "publisher":"ugyfrde",
    "numofpages":98,
},
]
app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/book',(req,res)=>{
    const book=req.body;

    console.log(book);
    books.push(book);

    res.send('book is added to the db');
})

app.get('/book',(req,res)=>{
    res.json(books);
});

/*app.get('/book/:isbin',(req,res)=>{
    const isbin=req.params.isbin;

    for(let book of books){
        if(book.isbin===isbin){
            res.json(book);
            return;
        }
    }

    res.status(404).send('Book not found');
});*/


    app.delete('/book/:isbin',(req,res)=>{
        const isbin=req.params.isbin;
//remove
books=books.filter(i=>{
    if(i.isbin!==isbin){
        return true;
    }

    return false;
});

res.send("book is deleted");
});
app.put('/book/:isbin',(req,res)=>{
    const isbin=req.params.isbin;
    const newBook=req.body;

    for(let i=0;i<books.length;i++){
        let book=books[i]

        if(book.isbin===isbin){
            books[i]=newBook;
        }
    }
    res.send('Book is edited');
});

app.listen(port,()=>
console.log(`Hello world listening on port ${port}!`));