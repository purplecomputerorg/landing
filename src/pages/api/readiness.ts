import type { NextApiRequest, NextApiResponse } from 'next';

interface ReadinessSubmission {
  laptopModel: string;
  laptopValue: string;
  laptopCategory: string;
  wasSelected: boolean;
  email: string;
  timestamp: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const submission = req.body as ReadinessSubmission;

  // Log to Vercel logs for now
  // TODO: Connect to email notification service or database
  console.log('=== READINESS SUBMISSION ===');
  console.log('Laptop:', submission.laptopModel);
  console.log('Category:', submission.laptopCategory);
  console.log('Selected from list:', submission.wasSelected);
  console.log('Email:', submission.email);
  console.log('Timestamp:', submission.timestamp);
  console.log('============================');

  // Return success
  res.status(200).json({ success: true });
}
