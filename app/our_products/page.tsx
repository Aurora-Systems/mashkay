"use client"
import * as JsSearch from "js-search"
import data from "../db/products.json"
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

type Product = {
    product_name: string;
    product_img: string;
    catalogue_link: string;
    product_category: string;
};

type ProductList = Product[];

export default function OurProducts(){
    const [items, set_items] = useState<ProductList>([...data])
    const inputRef:any= useRef(null)
    const search = new JsSearch.Search("product_category")
    search.indexStrategy = new JsSearch.AllSubstringsIndexStrategy()

    search.addIndex("product_name")
                search.addIndex("product_category")
                search.addDocuments(data)
    const handle_search=(search_value:string)=>{
            if( search_value.length > 0 ){
               
                const search_results:any=search.search(search_value)
                console.log(search_results)
                if(search_results.length>0){
                    set_items(search_results)
                }
            }else{
                set_items(data)
            }
    }

   
    return(
        <div className="min-vh-100">
            <div className="text-center mt-5">
                <h1 className="fw-bold display-1 text-black">Our <span className="secondary_text"></span>Products</h1>
            </div>
            <div className="container">

            
            <div className="input-group">
                <input 
                    className="form-control" 
                    type="text" 
                    ref={inputRef}
                    placeholder="Find Part" 
                    onChange={(e)=>handle_search(e.target.value)}
                />
            </div>
            <div className="results d-flex flex-row flex-wrap gap-3 mt-4 mb-5 justify-content-center">
                {
                    items.map((i,index)=>{
                        return(
                            <div className="border bg-light p-3  rounded" key={index} >
                                <div className="text-center">
                                    <img src="https://ngratesc.sirv.com/Mashkay/preview_item.png" width={200} loading="lazy" className="img-fluid img-thumbnail"/>
                                </div>
                                <div className="p-2 text-truncate">
                                    <p className="fw-bold text-center">{i.product_category}</p>
                                    <Link target="_blank" href={`https://wa.me/263782255545?text=Can I get more information on ${i.product_category}`}><button className="btn secondary_button">View</button></Link>
                                </div>
                                

                            </div>
                        )
                    })
                }
            </div>

            </div>
        </div>
    )
}