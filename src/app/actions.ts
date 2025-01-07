'use server'

type State = {
  success?: boolean;
  error?: {
    name: string | null;
    email: string | null;
    phone: string | null;
    message: string | null;
  };
} | null;

export async function submitContactForm(prevState: State, formData: FormData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const phone = formData.get('phone')
  const message = formData.get('message')

  if (!name || !email || !phone || !message) {
    return {
      success: false,
      error: {
        name: !name ? 'Name is required' : null,
        email: !email ? 'Email is required' : null,
        phone: !phone ? 'Phone is required' : null,
        message: !message ? 'Message is required' : null,
      }
    }
  }

  return { success: true }
}

