import React,{useEffect,useState} from "react";
import Modal from '../../components/UI/Modal';

const Notification=(props)=>{
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isVisible,setIsVisible]=useState(false);
    const [items, setItems] = useState([]);
    const teacherId=localStorage.getItem("id");

    useEffect(() => {
        // our fetch codes
        fetch(`https://userdetails-d84c5-default-rtdb.firebaseio.com/staff/${teacherId}/notification.json/`)
            .then((res) => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    const loadData = [];
                    console.log(data);
                    for (let key in data) {
                        loadData.push({
                            id: key,
                            name: data[key].name,
                            email: data[key].email,
                            batch: data[key].batch,
                            semester: data[key].semester
                        });
                    }
                    setItems(loadData);
                    console.log(data);

                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);
    const HideCartHandler = () => {
       setIsVisible(false);
    };

    return (
        <React.Fragment>
           
                {items.map((item)=>(
                    <ul>
                    <td>{item.email}</td><br></br>
                    <td>{item.name}</td>
                    </ul>


                ))
}


           
        </React.Fragment>
    )

}

export default Notification;