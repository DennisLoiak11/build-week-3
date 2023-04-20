import { useState, useEffect } from "react";
import '../App.css';

function AsideDx1(){
    return(
        <section className="rounded sec1 col-3 d-none d-lg-block">
            <div>
                <h2 className="mx-3 mt-3">LinkedIn Notizie</h2>
                <ul>
                    <li><h3 className="h3size">Le Top Companies del 2023 in Italia</h3><p className="psize">Notizie principali</p></li>
                    <li><h3 className="h3size">Frena il venture capital</h3><p className="psize">1 giorno fa</p></li>
                    <li><h3 className="h3size">Un nuovo modello contrattuale</h3><p className="psize">1 giorno fa</p></li>
                    <li><h3 className="h3size">Ucraina: gli ultimi aggiornamenti</h3><p className="psize">1 giorno fa</p></li>
                    <li><h3 className="h3size">Che cosa succede al Salone del Mobile</h3><p className="psize">1 giorno fa</p></li>
                    <li><h3 className="h3size">Tassi sui mutui al 4%</h3><p className="psize">1 giorno fa</p></li>
                </ul>
            </div>
        </section>
    )
}

export default AsideDx1;