full_name = "gio gagnidze"

Consonant_count = 0 

for i in range(0, len(full_name)):
    char = (full_name[i])
    if char == "g" or char == "n" or char == "d" or char == "z":
        Consonant_count += 1

print(Consonant_count)