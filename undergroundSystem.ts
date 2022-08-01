// create the underground system class with the following functions:
// 1. checkIn(int id, string stationName) - check someone in to the station
// 2. checkOut(int id, string stationName) - check someone out of the station
// 3. getAverageTime(string startStation, string endStation) - get the average time between two stations
class UndergroundSystem {
  checkins = {};
  checkouts = {};
  constructor() {
    this.checkins = {};
    this.checkouts = {};
  }
  checkIn(id: number, stationName: string) {
    this.checkins[id] = {
      station: stationName,
      time: new Date().getTime()
    };
  }
  checkOut(id: number, stationName: string) {
    this.checkouts[id] = {
      station: stationName,
      time: new Date().getTime()
    };
  }

  getAverageTime(startStation: string, endStation: string) {
    let total = 0;
    let count = 0;
    for (const id in this.checkins) {
      if (this.checkins[id].station === startStation) {
        total += this.checkouts[id].time - this.checkins[id].time;
        count++;
      }
    }
    return total / count;
  }
}

// doesnt pass, fixing some of the more minor issues also leaves broken code. Using real
// datetimes is accurate to the description but not the problem