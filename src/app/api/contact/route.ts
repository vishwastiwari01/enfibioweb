import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, interest, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const submission = {
      name: name.trim(),
      email: email.trim(),
      interest: interest || 'General Inquiry',
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    // Log the received submission on server
    console.log('[Enfibio Contact Inquiry Received]:', JSON.stringify(submission, null, 2));

    // If Supabase credentials are provided in environment, optionally persist
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      try {
        await fetch(`${supabaseUrl}/rest/v1/inquiries`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify(submission)
        });
      } catch (dbErr) {
        console.warn('[Supabase Forward Warning]:', dbErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for reaching out. The Enfibio team has received your inquiry.',
      data: {
        name: submission.name,
        email: submission.email
      }
    });
  } catch (error) {
    console.error('[Contact API Error]:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your inquiry.' },
      { status: 500 }
    );
  }
}
