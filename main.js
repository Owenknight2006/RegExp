const str = `
010-1234-1234
gg060208@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=avatar
rein is the cutest
abbbccddddd
d`;

console.log(str.match(/(?<=@).{1,}/g));
