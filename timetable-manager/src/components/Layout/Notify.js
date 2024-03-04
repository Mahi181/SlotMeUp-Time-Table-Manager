import React,{useEffect,useState,useCallback} from "react";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom";
import Notifications from "react-notifications-menu";
const Notify = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isVisible,setIsVisible]=useState(false);
    const [items, setItems] = useState([]);
    const teacherId=localStorage.getItem("id");
    const match = useRouteMatch();

    useCallback(useEffect(() => {
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
                            image:'https://cdn-icons-png.flaticon.com/512/2645/2645883.png',
                            message:(<p>
                            Name:{data[key].name}&nbsp;&nbsp;
                            
                            Email:{data[key].email}<br/>
                            date:{data[key].date}&nbsp;&nbsp;
                            Time:{data[key].time}<br/>
                            Message:{data[key].message}<br/>

                            </p>),
                              receivedTime:'12h ago',
                              detailPage : `/staff/timeTable/`,
                              
                            // name: data[key].name,
                            // email: data[key].email,
                            // batch: data[key].batch,
                            // semester: data[key].semester
                        });
                    }
                    setItems(loadData);
                    console.log(loadData);
                   

                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []),[]);
    const HideCartHandler = () => {
       setIsVisible(false);
    };
    console.log(items);
   let final=[]
   if (error) {

    <>{error.message}</>;

} else if (!isLoaded) {
    return <>loading...</>;
} 
   

    return (
        <React.Fragment>
           {isLoaded && <Notifications data={items}
           
           header={
            {
              title: 'Notifications',
              option: { text: 'View All', onClick: () => {} }
            }
          }
          headerBackgroundColor = 'bisque'
          ></Notifications>}
           {!isLoaded && <p> Please refresh the page </p>}
           
                {/* {items.map((item)=>(
                    <ul>
                    <td>{item.email}</td><br></br>
                    <td>{item.name}</td>
                    </ul>


                ))
} */}


           
        </React.Fragment>
    )
   

}

export default Notify;