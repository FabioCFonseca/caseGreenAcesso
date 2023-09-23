import React from 'react';
import { render } from '@testing-library/react';
import Card from '../components/Card'; 

test('renders Card component correctly', () => {
  const mockData = [
    {
      id: 1,
      name: 'Character 1',
      image: 'character1.jpg',
    },
    {
      id: 2,
      name: 'Character 2',
      image: 'character2.jpg',
    },
  ];

  const { getByText, getAllByText, getByAltText } = render(
    <Card paginatedData={mockData} pageReference="Characters" />
  );

  const listTitle = getByText('List of Characters');
  expect(listTitle).toBeInTheDocument();

  for (const item of mockData) {
    const characterName = getByText(item.name);
    const detailsButton = getByText('Details', { selector: 'a' }); 
    const characterImage = getByAltText(item.name);

    expect(characterName).toBeInTheDocument();
    expect(detailsButton).toBeInTheDocument();
    expect(characterImage).toBeInTheDocument();
  }
});
