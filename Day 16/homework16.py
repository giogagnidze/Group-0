#first homework

from turtle import *
#step 1:  draw a square
speed(100)
def kvardratis_xazva():
    for i in range(4):
        forward(200)
        left(90)
kvardratis_xazva()
#end of square
#drawing a door()
forward(70)
left(90)
forward(100)   #height of the door
right(90)
forward(60)
right(90)
forward(100)
#end of door
#draw a triangle
penup()
goto(200, 200)
pendown()

right(150)
forward(200)
left(120)
forward(200)
#end of triangle
#start a 1 windows
penup()
goto(15, 170)
pendown()
left(30)
forward(50)
def window():
    for i in range(3):
        left(90)
        forward(50)
window()
#end of 1 window
#start a 2 window
penup()
goto(180, 170)
pendown()
def window_2():
    for i in range(5):
        forward(50)
        left(90)
window_2()
#end of house
exitonclick()