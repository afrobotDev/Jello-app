printUserExperience(4);
printUserExperience(10);
printUserExperience(200);

function printUserExperience(level: number) {
  try {
    if (level < 1 || level > 100) {
      throw new Error("Experience level must be between 1 and 100!");
    }
    console.log(`The user has ${level} years of experience!`);
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    } else {
      console.log(`unknow error: ${err}`);
    }
  }
}
