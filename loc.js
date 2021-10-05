const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let locations = [{ id: 1, name: 'maryland' }, { id: 2, name: 'denver'}]
  ;
app.get('/', (req, res) => {
  let homePage = `<h2>HomePage</h2>`;
  res.send(homePage);
});

app.route('/locations')
  .get('/locations', (req, res) => {
    res.json({ products })
  })
  .get('/locations/:id', (req, res) => {
    const { id } = req.params;
    let location = locations.find((product) => product.id == id)
    res.json({ location })
  })

app.post('/locations',(req,res)=>{
  const {id,name,price}=req.body;
  locations.push({id,name,price});
  res.json(locations)
})

app.post('/locations/:id',(req,res)=>{
  const {id}=req.params;
  let update=req.body;

  let place=locations.find((location)=>location.id==id)

  if(place){
    Object.keys(update).find((key)=>{
      if(key in place){
        prod[key]=update[key];
      }
    })

    return res.json({prod})
  }
  res.json({error:'error'})



})

app.listen(3000, () => {
  console.log("Location Started")
})
