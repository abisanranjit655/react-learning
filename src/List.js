import React from "react";

function List(){
    const items=['Ferrari','Lamborghini','Porcshe','Mclaren','Bugatti','Koenigsegg','Pagani','Rimac'];
    const users=[
        {id:1, name: 'Rohit Sharma' ,age:25},
        {id:2, name: 'Virat Kolhi', age:35},
        {id:3, name: 'Suresh Raina', age:34}, 
    ];
    const Cars = [
        {id:1, name:'Ferrari SF90', horse_power:'1000hp'},
        {id:2, name:'Lamborghini Aventador', horse_power:'1000hp'},
        {id:3, name:'Porsche 911', horse_power:'500hp'},
        {id:4, name:'McLaren 720S', horse_power:'1000hp'},
        {id:5, name:'Bugatti Chiron', horse_power:'1500hp'},
        {id:6, name:'Koenigsegg Jesko', horse_power:'1300hp'},
        {id:7, name:'Pagani Huayra', horse_power:'1200hp'},
        {id:8, name:'Rimac C_Two', horse_power:'2000hp'},
    ]
    return(
        <div>
            <h1>My Favoruite cars</h1>
            <ul>
                {items.map((items,index) =>(
                    <li key={index}>{items}</li>
                ))}
            </ul>
            <ul>
                {users.map((users) =>(
                    users.age>30?(
                    <li key={users.id}>{users.name} is over 30 years  old.</li>
                    ):(
                        <li key={users.id}>{users.name} is under 30 years old</li>
                    )
                    
                ))}
            </ul>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Horse Power</th>
                    </tr>
                </thead>
                <tbody>
                    {Cars.map((cars) => (
                        <tr key={cars.id}>
                            <td>{cars.name}</td>
                            <td>{cars.horse_power}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
} export default List;