// pages/maintenance.tsx
import { useState, FormEvent } from "react";
import { useRouter } from "next/router";
import Header from '../components/Header'; // Import the Header component

const Maintenance = () => {
  const [message, setMessage] = useState<string>("");  // Set initial message type to string
  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);  // Type the form event

    const response = await fetch("/api/log-maintenance", {
      method: "POST",
      body: JSON.stringify({
        apartment: formData.get("apartment"),
        issue: formData.get("issue"),
      }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    if (response.ok) {
      setMessage("Maintenance request submitted successfully!");
      setTimeout(() => {
        router.push("/thank-you");
      }, 2000);
    } else {
      setMessage(data.message || "Something went wrong, please try again.");
    }
  };

  return (
    <div>
      <Header /> {/* Add the Header here */}
      <h1>Maintenance Request</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Apartment:
          <input type="text" name="apartment" required />
        </label>
        <br />
        <label>
          Issue:
          <input type="text" name="issue" required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Maintenance;