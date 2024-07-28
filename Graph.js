

class Graph{
    constructor(noOfVertices){
        this.noOfVertices=noOfVertices;
        this.AdjList= new Map();
    }

    //function to be implemented
    //1 addVertex(v);
    //2 addEdge(v,w);
    //3 printGraph();

    //1 add vertex(v)
    addVertex(v){
        this.AdjList.set(v,[]);
    }

    //2 addEdge(v,w);
    addEdge(v,w){
        this.AdjList.get(v).push(w);

        this.AdjList.get(w).push(v);
    }

    //3 printGraph();

    printGraph(){
        var get_keys= this.AdjList.keys();

        for(var i of get_keys){

            var get_values=this.AdjList.get(i);
            var conc="";

            for (var j of get_values){
                conc += j+ " ";

                console.log(i + "-> "+conc);
            }
        }
    }


}


var g=new Graph(6);

var vertices=['A','B','C','D','E','F'];

//add vertices
for (var i=0;i<vertices.length; i++){
    g.addVertex(vertices[i]);
}

//adding edges
g.addEdge('A','B');
g.addEdge('A','D');
g.addEdge('A','E');
g.addEdge('B','C');
g.addEdge('D','E');
g.addEdge('E','F');
g.addEdge('E','C');
g.addEdge('C','F');

//UNDERSTAND
// A---> B D E
// B---> A C
// C---> B E F
// D---> A E
// E---> A D F C
// F---> E C
g.printGraph();