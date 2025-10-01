import React from "react";
function Header()
{
 const miNombre = "Pablo Diaz";
 const miTitulo = "Desarrollador full Stark";
 const miFoto = "https://i0.wp.com/stickersmed.com/wp-content/uploads/2023/11/calamardo-sexy.jpg?fit=800%2C800&ssl=1";
 const miUbicacion = "Entre tongoy y los vilos";


return(
    <header className= "bg-secondary text-white py-5">
        <div className="container">
            <div className="row align-items-center">
                {/*foto perfil*/}
                <div className="col-md-3 text-center-3 mb-md-0">
                    <img
                    src={miFoto}
                    alt={`Foto de ${miNombre}`}
                    className="rounded-circle img-fluid border border-white border-3"
                    style={{maxWidth:'150px'}}
                    />
            
                </div>
                <div className="col-md-9">
                    <h1 className="display-4 fw-bold mb-2">
                        {miNombre}
                    </h1>
                    <h2 className="h3 mb-3">
                        {miTitulo}
                        
                    </h2>
                    <p className="mb-0">
                        {miUbicacion}
                    </p>
                </div>
            
            </div>
        </div>


        </header> 

)

} 
export default Header;
