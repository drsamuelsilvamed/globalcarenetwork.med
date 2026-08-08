import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, country, profile, subject, message } = req.body;

    if (!firstName || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const { data, error } = await resend.emails.send({
      from: 'MMC Contact Form <onboarding@resend.dev>',
      to: 'missionarymedicalcare@gmail.com',
      reply_to: email,
      subject: `Nuevo Mensaje: ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #171717;">
          <h2 style="color: #B8872C;">Nuevo mensaje de contacto</h2>
          <p>Has recibido un nuevo mensaje a través del formulario web de Missionary Medical Care.</p>
          <hr style="border: none; border-top: 1px solid #EFE8DD; margin: 20px 0;" />
          <p><strong>Nombre:</strong> ${firstName} ${lastName || ''}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>País:</strong> ${country || 'No especificado'}</p>
          <p><strong>Perfil:</strong> ${profile || 'No especificado'}</p>
          <p><strong>Asunto/Motivo:</strong> ${subject}</p>
          <p><strong>Mensaje:</strong></p>
          <div style="background-color: #FAF8F3; padding: 15px; border-radius: 4px; border: 1px solid #EFE8DD;">
            <p style="margin: 0;">${message.replace(/\n/g, '<br/>')}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      return res.status(400).json({ error });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
