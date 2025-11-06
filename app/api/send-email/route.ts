import { type NextRequest, NextResponse } from "next/server"

// This is a simple email handler. For production, integrate with EmailJS or another service
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // TODO: Integrate with EmailJS or a backend email service
    // For now, this endpoint just validates and returns success
    // You can add actual email sending logic here using services like:
    // - Resend
    // - SendGrid
    // - EmailJS
    // - AWS SES

    console.log("New message:", { name, email, message })

    return NextResponse.json({ success: true, message: "Message received" }, { status: 200 })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
