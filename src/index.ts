import { Example } from './types';

import Enumber = Example.Enumber;

const detectNumber = (number: Enumber): void => {
  if (number in Enumber) {
    console.log(Enumber[number]);
  } else {
    console.log("I don't know that number");
  }
};

detectNumber(0);
detectNumber(1);
detectNumber(2);
detectNumber(3);
