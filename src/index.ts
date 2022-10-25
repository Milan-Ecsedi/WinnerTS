interface Results{
    winner: string;
   
   




   
}




class football implements Results{
   winner: string;
   #goals: string;
   constructor (winner : string, goals :string){

    this.winner=winner;
    this.#goals= goals;
   }

   result(){


    return "Football match:" + this.#goals;
   }

}

class Marathon implements Results{

    winner: string;
    time: number;

    constructor(winner: string, time: number){
        this.winner=winner;
        this.time=time;
    }

    result(){


        return "Marathon: "+ this.time;

    }
}


class Calvinball implements Results{

    
    winner: string;
    point: number;
    constructor(winner: string){

    this.winner=winner;
    this.point= 3;

}

    set nyertes(winner : string){

        if(this.winner!= "Calvin")
        {

        throw ("A nyertes csak Calvin vagy Hobbes lehet!");
        }
    else {

    this.winner= winner;
    }
}

    result(){


        return "Calvinball: "+ this.point;

    }

}


let Results = [

 new football("Argentina", "0-1"),
 new Marathon("Ronaldo Ardema",120),
 new Calvinball("Calvin")
]

for(let sport of Results){

console.log(sport.result);
}



  