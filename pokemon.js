class Pokemon{
    nombre = ''
    elemento = ''
    vida1 = 100
    vida2 = 100
    ataque = ''
    daño_ataque1 = 20
    daño_ataque2 = 15
    daño_ataque3 = 10
    constructor(nombre,elemento,ataque){
        this.nombre = nombre
        this.elemento = elemento
        this.ataque = ataque
    }

    contadorVida1()
    {
        if(this.vida1 != 0)
        this.vida1 = this.vida1 - this.daño_ataque1
        
        else
        alert("GAME OVER")
    }
    contadorVida2()
    {
        if(this.vida1 != 0 && this.vida1 > this.daño_ataque2){
                this.vida1 = this.vida1 - this.daño_ataque2
        }
        else if(this.vida1 < this.daño_ataque2 && this.vida1 > 0)
        {
            return this.vida1 = this.vida1 - this.vida1
        }
        
        else
        {
            this.vida
            alert("GAME OVER")
            window.location.href="index.html"
        }
    }
    contadorVida3()
    {
        if(this.vida1 != 0)
        this.vida1 = this.vida1 - this.daño_ataque3

        else
        alert("GAME OVER")
    }
}