function my_sort(numbers) {

  for (let i = 0; i < numbers.length; i++) {
    let swapped = false; 
    
    for (let j = 0; j < numbers.length - i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        swapped = true;
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]]
      }
    }

    if (swapped === false) {
      break;
    }
  }

  return numbers;
}

console.log(my_sort([4, 3, 2, 5, 1]));