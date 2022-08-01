// given a list of points on a euclidean plane, find the k closest points to the origin
function kClosest(points: number[][], k: number): number[][] {
  const result: number[][] = [];
  const map = new Map<number, number[]>();
  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    const distance = Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));
    if (map.has(distance)) {
      map.set(distance, [...map.get(distance), i]);
    } else {
      map.set(distance, [i]);
    }
  }
  for (const [distance, indexes] of map) {
    result.push(...indexes.map(index => points[index]));
  }
  return result.slice(0, k);
}

// just returns a sliced input array? so close but so far