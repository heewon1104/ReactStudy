import CoreConcept from './CoreConcept.jsx';
import { CORE_CONCEPTS } from '../data';

export default function CoreConcepts(){
    return (
        <section id='core-concepts'>
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((conseptItem) => <CoreConcept key={conseptItem.title}
                    {...conseptItem}></CoreConcept>)}
            </ul>
        </section >
    );
}
