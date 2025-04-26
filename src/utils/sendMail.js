import nodemailer from 'nodemailer';

// import { SMTP } from '../constants/index.js';
import { getEnvVar } from '../utils/getEnvVar.js';

// const transporter = nodemailer.createTransport({
//   host: getEnvVar(SMTP.SMTP_HOST),
//   port: Number(getEnvVar(SMTP.SMTP_PORT)),
//   auth: {
//     user: getEnvVar(SMTP.SMTP_USER),
//     pass: getEnvVar(SMTP.SMTP_PASSWORD),
//   },
// });

const transporter = nodemailer.createTransport({
  host: 'smtp.ukr.net',
  port: 465,
  secure: true,
  auth: {
    user: getEnvVar('UKR_NET_EMAIL'),
    pass: getEnvVar('UKR_NET_PASSWORD'),
  },
});

export const sendEmail = async (options) => {
  return await transporter.sendMail(options);
};
