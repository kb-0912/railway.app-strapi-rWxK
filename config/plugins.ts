export default ({ env }) => ({
    'users-permissions': {
        config: {
            jwtSecret: env('JWT_SECRET'),
        },
    },
    upload: {
        config: {
          provider: "aws-s3",
          providerOptions: {
            rootPath: env("S3_PATH"),
            credentials: {
              accessKeyId: env("S3_ACCESS_KEY_ID"),
              secretAccessKey: env("S3_SECRET_ACCESS_KEY"),
            },
            region: env("S3_REGION"),
            params: {
              Bucket: env("S3_BUCKET"),
            },
          },
          actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
          },
        },
      },
});
