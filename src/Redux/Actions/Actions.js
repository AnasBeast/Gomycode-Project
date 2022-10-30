import { SEARCHHOTELS } from "../Constants/Action_type";

export const searchHotels = (payload) => {
    return {
        type :SEARCHHOTELS ,
        payload
    }
}