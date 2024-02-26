import { useState } from "react";

import TabButton from "./TabButton"
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState(undefined);

    let tabContent = <p>Please select a topic</p>;

    if (selectedTopic) {
        tabContent = (
            <div id='tab-content'>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>)
    }

    function HandleSelect(SelectedButton) {
        setSelectedTopic(SelectedButton);
    }

    return (
        <Section id="examples" title="Examples">
            <Tabs
            buttons={<><TabButton isSelected={selectedTopic === 'components'} label="Components" onClick={() => HandleSelect('components')}></TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} label="JSX" onClick={() => HandleSelect('jsx')}></TabButton>
                <TabButton isSelected={selectedTopic === 'props'} label="Props" onClick={() => HandleSelect('props')}></TabButton>
                <TabButton isSelected={selectedTopic === 'state'} label="State" onClick={() => HandleSelect('state')}></TabButton></>}>{tabContent}
            </Tabs>
        </Section>
    )
}