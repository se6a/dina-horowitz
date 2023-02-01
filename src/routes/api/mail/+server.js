import nodemailer from "nodemailer";
import {error} from "@sveltejs/kit";
import {
    SECRET_MAIL_PORT,
    SECRET_MAIL_HOST,
    SECRET_MAIL_USER,
    SECRET_MAIL_PW
} from "$env/static/private";

const transporter = nodemailer.createTransport({
    port: SECRET_MAIL_PORT,
    host: SECRET_MAIL_HOST,
    auth: {
        user: SECRET_MAIL_USER,
        pass: SECRET_MAIL_PW
    },
    secure: true
});

export async function POST({request}) {
    try {
        const formData = await request.formData();
        const data = {};
        formData.forEach((value, key) => (data[key] = value));

        const {response} = await forward(data);

        if (!response.startsWith("2")) throw error(400, "Server Error");

        return new Response();
    } catch (err) {
        throw error(400, "Server Error");
    }
}

async function forward(data) {
    return await transporter.sendMail({
        from: "bot@dinahorowitz.ch",
        to: "info@dinahorowitz.ch",
        subject: `${data.name} via dinahorowitz.ch`,
        text: `
Nachricht von ${data.name}
Mail: ${data.email}
Telefon: ${data?.phone || "-"}



${data?.message}
`
    });
}
