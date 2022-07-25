import axios from "axios";

export const plants = async () => {
    const res = await axios.get("http://10.0.2.2:8000/api/getPlants");
    return res;
}