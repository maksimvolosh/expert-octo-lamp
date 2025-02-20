import random

def generate_array(size, min_val=1, max_val=100):
    return [random.randint(min_val, max_val) for _ in range(size)]

def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

def factorial(n):
    return 1 if n == 0 else n * factorial(n - 1)

def fibonacci(n):
    seq = [0, 1]
    for i in range(2, n):
        seq.append(seq[i - 1] + seq[i - 2])
    return seq

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

def find_primes(limit):
    return [i for i in range(2, limit + 1) if is_prime(i)]

def gcd(a, b):
    return a if b == 0 else gcd(b, a % b)

def lcm(a, b):
    return (a * b) // gcd(a, b)

def main():
    size = 50
    array = generate_array(size, 1, 100)
    
    print("Original Array:", array)
    print("Quick Sort:", quick_sort(array[:]))
    print("Merge Sort:", merge_sort(array[:]))
    
    print("Max:", max(array))
    print("Min:", min(array))
    
    print("Fibonacci (10 terms):", fibonacci(10))
    print("Primes up to 50:", find_primes(50))
    
    print("Factorial of 5:", factorial(5))
    print("GCD of 12 and 18:", gcd(12, 18))
    print("LCM of 12 and 18:", lcm(12, 18))

if __name__ == "__main__":
    main()
