import {useForm} from "react-hook-form";
export default function App(){
const {
    register,
    handleSubmit,
    reset,
}=useForm();

const onSubmit=(data)=>{
    alert(JSON.stringify(data))
    reset();

}
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
            {...register('FirstName',{required:true,minLength:{value:5}})}/>
            <input 
            {...register('LastName',{required:true,minLength:{value:5}})}/>
            <input type="submit"/> 
        </form>
    )
    
}
