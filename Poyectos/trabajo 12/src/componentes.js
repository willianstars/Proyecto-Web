export class Componentes {

    //metodo boton tendra unas propiedades o props

    //template string
    static boton(texto, clase, evento){
        return `
            <style>
            .btn {
                padding: 10px;
                background-color: #676767;
                color: #ffffff;
                border: 0px;
                border-radius: 5px;
                font-family: Trebuchet, Helvetica;
                font-size:14px;
                box-shadows: 0px 0px 5px #454545;
                margin-rigth: 5px;
            }
            btn:hover{
                background-color: #999999;
            }
            </style>
            <button class="btn ${clase}" ${evento}>${texto}</button>
        `;
    }
    //objeto
    static boton1(texto, clase, texto){
        const btn = document.createElement('button');
        btn.style.backgroundColor = "#454545";
        btn.style.padding = "10px";
        btn.style.color = "#ffffff";
        btn.style.boxShadow = "0px 0px 5px #454545";
        btn.classList.add(clase);
        btn.innerHTML = `${texto}`;
    }

}