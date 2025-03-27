import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { apartment, issue } = req.body;

    res.status(200).json({
      message: `Maintenance request for apartment ${apartment} regarding: ${issue} has been logged.`,
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}