// src/components/PeopleList.jsx
import { useSelector, useDispatch } from 'react-redux';
import { addPerson, removePerson } from '../redux/peopleSlice';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function PeopleList() {
  const people = useSelector((state) => state.people);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');

  const handleAdd = () => {
    if (!name.trim() || !age.trim() || !location.trim()) return;

    dispatch(addPerson({
      id: uuidv4(),
      name,
      age,
      location,
    }));

    setName('');
    setAge('');
    setLocation('');
  };

  return (
    <div className="max-w-xl w-full px-6 py-10 mx-auto">
      <h1 className="text-4xl font-extrabold mb-6 text-center">People Manager</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          placeholder="Name"
          className="border-b-2 focus:outline-none p-2 font-semibold text-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          className="border-b-2 focus:outline-none p-2 font-semibold text-lg"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          className="border-b-2 focus:outline-none p-2 font-semibold text-lg"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <button
        onClick={handleAdd}
        className="bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition w-full"
      >
        Add Person
      </button>

      <ul className="mt-10 space-y-4">
        {people.map((person) => (
          <li
            key={person.id}
            className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
          >
            <div>
              <p className="text-xl font-bold">{person.name}</p>
              <p className="text-sm text-gray-500">Age: {person.age}</p>
              <p className="text-sm text-gray-500">Location: {person.location}</p>
            </div>
            <button
              onClick={() => dispatch(removePerson(person.id))}
              className="text-red-500 hover:text-red-700 font-bold"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
