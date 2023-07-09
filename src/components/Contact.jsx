import { ContactForm } from "./ContactForm";
import Footer from "../components/Footer";
import "../styles/_contact.scss";

export default function Contact() {
  return (
    <div id="contact" className="contact">
      <h1>Contactez-nous</h1>
      <ContactForm />
      <Footer />
    </div>
  );
}
