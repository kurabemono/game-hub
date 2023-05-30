import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "ba6afca59d9e421db2681430d7c08d2e"
    }
})