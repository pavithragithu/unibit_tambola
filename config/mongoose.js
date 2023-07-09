import mongoose from 'mongoose';

async function connect() {
    mongoose.set('strictQuery', true);
    const db = mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected");
    return db;
}

export default connect;
