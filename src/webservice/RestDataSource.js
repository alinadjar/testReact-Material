import Axios from "axios";

export class RestDataSource {

    constructor(base_url, errorCallback) {
        this.BASE_URL = base_url;
        this.handleError = errorCallback;
    }

    GetData(callback) {
        console.log(this.BASE_URL);
        this.SendRequest("get", this.BASE_URL, callback);
    }

    async GetOne(id, callback) {
        this.SendRequest("get", `${this.BASE_URL}/${id}`, callback);
    }

    async Store(data, callback) {
        this.SendRequest("post", this.BASE_URL, callback, data)
    }

    async Update(data, callback) {
        this.SendRequest("put", `${this.BASE_URL}/${data.id}`, callback, data);
    }

    async Delete(data, callback) {
        this.SendRequest("delete", `${this.BASE_URL}/${data.id}`, callback, data);
    }

    async SendRequest(method, url, callback, data) {
        try {

            var response = (await Axios.request({
                method: method, 
                url: url,
                data: data
            }));

            // debugger;
            callback(response.data);
            // console.log(response);
            // console.log(response.data);
            // console.log(response.status);

            // Axios.request({
            //     method: method, 
            //     url: this.BASE_URL
            // }).then(response => callback(response.data));
            

        } catch (err) {
            this.handleError("Operation Failed: Network Error");
            //console.log(this.BASE_URL);
        }
    }
}
