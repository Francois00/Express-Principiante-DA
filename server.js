const express = require('express');
const morgan = require('morgan');
const app= express();

//Settings
app.set('appName', 'Express');
app.set('port',3000);
app.set('view engine', 'ejs');


//Middlewares
app.use(express.json());
app.use(morgan('dev'));

//Routes

app. get('/', (req, res)=>{
    const data=[{name: 'john'},{name: 'joe'},{name:'cameron'},{name:'ryan'}]
    res.render('index.ejs',{people:data});
})

app.get('/user',(req, res) =>{
    res.json({
        username:'Cameron',
        lastname: "Home"
    });
});

app.post('/user/:id', (req,res)=> {
    console.log(req.body);
    console.log(rep.params)
    res.send('Post REQUEST RECEIVED');
});

app.put('/user/:id', (req, res)=>{
    console.log(req.body);
    res.send('User ${req.params.id} updated');
});

app.delete('/user/:userId', (req, res)=>{
    console.log(req.body);
    res.send('User ${req.params.userId} deleted');
});


app.use(express.static('Public'));


app.listen(app.get('port'),()=>{
    console.log(app.get('appName'))
    console.log('Server on port', app.get('port'))
})
/**app.use(express.json());
const userRouters = require('./app/routes/user')
const itemRouters = require('./app/routes/items')

app.use(userRouters)
app.use(itemRouters)
app.listen(port,() =>{
    console.log('La aplicacion esta en linea');
})**/