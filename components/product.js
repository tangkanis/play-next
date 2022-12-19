import {useState, useEffect} from "react";

export default function Product() {

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const url = "http://localhost:8080/v1/product";
        fetch(url).then((response) => response.json()).then((data) => {
            setData(data);
            setIsLoading(false);
        });
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                    {data.map((item, key) => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <div key={key} className="col">
                                <div className="card shadow-sm">
                                    {/*<svg className="bd-placeholder-img card-img-top" width="100%" height="225"*/}
                                    {/*     xmlns="http://www.w3.org/2000/svg" role="img"*/}
                                    {/*     aria-label="Placeholder: Thumbnail"*/}
                                    {/*     preserveAspectRatio="xMidYMid slice" focusable="false">*/}
                                    {/*    <title>Placeholder</title>*/}
                                    {/*    <rect width="100%" height="100%" fill="#55595c"></rect>*/}
                                    {/*</svg>*/}

                                    <img className="bd-placeholder-img card-img-top" width="100%" height="225"
                                         src={item.productImage} role="img"
                                         aria-label="Placeholder: Thumbnail"
                                         >
                                    </img>

                                    <div className="card-body">
                                        <p className="card-title">{item.productName}</p>
                                        <p className="card-text">{item.productDescription}</p>
                                        {/*<div className="d-flex justify-content-between align-items-center">*/}
                                        {/*    <div className="btn-group">*/}
                                        {/*        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>*/}
                                        {/*        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>*/}
                                        {/*    </div>*/}
                                        {/*    <small className="text-muted">9 mins</small>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    )
    // return (<div className="album py-5 bg-light">
    //         <div className="container">
    //             <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    //                 <div className="col">
    //                     <div className="card shadow-sm">
    //                         <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
    //                              xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
    //                              preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
    //                             <rect width="100%" height="100%" fill="#55595c"></rect>
    //                             <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
    //                         </svg>
    //
    //                         <div className="card-body">
    //                             <p className="card-text">This is a wider card with supporting text below as a natural
    //                                 lead-in to additional content. This content is a little bit longer.</p>
    //                             {/*<div className="d-flex justify-content-between align-items-center">*/}
    //                             {/*    <div className="btn-group">*/}
    //                             {/*        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>*/}
    //                             {/*        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>*/}
    //                             {/*    </div>*/}
    //                             {/*    <small className="text-muted">9 mins</small>*/}
    //                             {/*</div>*/}
    //                         </div>
    //                     </div>
    {/*                </div>*/
    }
    {/*            </div>*/
    }
    {/*        </div>*/
    }
    {/*    </div>)*/
    }
}
