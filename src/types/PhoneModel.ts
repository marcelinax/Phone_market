export default interface PhoneModel {
    brand: string;
    phone_name: string;
    thumbnail: string;
    phone_images: string[];
    release_date: string;
    dimension: string;
    os: string;
    storage: string;
    specifications: {
        title: string,
        specs: {
            key: string,
            val: string[]
        }[];
    }[];
}