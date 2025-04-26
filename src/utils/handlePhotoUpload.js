import { getEnvVar } from './getEnvVar.js';
import { saveFileToCloudinary } from './saveFileToCloudinary.js';
import { saveFileToUploadDir } from './saveFileToUploadDir.js';

export const handlePhotoUpload = async (photo) => {
  if (!photo) {
    return undefined;
  }

  if (getEnvVar('ENABLE_CLOUDINARY') === 'true') {
    return await saveFileToCloudinary(photo);
  } else {
    return await saveFileToUploadDir(photo);
  }
};
