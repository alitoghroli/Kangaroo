interface KANG {
  start: number;
  height: number;
}

class Kangaroo {
  constructor(public start: number, public height: number) {
    this.start = start;
    this.height = height;
  }
}

const CompareKang = (input: number[]): boolean => {
  const kang1: KANG = new Kangaroo(input[0], input[1]);
  const kang2: KANG = new Kangaroo(input[2], input[3]);

  const x: number = (kang1.start - kang2.start) / (kang2.height - kang1.height);
  if (Number.isInteger(x) && x > 0) {
    const SamePoint = kang2.height * x + kang2.start;
    console.log('YES and the same Point is : ' + SamePoint);
    return true;
  }
  console.log('NO');
  return false;
};

CompareKang([0, 7, 2000, 11]);
