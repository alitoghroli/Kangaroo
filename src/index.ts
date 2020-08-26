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

const EvenOROdd = (input: number): boolean => {
  return input % 2 === 0;
};

const CompareKang = (input: number[]): boolean => {
  const kang1: KANG = new Kangaroo(input[0], input[1]);
  const kang2: KANG = new Kangaroo(input[2], input[3]);
  const t1 = EvenOROdd(kang1.start + kang1.height);
  const t2 = EvenOROdd(kang2.start + kang2.height);

  let jumpCount2: number;
  let jumpCount1: number;

  if (t1 === t2) {
    if (kang1.start > kang2.start) {
      for (let i = 0; !Number.isInteger(jumpCount2); i++) {
        jumpCount2 =
          (kang1.start - kang2.start + kang1.height * i) / kang2.height;
        if (Number.isInteger(jumpCount2)) {
          const Samepoint = kang2.start + kang2.height * jumpCount2;
          console.log('YES and the same point is: ' + Samepoint);
          return true;
        }
      }
    } else {
      for (let i = 0; !Number.isInteger(jumpCount1); i++) {
        jumpCount1 =
          (kang2.start - kang1.start + kang2.height * i) / kang1.height;
        if (Number.isInteger(jumpCount1)) {
          const Samepoint = kang1.start + kang1.height * jumpCount1;
          console.log('YES and the same point is: ' + Samepoint);
          return true;
        }
      }
    }
  } else {
    console.log('NO');
    return false;
  }
};

CompareKang([0, 2, 5, 2]);
