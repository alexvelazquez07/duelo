class Carta{
    constructor(nombre, costo){
        this.nombre = nombre;
        this.costo = costo;
    }
}

class Unidad extends Carta{
    constructor(nombre, costo, energia, res){
        super(nombre, costo);
        this.energia = energia;
        this.res = res;
    }

    mostrarInfoCarta(){
        console.log(`El ${this.nombre} tiene ${this.energia} de energia y ${this.res} de resiliencia`);
    }

    atacar(un_objeto){
        if (un_objeto instanceof Unidad){
                // console.log(el_objeto, "SI ES INSTANCIA DE UNIDAD")
                un_objeto.res = un_objeto.res -this.energia;

        }
        else{
            throw new Error(" ESA CARTA NO EXISTE");
        }

        }
    }
class Efectos extends Carta{
    constructor(nombre, costo, texto, stat, magnitud){
        super();
        this.texto = texto;
        this.stat = stat;
        this.magnitud = magnitud;
    }

    play(el_objeto){
        if (el_objeto instanceof Unidad){
            if(this.stat == "Resiliencia"){
                // console.log(el_objeto, "SI ES INSTANCIA DE UNIDAD")
                el_objeto.res = el_objeto.res + this.magnitud;
            }
            else{
                el_objeto.energia = el_objeto.energia + this.magnitud;
            }
        }
        else{
            throw new Error(" ESA CARTA NO EXISTE");
        }
    }
}
// Crear cartas de efectos
let algoritmo_duro = new Efectos("Algoritmo Duro", 2, "aumentar resistencia en 3", "Resiliencia", 3)
let rechazo_promesa = new Efectos("Rechazo Promesa", 1, "reducir resistencia en 2", "Resiliencia", -2);
let programacion_pareja = new Efectos("Programacion Pareja", 3, "aumenta el poder en 2", "Poder", 2)

// Crear objetos/jugadores/ instancias de clase
// TURNO 1
let ninja_cinturon_rojo = new Unidad("Ninja Cinturon Rojo", 3, 3, 4);
ninja_cinturon_rojo.mostrarInfoCarta();
// Aplicamos efecto duro en ninja rojo
algoritmo_duro.play(ninja_cinturon_rojo);
ninja_cinturon_rojo.mostrarInfoCarta();

// TURNO 2
let ninja_cinturon_negro = new Unidad("Ninja Cinturon Negro", 4, 5, 4);
rechazo_promesa.play(ninja_cinturon_rojo);
ninja_cinturon_rojo.mostrarInfoCarta();

//TURNO 3
programacion_pareja.play(ninja_cinturon_rojo);
ninja_cinturon_rojo.mostrarInfoCarta();

//ATAQUE EXODIA
ninja_cinturon_rojo.atacar(ninja_cinturon_negro);
ninja_cinturon_negro.mostrarInfoCarta();
