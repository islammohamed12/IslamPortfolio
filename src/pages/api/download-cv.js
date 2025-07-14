import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Path to the CV file
    const cvPath = path.join(process.cwd(), 'public', 'assets', 'cv-islam-mohamed.pdf');
    
    // Check if file exists
    if (!fs.existsSync(cvPath)) {
      return res.status(404).json({ error: 'CV file not found' });
    }

    // Read the file
    const fileBuffer = fs.readFileSync(cvPath);
    
    // Set headers for file download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="cv-islam-mohamed.pdf"');
    res.setHeader('Content-Length', fileBuffer.length);
    
    // Send the file
    res.status(200).send(fileBuffer);
  } catch (error) {
    console.error('Error downloading CV:', error);
    res.status(500).json({ error: 'Failed to download CV' });
  }
} 