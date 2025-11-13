import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const configOptions = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
};

const transporter = nodemailer.createTransport(configOptions);

export default transporter;