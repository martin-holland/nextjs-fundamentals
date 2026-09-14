import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ContactForm from "../app/components/ContactForm";

// Replace global fetch so the test never touches the real /api/contact route.
const originalFetch = global.fetch;

afterEach(() => {
  global.fetch = originalFetch;
  jest.resetAllMocks();
});

function fillAndSubmit({ name = "Martin", message = "Hello" } = {}) {
  const [nameInput] = screen.getAllByRole("textbox");
  const messageInput = screen.getByRole("textbox", { name: /message/i });

  fireEvent.change(nameInput, { target: { value: name } });
  fireEvent.change(messageInput, { target: { value: message } });
  fireEvent.click(screen.getByRole("button", { name: /send message/i }));
}

describe("<ContactForm /> with a mocked API", () => {
  it("shows the success message returned by the API", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ message: "Thanks Martin, your message was received." }),
    });

    render(<ContactForm />);
    fillAndSubmit();

    expect(
      await screen.findByText("Thanks Martin, your message was received.")
    ).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it("posts the form values as JSON to /api/contact", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ message: "ok" }),
    });

    render(<ContactForm />);
    fillAndSubmit({ name: "Ada", message: "Hi there" });

    await waitFor(() => expect(global.fetch).toHaveBeenCalled());

    const [url, options] = global.fetch.mock.calls[0];
    expect(url).toBe("/api/contact");
    expect(options.method).toBe("POST");
    expect(JSON.parse(options.body)).toEqual({
      name: "Ada",
      message: "Hi there",
    });
  });

  it("shows the error message when the API rejects the input", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ error: "Missing required field(s): message." }),
    });

    render(<ContactForm />);
    fillAndSubmit({ message: "" });

    expect(
      await screen.findByText("Missing required field(s): message.")
    ).toBeInTheDocument();
  });

  it("shows a fallback message when the request itself fails", async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error("network down"));

    render(<ContactForm />);
    fillAndSubmit();

    expect(
      await screen.findByText("Could not reach the API.")
    ).toBeInTheDocument();
  });
});
