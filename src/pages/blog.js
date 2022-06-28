import { graphql, useStaticQuery } from "gatsby";
 import React from "react";
 import Layout from "../components/layout";

 function BlogPage() {
   const data = useStaticQuery(graphql`
     query {
       allFile {
         nodes {
           name
         }
       }
     }
   `);

   return (
     <Layout pageTitle="My Blog Posts">
       <p>My cool posts will go in here</p>

       <ul>
         {data.allFile.nodes.map((node) => (
           <li key={node.name}>{node.name}</li>
         ))}
       </ul>
     </Layout>
   );
 }

 export default BlogPage;