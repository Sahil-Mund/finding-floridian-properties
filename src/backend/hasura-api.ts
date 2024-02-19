
import { GET_ALL_PROPERTIES, GET_ALL_PROPERTIES_FOR_POST, GET_PROPERTY_BY_TITLE, X_HASURA_ADMIN_SECRET } from "api";
import axios from "axios";

export const getAllProperties = async () => {

    try {
        const response = await axios.get(GET_ALL_PROPERTIES_FOR_POST, {
            headers: {
                'Content-Type': 'application/json',
                'x-hasura-admin-secret': X_HASURA_ADMIN_SECRET
            }
        });

        console.log(response.data.Properties);

        return response.data.Properties;

        // return ;
    } catch (error) {
        return error;
    }
}
export const getPropertyByTitle = async (title: string) => {

    try {
        const response = await axios.get(`${GET_PROPERTY_BY_TITLE}/${title}`, {
            headers: {
                'Content-Type': 'application/json',
                'x-hasura-admin-secret': X_HASURA_ADMIN_SECRET
            }
        });

        // console.log(response.data.Properties);

        return response.data.Properties;

        // return ;
    } catch (error) {
        return error;
    }
}