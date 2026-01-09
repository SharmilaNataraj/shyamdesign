import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Here you would typically send an email or save to database
    // For now, just log and return success
    console.log('Contact form submission:', { name, email, message });

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ success: false, message: 'Failed to send message' }, { status: 500 });
  }
}