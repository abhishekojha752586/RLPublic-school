import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const Grade = searchParams.get('Class');
  const Name = searchParams.get('Name');

  if (!Grade || !Name) {
    return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
  }

  try {
    const auth = new JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL!,
      key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, auth);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();

    const student = rows.find(row =>
      row.get('StudentName')?.toLowerCase().trim() === Name.toLowerCase().trim() &&
      row.get('Class')?.toLowerCase().trim() === Grade.toLowerCase().trim()
    );

    if (!student) {
      return NextResponse.json({ error: 'Result not found' }, { status: 404 });
    }

    const result = {
      name: student.get('StudentName'),
      class: student.get('Class'),
      
      rollno: student.get('RollNo'),
pdfUrl: `https://drive.google.com/file/d/${student.get('PDFFileID')}/preview`,
    };

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('API Error:', error.message);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
