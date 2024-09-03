export const bg_img=(image_source:string )=>{
    return(
        {
            backgroundImage: `url(${image_source})`,
            backgroundPosition:'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover"
        }
    )
}

