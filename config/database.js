const mongoose = require('mongoose');



// const mongoAtlasUri =
//   "mongodb+srv://nagat1700:nagat55nagat@cluster0.gf9xrrt.mongodb.net/nagatAppDB?retryWrites=true&w=majority";

// try {
//   // Connect to the MongoDB cluster
//   mongoose.connect(
//     mongoAtlasUri,
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     () => console.log(" Mongoose is connected")
//   );
// } catch (e) {
//   console.log("could not connect");
// }




// mongoose.connect('mongodb://localhost:27017/nagatDB', () => {
//   console.log('Connected to Database');
// });


mongoose.connect("mongodb+srv://nagat1700:nagat55nagat@cluster0.gf9xrrt.mongodb.net/nagatAppDB?retryWrites=true&w=majority", () => {
  console.log('Connected to Database');
});








