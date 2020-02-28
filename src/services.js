
class Service {
    getFetchData = async (url) => {
        const responce = await fetch(url);

        return await responce.json();        
    }
}

export const serviceApi = new Service();
