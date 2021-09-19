export default interface PhoneBrandModel {
    title: string;
    current_page: number;
    last_page: number;
    phones: {
        brand: string,
        phone_name: string,
        slug: string,
        image: string,
        detail: string
    }[];
}