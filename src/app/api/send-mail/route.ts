import transporter from '@/lib/mailing';
import { SendMailOptions } from 'nodemailer';
 
export async function POST(request: Request) {
    try {
        const reqData = await request.json();

        const mailOptions: SendMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Contato de ${reqData.name} (${reqData.email})`,
            text: `Mensagem de ${reqData.email}`,
            html: `
            <!DOCTYPE html>
            <html>
                <body>
                <h1>Requisição de ${reqData.name}!</h1>
                <p>${reqData.message}</p>
                </body>
            </html>
            `,
            replyTo: reqData.email,
        };

        await transporter.sendMail(mailOptions);
        return Response.json({ error: null, message: "email enviado com sucesso!" }, { status: 200 });
    }
    catch (err: any) {
        return Response.json({ error: err, message: "falha ao enviar email :(" }, { status: 500 });
    }
}