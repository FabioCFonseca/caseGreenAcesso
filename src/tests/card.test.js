import React from 'react';
import { render } from '@testing-library/react';
import Card from '../components/Card';

describe('Card component', () => {
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

  let component;

  beforeEach(() => {
    component = render(<Card paginatedData={mockData} pageReference="Characters" />);
  });

  it('renders list title correctly', () => {
    const listTitle = component.getByText('List of Characters');
    expect(listTitle).toBeInTheDocument();
  });

  it('renders characters correctly', () => {
    for (const item of mockData) {
      const characterName = component.getByText(item.name);
      const detailsButton = component.getByText('Details', { selector: 'a' });
      const characterImage = component.getByAltText(item.name);

      expect(characterName).toBeInTheDocument();
      expect(detailsButton).toBeInTheDocument();
      expect(characterImage).toBeInTheDocument();
    }
  });
});
