import Head from "next/head";
import Link from "next/link";

const Header = () => {
    return (<>
        <Head>
            {/* bootstrap cdn  */}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
        </Head>


        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link href="/firstpage"><a class="navbar-brand">My Store</a></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link href="/firstpage"><a class="nav-link active" aria-current="page">Firstpage</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link href="/secondpage"><a class="nav-link">Seoondpage</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link href="/about"><a class="nav-link">About</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link href="/about/contact"><a class="nav-link">Contact</a></Link>
                        </li>

                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>



    </>);
}

export default Header;