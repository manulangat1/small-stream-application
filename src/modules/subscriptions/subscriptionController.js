import stripe from 'stripe';
import   { Subscriptions } from '../../database/models'
import errorHandler from './../../helpers/errorHandler';
import responseHandler from './../../helpers/responseHandler';
import moment from 'moment'
import Mpesa from '../../middlewares/Mpesa';

const Stripe = stripe(process.env.STRIPE_SECRET_KEY);

class subscriptionController {
    static async createSubscription(req,res){
        try{
            
            // await Mpesa.getAuthOToken()
            // console.log(req.mpesa_token)
            // await Mpesa.lipaNaMpesaOnline()
            const userSubscriptionStatus = await Subscriptions.findOne({where:{userId:req.user.id,isActive:true}})
            if (userSubscriptionStatus){
                return responseHandler(res,"You have an active subscription",403,"You have an active subscription")
            } else {
                const endDate = moment().add(30,'days')
                const { plan} = req.body
                const subscription = await Subscriptions.create({userId:req.user.id,plan,planId:'1',endDate,isActive:true})
                return responseHandler(res,"Subscription successful",201,subscription)
            }
            
        } catch(error){
            return errorHandler.handleError(error.message,500,res)
        }
    }
}
export default subscriptionController