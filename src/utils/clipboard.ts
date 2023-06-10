export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    alert('Texto copiado al portapales!')
  } catch (error) {
    console.error('Error al copiar: ', error)
  }
}
