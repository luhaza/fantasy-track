import React, {useState, useEffect } from 'react'; 
import axios from 'axios'; 
import { useParams } from 'react-router-dom';

const AthleteSearch = ({ athletes }) => {
    const [athlete, setAthlete] = useState(null);
    const { _id } = useParams();  
    useEffect(() => {
        const fetchAthlete = async () => {
            try {
                const response = await axios.get(`/athletes/${_id}`);
                setAthlete(response.data); 
            } catch (error) {
                console.error('Error fetching specific athlete:', error); 
            }
        };
        
        fetchAthlete(); 
    }, [_id]); 
    
    if (!athlete) {
        return <div>Loading...</div>
    } 

    return (
        <div className=" max-h-[400px] overflow-y-auto border-b border-l">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead class="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Athlete
                    </th>
                    <th scope="col" class="px-6 py-3">
                        School
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Event
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Value
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Add</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {athletes.map((athlete) => (
                    <tr key={athlete._id} class="bg-white border-b">
                        <td class="px-6 py-4">
                            {athlete.first} {athlete.last}
                        </td>
                        {/* <td class="px-6 py-4">
                            {athlete.gender}
                        </td> */}
                        <td class="px-6 py-4">
                            {athlete.school}
                        </td>
                        {/* <td class="px-6 py-4">
                            {athlete.grade}
                        </td> */}
                        <td class="px-6 py-4">
                            {athlete.event}
                        </td>
                        <td class="px-6 py-4">
                            {athlete.value}
                        </td>
                        <td class="px-6 py-4">
                            Add
                        </td>
                    </tr>
                ))}
                {/* <tr class="bg-white border-b ">
                    <td class="px-6 py-4">
                        Luke Zanuck
                    </td>
                    <td class="px-6 py-4">
                        Williams College
                    </td>
                    <td class="px-6 py-4">
                        2
                    </td>
                    <td class="px-6 py-4">
                        3k
                    </td>
                    <td class="px-6 py-4">
                        12/20
                    </td>
                    <td class="px-6 py-4">
                        Add to team
                    </td>
                </tr> */}
            </tbody>
        </table>
        </div>
    )
}; 

export default AthleteSearch; 