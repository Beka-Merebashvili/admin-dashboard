import mongoose from "mongoose";

export const connectToDb = async () => {
  const connection = {};

  try {
    if (connection.isConected) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConected = db.connections[0].readyState;
  } catch (error) {
    throw new Error(error);
  }
};
