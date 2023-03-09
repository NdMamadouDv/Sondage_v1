
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

export interface Faq extends SanityBody {
    _type:"faq";
    question1:string;
    reponse1:String;
    question2:string;
    reponse2:String;
    question3:string;
    reponse3:String;
    question4:string;
    reponse4:String;
    question5:string;
    reponse5:String;
    question6:string;
    reponse6:String;
}


export interface Social extends SanityBody {
    _type:"social";
    title:string;
    url:string;
}