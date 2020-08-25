interface KANG {
  start: number;
  height: number;
  jumpPoints(): number[];
}

class Kangaroo {
  constructor(public start: number, public height: number) {
    this.start = start;
    this.height = height;
  }
  jumpPoints(): number[] {
    return [this.start + this.height, this.start - this.height];
  }
}

const CompareKang = (input: number[]): boolean => {
  const kang1: KANG = new Kangaroo(input[0], input[1]);
  const kang2: KANG = new Kangaroo(input[2], input[3]);

  for (let i = 0; i < kang1.jumpPoints().length; i++) {
    for (let j = 0; j < kang2.jumpPoints().length; j++) {
      if (kang1.jumpPoints()[i] === kang2.jumpPoints()[j]) {
        console.log('YES and same Point is: ' + kang2.jumpPoints()[j]);
        return true;
      }
    }
  }
  console.log('NO!');
  return false;
};

CompareKang([0, 3, 5, 2]);
