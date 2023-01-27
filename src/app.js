const path= require('path')
const express=require('express')
const hbs=require('hbs')

a=path.join(__dirname,'../template/views')
console.log(a)

const app= express()
const port=process.env.PORT || 3000


//Define paths for express config
 viewPath=path.join(__dirname,'../template/views')
 partialsPath=path.join(__dirname,'../template/partials')
//setup handlebars engine and views location

app.set('views',viewPath)
app.set('view engine','hbs')
hbs.registerPartials(partialsPath)

//setup static directory to serve 
app.use(express.static(path.join((__dirname,'./public'))))

app.get('',(req,res)=>{
    res.render('main')
})                  

app.get('/weather',(req,res)=>{

    
    res.render('index')
})       

app.listen(port,()=>{   
    console.log('server connected to port '+ port)
})