const AthleteSearch = ({ athletes }) => {
    return (
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Athlete
                    </th>
                    <th scope="col" class="px-6 py-3">
                        School
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Year
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
                        <td class="px-6 py-4">
                            {athlete.school}
                        </td>
                        <td class="px-6 py-4">
                            {athlete.grade}
                        </td>
                        <td class="px-6 py-4">
                            {athlete.event}
                        </td>
                        <td class="px-6 py-4">
                            {athlete.value}
                        </td>
                        <td class="px-6 py-4">
                            Add to team
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
    )
}; 

export default AthleteSearch; 