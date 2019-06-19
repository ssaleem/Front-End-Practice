function binarySearch(arr, target){
  let end = arr.length;
  let base = 0;

  while(end - base >= 1){
    let mid = Math.floor((end - base)/2 + base);

    if(arr[mid] === target){
      return mid;
    }
    else if(arr[mid] > target){
      end = mid;
    }
    else {
      base = mid + 1;
    }
  }
  return -1;
}
