

class isAuth{
    static async isAuthenticated(req,res,next){
        let token = req.headers['authorization'];

        if (token) {
            token = token.slice(7, token.length);
            const email = await jwt.verify(token, 'secret').email;

            const user = await models.User.findOne({
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
}