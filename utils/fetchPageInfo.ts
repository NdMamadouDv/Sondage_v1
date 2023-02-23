// import { sanityClient } from "@/lib/sanity";
// import { PageInfo } from "@/typing";
// import { groq } from "next-sanity";


// const query = groq`
//     *[_type == "pageInfo"][0] {
//         ...,
//     }
// `

// export const fetchPageInfo = async()=>{
//     const result = await sanityClient.fetch(query)
 
   
//     const pageInfo:PageInfo =result;
//     // console.log('fetch page info:', pageInfo);
//     return pageInfo;
//   }