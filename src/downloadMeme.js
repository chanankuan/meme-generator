export function downloadMeme(imageRef, meme) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = imageRef.current.naturalWidth;
  canvas.height = imageRef.current.naturalHeight;

  ctx.font = `${canvas.width / 8}px impact`;
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  // Set shadow properties
  ctx.shadowColor = 'rgba(0, 0, 0)'; // Shadow color (black with 50% opacity)
  ctx.shadowOffsetX = 3; // Shadow horizontal offset
  ctx.shadowOffsetY = 3; // Shadow vertical offset

  ctx.drawImage(imageRef.current, 0, 0);
  ctx.fontVariantCaps = 'all-petite-caps';
  ctx.fillText(meme.topText, canvas.width / 2, canvas.width / 8); // Adjust the position as needed
  ctx.fillText(
    meme.bottomText,
    canvas.width / 2,
    canvas.height - canvas.height / 18
  ); // Adjust the position as needed

  // Convert canvas to data URL
  const imageUrl = canvas.toDataURL('image/jpeg');
  // Create a download link
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = 'meme.jpg';
  link.click();
}
