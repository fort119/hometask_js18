const str = `The dates between1976-01-12, and 1983-08-14, fhkdfkdnvfkdkjfjk knfvkjvdjkvdf fdkd fjdjkd
;;b;vlvlvlvl ksksksksks bbbb bbbb-dd-ss 2002-08-30 kfmvmxcmxclm 4004-02-10 kdkdkdkdkthe 
code was 2004-11-12 and possible invalid date 8765-11-31 2024-09-313 2222-22-01 2007-08-10gffgf 1954-02-30 `;

function findDates(string) {

  let regEx = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/gm;

  const found = Array.from(string.matchAll(regEx));
  const arrOfDates = [];

  for (i = 0; i < found.length; i++) {
    if (found[i].groups.month <= 12 && found[i].groups.month > 0 && found[i].groups.day > 0 && found[i].groups.day <= 31) {
      switch (found[i].groups.month) {
        case "01":
          found[i].groups.monthName = "January";
          break;
        case "02":
          found[i].groups.monthName = "February";
          break;
        case "03":
          found[i].groups.monthName = "March";
          break;
        case "04":
          found[i].groups.monthName = "April";
          break;
        case "05":
          found[i].groups.monthName = "May";
          break;
        case "06":
          found[i].groups.monthName = "June";
          break;
        case "07":
          found[i].groups.monthName = "July";
          break;
        case "08":
          found[i].groups.monthName = "August";
          break;
        case "09":
          found[i].groups.monthName = "September";
          break;
        case "10":
          found[i].groups.monthName = "October";
          break;
        case "11":
          found[i].groups.monthName = "November";
          break;
        case "12":
          found[i].groups.monthName = "December";
          break;
      };

      arrOfDates.push(found[i].groups);
    }
  }
  return arrOfDates;
};

console.log(findDates(str));

