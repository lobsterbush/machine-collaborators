/**
 * Site configuration.
 *
 * Formspree setup:
 * 1. Create a free account at https://formspree.io
 * 2. Create two forms: "Subscribe" and "Nominate"
 * 3. Paste the form IDs below (the part after /f/ in the endpoint URL)
 *
 * Each form ID looks like: "xyzabcde"
 */
export const config = {
  formspree: {
    subscribeFormId: 'xpwzgkpj',
    nominateFormId: 'mldjgkwn',
  },
  convenerEmail: 'charles.crabtree@monash.edu',
} as const

export function formspreeEndpoint(formId: string): string {
  return `https://formspree.io/f/${formId}`
}
