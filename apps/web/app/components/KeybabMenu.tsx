'use client';
import { KeybabMenu } from "@astra/ui/components/KeybabMenu";
import React from 'react'

const KeybabMenuExamples = () => {
  return (
    <div>
         <KeybabMenu
  action={[
    { label: "Edit", onClick: () => alert("Edit clicked") },
    { label: "Delete", onClick: () => alert("Delete clicked"), disabled: true },
  ]}
/>
  <KeybabMenu
  variant="horizontal" // or "horizontal" or "custom"
  action={[
    { label: 'Edit', onClick: () => alert('Edit clicked') },
    { label: 'Delete', onClick: () => alert('Delete clicked'), disabled: true },
  ]}
/>

{/* Custom variant example */}
<KeybabMenu variant="custom" action={[]}>
  <div>
    <p>Custom content here</p>
    <button onClick={() => alert("Action 1")}>Action 1</button>
  </div>
</KeybabMenu>

    </div>
  )
}

export default KeybabMenuExamples