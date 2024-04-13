#თქვენი რაზმელების სიიდან, ტოპ 2 ყველაზე გრძელგვარიანი შეაგდეთ ახალ სიაში და დაპრინტეთ
crew_members = ['dachi sazandrishvili', 'gio gagnidze', 'giorgi gelashvili', 'jemuka kaxidze', 'luka kevkhishvili', 'luka tevzadze', 'luka turadze', 'nikoloz gogniashvili', 'nikolozi']

long_names = []

for i in crew_members:
    if len(i) >= 18:
        long_names.append(i)

print(long_names)