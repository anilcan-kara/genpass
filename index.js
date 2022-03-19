const patterns = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  special: '_}',
};

const password = [];

Object.entries(patterns).forEach(([_, value]) => {
  Array(3)
    .fill(null)
    .forEach(() => {
      const random = Math.floor(Math.random() * value.length);
      password.push(value[random]);
    });
});

password.sort(() => Math.random() - 0.5);

patterns.letters = [...patterns.uppercase, ...patterns.lowercase];

password.unshift(
  patterns.letters[Math.floor(Math.random() * patterns.letters.length)]
);

console.log(password.join(''));
