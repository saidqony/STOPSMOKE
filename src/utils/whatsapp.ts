// src/utils/whatsapp.ts
const WA_NUMBER = '628572773969';
const DEFAULT_MESSAGE = 'Halo, saya ingin konsultasi berhenti merokok';

export function generateWhatsAppLink(message = DEFAULT_MESSAGE): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_LINK = generateWhatsAppLink();
export const WA_DISPLAY = '0857 2773 969';
