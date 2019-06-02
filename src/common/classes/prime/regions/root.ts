import { Region } from '../../region';
import { PrimeLocation } from '../../../enums/primeLocation';
import { Location } from '../../location';
import { PrimeItemCollection } from '../itemCollection';

export function tallonOverworld() {
  const regions = [
    new Region({
      name: 'Root',
      exits: {
        'Tallon North': () => true
      }
    })
  ];

  return regions;
};
