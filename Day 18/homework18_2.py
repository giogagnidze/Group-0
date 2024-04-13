# 2)თქვენი რაზმის წევრებიდან ვისი სახელი და გვარის სიგრძე ნაკლებია 16 სიმბოლოზე გაუდიდდეს სახელი და გვარი და დაიპრინტოს გადიდებულად.

crew_members = ['dachi sazandrishvili', 'giorgi gagnidze', 'giorgi gelashvili', 'jemuka kaxidze', 'luka kevkhishvili', 'luka tevzadze', 'luka turadze', 'nikoloz gogniashvili', 'nikolozi']

for i in crew_members:
    if len(i) < 16:
        print(i.upper())

