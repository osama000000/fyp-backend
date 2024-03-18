// import { Injectable } from '@nestjs/common';

// import {
//   SignApiOptions,
//   UploadApiErrorResponse,
//   UploadApiResponse,
//   v2,
// } from 'cloudinary';

// @Injectable()
// export class CloudinaryService {
//   constructor() {
//     v2.config({
//       cloud_name: 'dvblzpidv',
//       api_key: '947534166772238',
//       api_secret: 'fyRH8EXTPVtgOYT4iq5PiCgIOec',
//     });
//   }

//   async uploadImage(
//     filePath: string,
//   ): Promise<UploadApiResponse | UploadApiErrorResponse> {
//     return new Promise((resolve, reject) => {
//       v2.uploader.upload(
//         filePath,
//         {
//           folder: 'Users',
//         },
//         (error, result) => {
//           if (error) return reject(error);
//           resolve(result);
//         },
//       );
//     });
//   }
// }

// export default CloudinaryService;

import { Injectable } from '@nestjs/common';
import {
  SignApiOptions,
  UploadApiErrorResponse,
  UploadApiResponse,
  v2,
} from 'cloudinary';

@Injectable()
export class CloudinaryService {
  constructor() {
    v2.config({
      cloud_name: 'dqfyi3ijh',
      api_key: '428343419351375',
      api_secret: '0fhEQuSJgDp_s4bEVAKGUzHwpLo',
    });
  }

  async uploadImage(filePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
      v2.uploader.upload(
        filePath,
        { folder: 'profileImage' },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result.url); // Return the Cloudinary image URL
          }
        },
      );
    });
  }
}
