interface KANG {
  start: number;
  height: number;
  jump(): number;
}

class Kangaroo {
  constructor(public start: number, public height: number) {
    this.start = start;
    this.height = height;
  }
  jump(): number {
    return this.start + this.height;
  }
}

const CompareKang = (input: number[]): boolean => {
  const kang1: KANG = new Kangaroo(input[0], input[1]);
  const kang2: KANG = new Kangaroo(input[2], input[3]);

  const BigStart: number =
    kang1.start > kang2.start ? kang1.start : kang2.start;

  console.log('Hello to Jump kangaroo !');
  console.log(
    '[kangaroo 1] start poin :' +
      kang1.start +
      ' and jump height :' +
      kang1.height
  );
  console.log(
    '[kangaroo 2] start poin :' +
      kang2.start +
      ' and jump height :' +
      kang2.height
  );
  console.log("let's start jumping...");
  console.log('------------------------------------');
  do {
    if (kang1.start < kang2.start) {
      kang1.start = kang1.jump();
      console.log('[kangaroo 1] jumped...');
      console.log('[kangaroo 1] start point change to : ' + kang1.start);
    } else {
      kang2.start = kang2.jump();
      console.log('[kangaroo 2] jumped...');
      console.log('[kangaroo 2] start point change to : ' + kang2.start);
    }

    if (kang1.start === kang2.start) {
      console.log('YES and same Point is : ' + kang1.start);
      return true;
    } else {
      console.log('[kangaroo 1] current Point : ' + kang1.start);
      console.log('[kangaroo 2] current Point : ' + kang2.start);
      console.log('Not yet! Again...');
      console.log('-----------------------------------------------------');
    }
  } while (kang1.start < Math.pow(BigStart, 2));

  console.log('NO!');
  return false;
};

CompareKang([0, 80, 500, 2]);
