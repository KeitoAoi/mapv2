export var adj_nodes = {
    "c1" :["c2","c3"],
    "c2" :["c1","c4"],
    "c3" :["c1","c4"],
    "c4" :["c2","c3"]
}
var dict ={
    "c1" : false,
    "c2" : false,
    "c3" : false,
    "c4" : false,
}
arr=[]
var p1 ="nan"
var p2 ="nan"
const find_path=(ss)=> {
    if(p1 == "nan"){
        p1 = ss
    }
    else if(p2 == "nan"){
        p2 = ss
        points=dfs(p1,p2,adj_nodes[p1],dict,0,arr)
        //console.log(points)
        //console.log("on")
        return (points)
    }
    else{
        p1=p2
        p2 =ss
        dict ={
            "c1" : false,
            "c2" : false,
            "c3" : false,
            "c4" : false,
        }
        arr=[]
        points=dfs(p1,p2,adj_nodes,dict,0,arr)
        //console.log(points)
        //console.log("on")
        return (points)
    }
 return(
    [p1,p2]    

 )
 };

 export default find_path


 




export const dfs = (now,goal,adj,visited,length,path)=> {
    //console.log(now)
    if(now==goal){
        return[length,path]
    }
    flag=0
    //console.log(adj)
    for(let i=0;i<adj.length;i++){
        //console.log(adj[i])
        if(visited[adj[i]]==false){
            flag=1

        }
    }
    if(flag==0){
        return [999999999,path]
    }
    else{
        visited[now]=true
        path_length=9999999
        arr=[]
        //console.log(adj,adj.length)
         //path.push(now)
        for(let i=0;i<adj.length;i+=1){
           // console.log(adj[i])
            if(visited[adj[i]]==false){
                //console.log(path)
                
                //console.log(i)
                x=dfs(adj[i],goal,adj_nodes[adj[i]],visited,length+1,path.concat(now))
                
                //console.log(i)
                if(x[0]<path_length) {
                    arr=x[1]
                    path_length=arr.length
                }
            }
            //console.log("done")
            //console.log(i)
            //console.log(adj)
        }
        //path.pop()
        return [path_length,arr]
    }
}

