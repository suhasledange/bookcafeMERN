import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT
export const MONGO_URI = process.env.MONGO_URI;
export const MONGO_DB = process.env.MONGO_DB;
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";
export const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5174";
export const NODE_ENV = process.env.NODE_ENV || "development";
