import GrandChild from './GrandChild';
export default function Child(props:any){
    console.log("props:", props);
    return (
        <>
        <h1>Hello from Child</h1>
        <GrandChild count = {props.count} setCount ={props.setCount}/>
        </>
    )
}