def find_duplicates(dictionary):
    keys_list = list(dictionary.keys())
    keys_list.sort()
    return keys_list

def find_max_min(dictionary, mode='max'):
    if mode == 'max':
        max_key = max(dictionary, key=dictionary.get)
        return max_key, dictionary[max_key]
    elif mode == 'min':
        min_key = min(dictionary, key=dictionary.get)
        return min_key, dictionary[min_key]
    else:
        return None

def combine_dicts(*dicts):
    combined_dict = {}
    for d in dicts:
        combined_dict.update(d)
    return combined_dict

def check_key_existence(dictionary, key):
    return dictionary.get(key) is not None

def remove_and_return(dictionary, key):
    return dictionary.pop(key, None)

def manual_keys(dictionary):
    return list(dictionary.keys())

def manual_values(dictionary):
    return list(dictionary.values())

def manual_items(dictionary):
    return list(dictionary.items())

def manual_get(dictionary, key, default=None):
    return dictionary.get(key, default)

def manual_pop(dictionary, key, default=None):
    return dictionary.pop(key, default)