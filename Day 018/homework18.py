
# შეიქმნას რაზმის წევრების სია, ვისს სახელ და გვარში 2-ზე მეტი "ი" არის,გაუდიდდეს პირველი ასო და შევიდეს ახალ სიაში "supersia"

crew_members =  ['giorgi gagnidze', 'giorgi gelashvili', 'jemuka kaxidze', 'luka kevkhishvili', 'luka tevzadze', 'luka turadze', 'nikoloz gogniashvili', 'nikolozi']

supersia = []


for i in crew_members:
    if i.lower().count("i") > 2:
        supersia.append(i.capitalize())
for i in supersia:
    print(i)



