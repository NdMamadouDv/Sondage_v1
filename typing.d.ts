
interface SanityBody {
    _createdAt:string;
    _id:string;
    _rev:string;
    _updatedAt:string;
}

interface Image {
    _type:"image";
    asset:{
        _ref:string;
        _type:"reference";
    }
}
export interface PageInfo extends SanityBody {
    _type:"pageInfo";
    name:string;
    role:string;
    heroImage:Image;
    backgroundInformation:string;
    profilePic:Image;
    phoneNumber:string;
    email:string;
    address:string;
    socials:Social[]
}
export interface Technology extends SanityBody {
    _type:"skill";
    title:string;
    progress:number;
    image:Image;
}


export interface Social extends SanityBody {
    _type:"social";
    title:string;
    url:string;
}