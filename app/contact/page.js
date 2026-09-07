import AppLayout from "../components/AppLayout";
import ContactForm from "../components/ContactForm";
import Navigation from "../components/Navigation";
import Title from "../components/Title";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main style={{ padding: "2rem 1rem" }}>
        <AppLayout>
          <Title>Contact</Title>
          <p>
            This form sends a POST request to <code>/api/contact</code> and
            shows whatever the API responds with. Leave a field empty to see the
            400 validation error come back from the route handler.
          </p>
          <ContactForm />
        </AppLayout>
      </main>
    </>
  );
}
