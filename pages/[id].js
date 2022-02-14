//to get path

export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const userdata = await response.json()

    const paths = userdata.map((user)=>{
        return {
            params: {id:user.id.toString()}
        }
    })
    return {
        paths,
        fallback:false}
}


export const getStaticProps = async(context) =>{
    const id = context.params.id
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const userdata = await response.json()

    return {
        props:{user:userdata}
    }
}

const fetchuserdata = ({userdetails}) => {
    return ( 
        <>
        <h1>{userdetails.username}</h1>
        </>
     );
}
 
export default fetchuserdata;