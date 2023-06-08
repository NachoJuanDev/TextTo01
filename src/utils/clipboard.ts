export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    alert('Texot copiado al portapales!')
  } catch (error) {
    console.error('Failed to copy to clipboard:', error)
  }
}
