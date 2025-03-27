export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { apartment, issue } = req.body;

    // Here, you can add logic to save this data to a database or log file
    // This example just returns the data back

    res.status(200).json({
      message: `Maintenance request for apartment ${apartment} regarding: ${issue} has been logged.`,
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}