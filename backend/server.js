const express=require ('express');
const cors=require('cors');
const path = require("path");
const schoolRoutes = require("./routes/schoolRoutes");
const PORT=5000;


const app= express();
app.use(express.json());
app.use(cors());


app.use("/schoolImages", express.static(path.join(__dirname, "schoolImages")));


app.use("/schools", schoolRoutes);

app.listen(PORT,()=>{
    console.log(`Server is listening on the Port Number ${PORT}`);
})
