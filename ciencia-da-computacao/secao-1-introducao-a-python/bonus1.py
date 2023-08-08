def minimum(numbers):
    smaller = numbers[0]
    for number in numbers:
        if number < smaller:
            smaller = number
    return smaller


def minimum_with_native(numbers):
    return min(numbers)
