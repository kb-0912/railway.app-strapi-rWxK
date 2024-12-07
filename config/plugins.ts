export default ({ env }) => ({
    'users-permissions': {
        config: {
            jwtSecret: env('JWT_SECRET'),
        },
    },
    upload: {
        config: {
          provider: 'aws-s3',
          providerOptions: {
            credentials: {
              accessKeyId: env('S3_ACCESS_KEY_ID'),
              secretAccessKey: env('S3_ACCESS_SECRET'),
            },
            region: env('S3_REGION'), // e.g "fr-par"
            endpoint: env('S3_ENDPOINT'), // e.g. "https://s3.fr-par.scw.cloud"
            params: {
              Bucket: env('S3_BUCKET'),
            },
          },
        },
      },
});
