import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const memoizedCars = createSelector(
  [(state) => state.cars.data, (state) => state.cars.searchTerm],
  (data, searchTerm) => {
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredCars.reduce((acc, cur) => acc + cur.cost, 0);
  }
);

function CarValue() {
  const totalCost = useSelector(memoizedCars);
  return <div className="car-value">Total cost: €{totalCost}</div>;
}

export default CarValue;
