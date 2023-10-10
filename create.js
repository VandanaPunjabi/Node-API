
app.get('/', (req,respond)=>{
    respond.status(200).respond.send('Home Page')
})

app.get('/about', (req,res)=>{
    res.status(200).send('about page')
})

app.all('*', (req,res)=>{
    res.status(404).send('<h1>Resource not found</h1>')
})


//app.get
//app.post
//app.delete
//app.use
//app.all
//app.listen
//app.put
