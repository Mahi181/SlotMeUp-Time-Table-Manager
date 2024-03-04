import { useState, useEffect } from "react";

import classes from "./SearchStudent.module.css"
import { FcGraduationCap } from 'react-icons/fc';
import React from "react";
const SearchStudent = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    //     set search query to empty string
    const [q, setQ] = useState("");
    //     set search parameters
    //     we only what to search countries by capital and name
    //     this list can be longer if you want
    //     you can search countries even by their population
    // just add it to this array
    const [searchParam] = useState(["capital", "name"]);

    useEffect(() => {
        // our fetch codes
        fetch("https://userdetails-d84c5-default-rtdb.firebaseio.com/student.json")
            .then((res) => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    const loadData = [];
                    for (let key in data) {
                        loadData.push({
                            id: key,
                            name: data[key].user,
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


    function search(items) {

        return items.filter((item) => {

            return searchParam.some((newItem) => {
                return (

                    item["email"].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
                );
            });
        });
    }
    if (error) {

        <>{error.message}</>;

    } else if (!isLoaded) {
        return <>loading...</>;
    } else {


        return (

            <div className={classes.wrapper}>
                <div class="container">
                    <h3>
                        <span>Search Student By Enrollment</span><br></br>
                        <label htmlFor="search-form">
                            <input type="search" class="form-control search-input" data-table="customers-list"
                                name="search-form"
                                id="search-form"
                                placeholder="Search Student..."
                                value={q}
                                /* 
                                // set the value of our useState e
                                //  anytime the user types in the search box
                                */
                                onChange={(e) => setQ(e.target.value)} />
                            <span className={classes.srOnly}>Search countries here</span>
                        </label>
                    </h3>

                    <table class="table table-striped mt32 customers-list">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>

                                <th>Batch</th>
                                <th>Select</th>
                            </tr>
                        </thead>
                        { search(items).map((item) => (
                        <tbody>
                            <tr>

                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.batch}</td>
                                <td><div class="checkbox">
                                    <input type="checkbox" name="round-checkbox" id="round-checkbox"></input>
                                    <label for="round-checkbox">checked</label>
                                </div></td>
                            </tr>

                        </tbody>
                          )  )
                    }
                    
    
    


                    </table>
                </div>
            </div>

                       
        
                   )     }               



    

}

export default SearchStudent;