import { useState } from "react";

export default function MaintenanceRequest() {
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch("/api/log-maintenance", {
      method: "POST",
      body: JSON.stringify({
        apartment: formData.get("apartment"),
        issue: formData.get("issue"),
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div>
      <h1>Maintenance Request</h1>
      <form onSubmit={handleSubmit}>
        <label>Apartment: <input type="text" name="apartment" required /></label>
        <label>Issue: <input type="text" name="issue" required /></label>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}