'use client';

import React, { useState } from 'react';
import { DropDown } from '@astra/ui/components/Dropdown'; // Adjust import path if needed
import { Star } from 'lucide-react';
const options = [
  { label: 'Apple', value: 'apple', icon: <Star className="text-yellow-500" /> },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange', disabled: true },
  { label: 'Grape', value: 'grape' },
];
const DropDownExamples = () => {
 const [selected, setSelected] = useState<string | number | (string | number)[]>();
  const handleChange = (val: string | number | (string | number)[]) => {
  setSelected(val);
};

  return (
   <DropDown
      options={options}
      value={selected}
      onChange={handleChange}
      placeholder="Select a fruit"
      searchable
      multiSelect={true}
      label="Fruits"
    />
  );
};

export default DropDownExamples;
