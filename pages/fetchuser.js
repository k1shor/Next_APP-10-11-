import Link from "next/link"


export const getStaticProps= async ()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response.json())
        const userdata = await response.json()

return {
    props:{users:userdata}
}
}


const fetchuser = ({users}) => {
    return ( <>
    {console.log(users[0].name)}

    {
    users.map((user,i)=>(
        <li key={i}><Link href={`/${user.id}`}><a>{user.username}</a></Link></li>
    ))
}
    </> );
}
 
export default fetchuser;