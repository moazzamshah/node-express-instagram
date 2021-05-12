const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    console.log(`MongoDB Connected Successfully 🎉`);
  } catch (error) {
    console.error(error)
    process.exit()
  }
}
module.exports = connectDB
