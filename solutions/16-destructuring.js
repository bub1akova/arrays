const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN
export const getTheNearestLocation = (locations, point) => {
    if (locations.length == 0) return null;
    let dis = 999999999, coordination, location = ''
    locations.forEach((i) => {
      let [name, coordinate] = i
      if (getDistance(coordinate, point) <= dis) {
          dis = getDistance(coordinate, point)
          coordination = coordinate
          location = name
      }
    })
    return [location, coordination]
}
// END
