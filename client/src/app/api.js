import axios from "axios";
import {API_KEY} from "./constants";

function getHeader() {
    return {
        'Authorization': `${API_KEY}`,
        'Content-Type': "application/json"
    }
}

export async function post(url, body) {
    try {
        return await axios.post(url, body, {
            headers: getHeader(),
        })
    } catch (err) {
        return err.message;
    }


}
