
import React, { useState } from 'react';
import Data from './Api';
import Newsitem from './Newsitem';


function News() {

    const [state, setstate] = useState(9)
    const slc = Data.slice(0, state)

    const load = () => {
        setstate(state + state)
    }


    const [search, setsearch] = useState("")
    return (
     
        <div className="container">
              
            <div className="row">
                <div className="col-md-8">
                </div>
                    <div className="col-md-4 my-5 ">
                        <input
                            className="form-control" id="exampleFormControlInput1"
                            type=" text " placeholder="search by title and content"
                            onChange={(event) => { setsearch(event.target.value) }} />

                    </div>
               
                {

                    slc.filter(val => {
                        if (search === "") {
                            return val;
                        }
                        else if (
                            val.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
                            val.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())

                        ) {
                            return val
                        }
                    }).map((set) => {
                        return (
                            <div className="col-md-4 my-2">

                                <Newsitem title={set.title.slice(0, 25)} content={set.content.slice(0, 100)} urlToImage={set.urlToImage}
                                url={set.url} />
                            </div>
                        )
                    })
                }
            </div>
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-5  " >
                        <button className="btn btn-primary " onClick={load}> Lode More</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default News
