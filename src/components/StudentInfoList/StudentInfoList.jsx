const students = [
    {
        name: 'Trần Đức Nghĩa',
        age: 23,
        address:'Nam Định',
    },
    {
        name: 'Nguyễn Ngọc Ánh',
        age: 18,
        address: 'Hà Nội',
    },
    {
        name: 'Phạm Lan Anh',
        age: 22,
        address: 'Hà Nam',
    }
]
const Students = (students)=>(
    <tr>
        <td>{students.name}</td>
        <td>{students.age}</td>
        <td>{students.address}</td>
    </tr>
)
const StudentInfoList = () => {
    return ( 
        <table className="list">
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                {
                    students.map((students,index)=>(
                        <Students
                        key = {index}
                        name = {students.name}
                        age = {students.age}
                        address = {students.address}
                        />
                    ))
                }
        </table>
     );
}
 
export default StudentInfoList;