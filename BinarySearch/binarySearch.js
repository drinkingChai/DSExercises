function binarySearch(arr, value) {
  // assumes array is sorted
  var median = (arr.length / 2) - (arr.length / 2 % 1);
  console.log(arr);

  if (arr[median] === value) {
    console.log('found!');
    return true;
  } else if (arr.length === 1) {
    console.log('not found');
    return false;
  } else if (value > arr[median]) {
    binarySearch(arr.slice(median), value);
  } else {
    binarySearch(arr.slice(0, median), value);
  }
}
