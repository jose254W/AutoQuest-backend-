import { Controller, Post, Body } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Controller('rentals')
export class RentalController {
  @Post()
  async create(@Body() formData) {
    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.sendinblue.com',
      port: 587,
      secure: false,
      auth: {
        user: 'josewawe75@gmail.com',
        pass: 'NI0DO9E5chAVPbT1',
      },
    });

    let formDataList = '';
    for (const [key, value] of Object.entries(formData)) {
      formDataList += `${key}: ${value}\n`;
    }
    const mailOptions = {
      from: 'josewawe75@gmail.com',
      to: 'mjdiners@gmail.com',
      subject: 'AutoQuest Car Booking',
      text: formDataList,
    };
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log(`Message sent: ${info.messageId}`);
    } catch (error) {
      console.error(`Error sending message: ${error}`);
    }
  }
}
