
import { useParams } from 'react-router-dom'
export default function Page1() {
    const params = useParams();
    return (
        <div>
            <h1>page1</h1>
            <p>p1={params.p1}</p>
            <p>p2={params.p2}</p>
        </div>
    );
}