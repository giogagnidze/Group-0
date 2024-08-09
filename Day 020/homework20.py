#შექმენით თქვენი რაზმელებისგან სია და ამოაგდეთ იმ ინდექსზე მდგომი მოსწავლე, რომელი ინდექსის რიცხვიც უდრის თქვენი სახელის სიგრძეს

crew_members = ['Gio Gagnidze', 'Luka Kevkhishvili', 'Jemiko Kaxidze', 'Luka Turadze', 'Davit Meparishvili', 'Luka Tevzadze', 'Alexandre Katsarava']

name = crew_members[0]

for i in crew_members:
    if len(name) == len(i):
      crew_members.remove(i)
print(crew_members)