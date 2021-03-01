import Link from "next/link";
import {Layout} from "../components/Layout";
import Error from './_error';


const Github = ({user, statusCode}) => { 
  if(statusCode){
    return <Error statusCode={statusCode} />
  }
  return (
    <Layout footer={false}  dark={true}>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{user.name}</h1>
            <img src={`${user.avatar_url}`} alt="" />
            <p>{user.bio}</p>
            <Link href={user.blog ? user.blog : "#!"}>
              <a target="_blank" className="btn btn-outline-secondary my-2">My Blog</a>
            </Link>
            <Link href={user.html_url ? user.html_url : "#!"}>
              <a target="_blank" className="btn btn-outline-secondary my-2">Go to Github</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );}


  // Peticion del backend de nextjs
export async function getServerSideProps(){
  const res = await fetch('https://api.github.com/users/marioalbornoz');
  const data = await res.json()
  
  const statusCode = res.status > 200 ? res.status : false;
  return {
    props: {
      user: data,
      statusCode
    }
  }
}

export default Github;