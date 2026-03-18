import mailer from "../../utils/mailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { recaptchaToken, ...formData } = req.body; // 👈 extract token

        //  verify with Google
        const verifyRes = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
            { method: "POST"
             }
        );
        const verifyData = await verifyRes.json();

        if (!verifyData.success) {
            return res.status(400).json({ error: "reCAPTCHA verification failed" });
        }

        // continue with your existing email/form logic using formData
        try {
            await mailer
                .contactForm(formData)
                .then((d) => {
                    res.status(200).json(d);
                })
                .catch((e) => res.status(500).json(e));
        } catch (e) {
            return res.status(422).json({ message: "Something went wrong" });
        }
    } else {
        // Handle any other HTTP method
    }
}

