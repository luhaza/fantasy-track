import React, {useState, useEffect } from 'react'; 
import axios from 'axios'; 
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

const Meets = ({ meets }) => {
    const [meet, setMeet] = useState(null);
    const { _id } = useParams(); 
    const [expanded, setExpanded] = useState(false);
    useEffect(() => {
        const fetchMeet = async () => {
            try {
                const response = await axios.get(`/meets/${_id}`);
                setMeet(response.data); 
            } catch (error) {
                console.error('Error fetching specific meet:', error); 
            }
        };
        
        fetchMeet(); 
    }, [_id]); 

    if (!meet) {
        return <div>Loading...</div>
    } 

    const toggleExpand = () => {
      setExpanded(!expanded);
    };
  
    return (
        <>
            {meets.map((meet) => (
                <tr key={meet._id} class="bg-white border-b">
                        <td scope="row" class="col-span-1 px-4 py-4 font-medium text-black whitespace-nowrap ">
                            <button
                                className={`cursor-pointer ${
                                expanded ? 'selected' : ''
                        } p-2` }
                        onClick={toggleExpand} > 
                        {expanded ? '-' : '+'}
                    </button>
                    </td>
                    <td scope="row" class="col-span-1 px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        {meet.name}
                    </td>
                    <td class="px-6 py-4 col-span-1" >
                        {meet.division}
                    </td>
                    <td class="px-6 py-4 col-span-1">
                        {meet.meetDate}
                    </td>
                    <td class="px-6 py-4 col-span-1">
                        {meet.players} / {meet.maxPlayers}
                    </td>
                    <td class="px-6 py-4 col-span-1">
                        {meet.registerDate}
                    </td>
                    <td class="px-6 py-4 text-right col-span-1">
                        <Link class="font-medium text-blue-600"to={`/draft-menu`}>Register</Link>
                    </td>         
                </tr>
                ))}
            {expanded && (
            <tr class="border-b bg-gray-200">
                <td colSpan="7" class="min-h-28 h-10">
                    <div class="w-96 px-6 py-4">
                        Meet Description: 
                    </div>
                    <div class="w-96 px-6 py-4">
                        Draft Description: 
                    </div>
                    <div class="w-96 px-6 py-4">
                        Specific Details: 
                    </div>
                </td>      
            </tr>
            )}
        </>
    );
  };

export default Meets; 