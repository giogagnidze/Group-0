#3 homework

def triangle_perimeter(side1, side2, side3):
    perimeter = side1 + side2 + side3
    print("Triangle Perimeter:", perimeter)

# Example usage
side1 = float(input("Enter the length of the first side: "))
side2 = float(input("Enter the length of the second side: "))
side3 = float(input("Enter the length of the third side: "))
triangle_perimeter(side1, side2, side3)
