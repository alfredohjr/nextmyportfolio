
import api from '../src/services/api';
import Layout from '../src/components/Layout';
import styles from '../styles/Contact.module.css';



export default function Contact() {

    const handleContactMe = async event => {
        event.preventDefault();

        const response = await api.post('/api/contact',{
            body: {
                name: event.target.name.value,
                email: event.target.email.value,
                message: event.target.message.value
            }
        });

        event.target.reset();


    }

    return (
        <Layout nameTitle="Contato" hiddenPosition={4}>
            <div className={styles.contact_main}>
                <form className={styles.contact_form} onSubmit={handleContactMe}>
                    <h1>Contato:</h1>
                    <input type="text" name="name" id="" placeholder="Nome" required />
                    <input type="email" name="email" id="" placeholder="E-mail" required />
                    <textarea name="message" id="" cols="30" rows="10" required ></textarea>

                    <div className="g-recaptcha" data-sitekey={`${process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_TOKEN}`}>
                        
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </Layout>
    )
}