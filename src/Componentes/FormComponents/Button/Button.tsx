import './button.css';

export default function Button(props:any){

    const {type, title} = props;
    
    return (
        <div>
            <button { ...type ? type : '' }>{title}</button>
        </div>
    )
}
