import responseHandler from "../../helpers/responseHandler";



class itemController {
    static async loadAllItems(req,res){
        return responseHandler(res,"Items Loaded successfully",200,"Items loaded successfully")
    }

    static async loadCategories(req,res){
        return responseHandler(res,"Items Loaded successfully",200,"Items loaded successfully")
    }
}

export default itemController;