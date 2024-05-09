import axios from "axios"
class NearP2PApi {
    static async getNearPrice() {
        try {
            const {data} = await axios.post('https://nearp2p.com/api/sendmailp2p/get-price/',
                {
                    "fiat": "USD",
                    "crypto" : "NEAR"
                }
            )
            return data
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default NearP2PApi