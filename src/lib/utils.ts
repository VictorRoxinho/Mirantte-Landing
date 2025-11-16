export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/\D/g, '');
};

export const openWhatsApp = (phone: string, message?: string) => {
  const formattedPhone = formatPhoneNumber(phone);
  const encodedMessage = message ? encodeURIComponent(message) : '';
  const url = `https://wa.me/${formattedPhone}${
    encodedMessage ? `?text=${encodedMessage}` : ''
  }`;
  window.open(url, '_blank');
};

export const sendToWebhook = async (data: any, webhookUrl: string) => {
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch (error) {
    console.error('Error sending to webhook:', error);
    return false;
  }
};
