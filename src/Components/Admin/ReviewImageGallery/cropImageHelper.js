// // cropImageHelper.js
// export default function getCroppedImg(imageSrc, pixelCrop) {
//   const createImage = (url) =>
//     new Promise((resolve, reject) => {
//       const image = new Image();
//       image.setAttribute('crossOrigin', 'anonymous'); // needed for cross-origin images
//       image.onload = () => resolve(image);
//       image.onerror = (error) => reject(error);
//       image.src = url;
//     });

//   return new Promise(async (resolve, reject) => {
//     const image = await createImage(imageSrc);
//     const canvas = document.createElement('canvas');
//     canvas.width = pixelCrop.width;
//     canvas.height = pixelCrop.height;
//     const ctx = canvas.getContext('2d');

//     ctx.drawImage(
//       image,
//       pixelCrop.x,
//       pixelCrop.y,
//       pixelCrop.width,
//       pixelCrop.height,
//       0,
//       0,
//       pixelCrop.width,
//       pixelCrop.height
//     );

//     canvas.toBlob((blob) => {
//       if (!blob) {
//         reject(new Error('Canvas is empty'));
//         return;
//       }
//       blob.name = 'cropped.png';
//       const croppedImageUrl = URL.createObjectURL(blob);
//       resolve(croppedImageUrl);
//     }, 'image/png');
//   });
// }
