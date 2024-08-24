import SubstackFeed from "../components/substack"
export default function Blog(){
    return(
        <div className="min-vh-100 mt-3">
          <div className="text-center">
          <h1 className="fw-bold display-1 text-black">Blog</h1>
            <div className="container">
             
            <iframe src="https://mashkay.substack.com/embed"  frameBorder="0" scrolling="no"></iframe>
            </div>
          </div>
        <SubstackFeed/>
        </div>
    )
}