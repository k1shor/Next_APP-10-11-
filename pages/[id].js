import Head from 'next/head'
import Link from 'next/link'

export const getStaticPaths=async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const userdata= await response.json()

    const paths=userdata.map(data=>{
        return{
            params:{id:data.id.toString()}
        }
    })
    return{
        paths, 
        fallback:false
    }
}

export const getStaticProps=async(context)=>{
    const id=context.params.id
    const response=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const userdata= await response.json()

    return{
        props:{userinfo:userdata}
    }
}

const userDetails = ({userinfo}) => {
    return ( 
        <>


        <h1>{userinfo.name}</h1>
        <h2>{userinfo.username}</h2>
        <h2>{userinfo.email}</h2>
        {/* <h3>{userinfo.address.city}</h3> */}
        <p>{userinfo.phone}, {userinfo.website}</p>


        </>
     );
}
 
export default userDetails;