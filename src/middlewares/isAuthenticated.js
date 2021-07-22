import jwt from 'jsonwebtoken'
import { User} from '../database/models'
import subscriptions from '../database/models/subscriptions';
import responseHandler from '../helpers/responseHandler';
class isAuth{
    static async isAuthenticated(req,res,next){
        let token = req.headers['authorization'];

        if (token) {
            token = token.slice(7, token.length);
            const email = await jwt.verify(token, 'secret').email;

            const user = await User.findOne({
                where: {email: email},
            });

            if (user){
                req.user = user;
                next()
            }
            else{

                return res.status(400).json({
                    success: false,
                    message: 'Make sure to login to make this request.'
                })

            }

        }else {
            return res.status(400).json({
                success: false,
                message: 'Make sure to login to make this request.'
            })
        }
    }

    static async isSubscribed(req,res,next){
        const userSubscription = await subscriptions.findOne({where:{userId:req.user.id}});
        if(userSubscription){
            if (userSubscription.isActive){
                next()
            } else {
                return responseHandler(res,"Create a subscription to get going",403,"Create a subscription to get going");
            }
        } else {
            return responseHandler(res,"Subscription not found",403,"Subscription not found")
        }
    }
}
export default isAuth;