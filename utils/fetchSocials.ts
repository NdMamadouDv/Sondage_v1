// import { sanityClient } from "@/lib/sanity";
// import { Social } from "@/typing";
// import { groq } from "next-sanity";

// const query = groq`
//     *[_type == "social"] 
// `

// export const fetchSocials = async()=>{
//     const result = await sanityClient.fetch(query)
    
//     const socials:Social[] =result;
//     // console.log('fetching',socials)
//     return socials
// }