import S3 from 'aws-sdk/clients/s3'
import fs from 'fs'
const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const secretKeyId = process.env.AWS_SECRET_KEY
const accessKeyId = process.env.AWS_ACCESS_KEY

const s3 = new  S3({
    region,
    secretKeyId,
    accessKeyId,
    acl: 'public-read'
})

class UploadAWS {
    //uploads to s3 
    static async  uploadFileFn(file){
        const fileStream = fs.createReadStream(file.path);
        const uploadParams = {
            Bucket:bucketName,
            Body: fileStream,
            Key: file.filename,
            acl: 'public-read',
        }
        return s3.upload(uploadParams).promise()
    }
    //downloads from s3 
    static async  getFileFn(fileKey){
        const fileStream = fs.createReadStream(file.path);
        const downloadParams = {
            Bucket:bucketName,
            Key: fileKey
        }
        return s3.getObject(downloadParams).createReadStream()
    }


}
export default UploadAWS;