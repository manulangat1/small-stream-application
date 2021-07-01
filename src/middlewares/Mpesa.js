import axios from 'axios';
import responseHandler from '../helpers/responseHandler';
import moment from 'moment';

class Mpesa{
    static async getAuthOToken(req,res,next){
        const consumer_key = process.env.MPESA_CONSUMER_KEY;
        const consumer_secret = process.env.MPESA_SECRET_KEY;

        const url = process.env.MPESA_TOKEN_URL

        //form a buffer of the consumer key and secret
        const buffer = new Buffer.from(consumer_key+":"+consumer_secret);

        const auth = `Basic ${buffer.toString('base64')}`;
        try{
            const { data } = await axios.get(url,{
                "headers":{
                    "Authorization":auth
                }
            })
            console.log(data.access_token)
            // req.mpesa_token = data.access_token
            // console.log(req.mpesa_token)
            // return req.mpesa_token = data['access_token']
            return data.access_token
        } catch (error){
            console.log(error)
            return responseHandler(res,error['response']['statusText'],403,error['response']['statusText'])
        }
    }

    static async lipaNaMpesaOnline(req,res){
        const token = await this.getAuthOToken()
        console.log('token',token)
        const auth = `Bearer ${token}`;

        const timestamp = moment()

        const url = process.env.MPESA_LIPA_ONLINE;

        const bs_short_code = process.env.MPESA_SHORT_CODE;

        const passkey = process.env.MPESA_PASS_KEY;

        const password = new Buffer.from(`${bs_short_code}${passkey}${timestamp}`).toString('base64');
        const transcation_type = "CustomerPayBillOnline";
        const amount = "1"; //you can enter any amount
        const partyA = "254740415950"; //should follow the format:2547xxxxxxxx
        const partyB = process.env.lipa_na_mpesa_shortcode;
        const phoneNumber = "254740415950"; //should follow the format:2547xxxxxxxx
        const callBackUrl = "https://1a00b38f367a.ngrok.io/";
        const accountReference = "lipa-na-mpesa-tutorial";
        const transaction_desc = "Testing lipa na mpesa functionality";

        try{
            const { data } = axios.post(url,{
                "BusinessShortCode":bs_short_code,
                "Password":password,
                "Timestamp":timestamp,
                "TransactionType":transcation_type,
                "Amount":amount,
                "PartyA":partyA,
                "PartyB":partyB,
                "PhoneNumber":phoneNumber,
                "CallBackURL":callBackUrl,
                "AccountReference":accountReference,
                "TransactionDesc":transaction_desc
            },{
                "headers":{
                    "Authorization": auth
                }
            }).then(res => console.log(res))
            .catch(err => console.log(err));
            console.log('data',data)
            return responseHandler(res,"Success",200,data)
        } catch (error){
            console.log("Error is",error)
            return responseHandler(res,"Failed",403,error['response']['statustext'])
        }
    }
}

export default Mpesa